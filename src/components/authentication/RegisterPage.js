import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [errorMsg, setErrorMSG] = useState('');

  const handleSubmitRegister = async e => {
    e.preventDefault();
    setError('');
    console.log();

    const checkbox = document.getElementById('terms');

    if (password.length <= 0 || email.length <= 0) {
      //console.log('not valid');
      setErrorMSG('Please fill the required fields');
      return;
    } else if (password.length < 6) {
      setErrorMSG('Password must be at least 6 characters');
      return;
    } else if (checkbox.checked == false) {
      setErrorMSG('Agree to Terms and Conditions');
      //  console.log('hello');
      return;
    } else {
      try {
        await createUser(email, password);
        navigate('/get-index');
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          // Email already registered, show error message to user
          setErrorMSG('Email already in use');
        } else {
          setError(e.message);
          console.log(e.message);
        }
      }
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src=".\favicon.ico"
              alt="logo"
            />
            Hamro MCQ
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>

              <form
                onSubmit={handleSubmitRegister}
                className="space-y-4 md:space-y-6"
                action="#">
                {/* <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="This is Fear"
                    required=""
                  />
                </div> */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="you@exmple.com"
                    required=""
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-300">
                      I accept the{' '}
                      <Link
                        to="/terms-and-conditions"
                        className="font-medium text-primary-600 hover:underline text-primary-500">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>

                <p className="text-gray-100 text-base font-medium text-primary-600 dtext-primary-500 text-center">
                  {errorMsg}
                </p>
                <button className="w-full text-white bg-primary-600 hover:bg-primary-700 ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link
                    to="/get-start"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
