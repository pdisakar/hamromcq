import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const [errorMsg, setErrorMSG] = useState('');

  const handleSubmitLogout = async e => {
    e.preventDefault();
    setError('');
    if (password.length <= 0 || email.length <= 0) {
      //console.log('not valid');
      setErrorMSG('Please fill the required fields');
      return;
    } else {
      try {
        await signIn(email, password);
        console.log("You're logged in");
        navigate('/get-index');
      } catch (e) {
        if (e.code === 'auth/user-not-found') {
          setErrorMSG('User account not found');
        }
        else if (e.code === 'auth/wrong-password') {
          setErrorMSG('Wrong password try again');
        } else {
          setError(e.message);
          console.log(e.message);
        }
      }
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center py-10 px-6  h-screen  mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 pt-5 text-2xl font-semibold text-white ">
          <img
            className="w-8 h-8 mr-2"
            src=".\favicon.ico"
            alt="logo"
          />
          Hamro MCQ
        </Link>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmitLogout}
              className="space-y-4 md:space-y-6"
              action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="abc@gmail.com"
                  required=""
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-white">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary-600 hover:underline text-white">
                  Forgot password?
                </Link>
              </div>

              <p className="text-gray-100 text-base font-medium text-primary-600 text-center">
                {errorMsg}
              </p>

              <button
                type="submit"
                className="w-full hover:bg-primary-700 ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 text-white">
                Sign in
              </button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to="/register-page"
                  className="font-medium hover:underline text-primary-500">
                  Register Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
