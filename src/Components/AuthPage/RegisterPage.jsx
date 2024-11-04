import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {email, password, fullname, username}
        
    }

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
                        <label className="sr-only" htmlFor="email-or-mobile">Email</label>
                        <input 
                            id="email-or-mobile"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Mobile Number or Email"
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            required
                        />
                    </div>
                    
                    {/* Full Name */}
                    <div>
                        <label className="sr-only" htmlFor="full-name">Full Name</label>
                        <input 
                            id="full-name"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Full Name"
                            onChange={e => setFullname(e.target.value)}
                            type="text"
                            required
                        />
                    </div>
                    
                    {/* Username */}
                    <div>
                        <label className="sr-only" htmlFor="username">Username</label>
                        <input 
                            id="username"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)}
                            type="text"
                            required
                        />
                    </div>
                    
                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        onClick={handleSubmit}
                        className="w-full bg-blue-500 text-white font-semibold p-3 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Sign Up
                    </button>

                    {/* Already have an account? Login */}
                    <p className="text-sm text-center text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold text-blue-600 hover:underline">
                                Login
                            </Link>
                        </p>
                </form>
            </section>
        </main>
    );
};

export default RegisterPage;
