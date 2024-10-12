import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

const Home = () => {
    const { userLoggedIn, userData } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

     const navigate = useNavigate()

    if (!userLoggedIn) {
        return <Navigate to="/login" />
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome, {userData?.displayName || 'User'}!
                </h2>
                
                <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-bold text-gray-700">Your Roles:</h3>
                    {userData?.roles && userData.roles.length > 0 ? (
                        userData.roles.map((role) => (
                            <div key={role} className="flex items-center justify-between">
                                <span className="text-lg text-gray-600">{role}</span>
                                <button
                                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => {
                                        navigate(`/${role}`)
                                    }}
                                >
                                    Get {role} access
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No roles assigned yet.</p>
                    )}
                </div>
                {
                    userData.email
                }
                
                <div className="mt-8">
                    <Link
                        to="/dashboard"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home