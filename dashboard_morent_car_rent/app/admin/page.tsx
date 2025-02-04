'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function AdminLogin() {
    // State to store user input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('') // State to store error messages
    const router = useRouter() // Next.js router for navigation

    // Function to handle form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        setError(''); // Clear any previous error messages

        try {
            // Send email and password to API route for authentication
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, // Send data as JSON
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json(); // Parse JSON response

            if (response.ok) {
                // If login is successful, store login state in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                router.push('/admin/dashboard'); // Redirect to admin dashboard
            } else {
                // If login fails, show an error message
                setError(data.message || 'Invalid email or password');
            }
        } catch (error) {
            setError('Something went wrong. Please try again later.');
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
                
                {/* Display error message if authentication fails */}
                {error && <p className="text-red-500 mb-2">{error}</p>}

                {/* Email input field */}
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                    value={email}
                />

                {/* Password input field */}
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                    value={password}
                />

                {/* Login button */}
                <button
                    type="submit"
                    className="bg-[#2563EB] text-white px-4 py-2 rounded w-full"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
