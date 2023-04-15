import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = UserAuth();
  const navigate = useNavigate();
  const handleForgotPassword = async e => {
    e.preventDefault();
    setError('');
    try {
      await resetPassword(email);
      console.log('changing');
      navigate('/get-start');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
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
                Reset your account
              </h1>
              <form
                onSubmit={handleForgotPassword}
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
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full hover:bg-primary-700 ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 text-white">
                  Reset
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't want to rest your account?{' '}
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
