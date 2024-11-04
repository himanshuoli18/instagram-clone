import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-transparent">
            <section className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
                {/* Logo / Title */}
                <h1 className="text-center text-5xl pb-2 font-bold italic bg-gradient-to-r from-blue-600 to-green-400 text-transparent bg-clip-text mb-8">
                    Momently
                </h1>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email or Mobile */}
                    <div>
                        <label className="sr-only" htmlFor="email-or-mobile">Mobile Number or Email</label>
                        <input 
                            id="email-or-mobile"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Mobile Number or Email"
                            type="text"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input 
                            id="password"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Password"
                            type="password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Log In
                    </button>

                    {/* Don't have an account? Register */}
                    <p className="text-sm text-center text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
