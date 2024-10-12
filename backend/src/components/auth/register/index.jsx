import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/authContext'
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../../firebase/auth'

const Register = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const { userLoggedIn, userData } = useAuth()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isProcessing) {
            setIsProcessing(true)
            setErrorMessage('')
            
            try {
                if (isLogin) {
                    await doSignInWithEmailAndPassword(email, password)
                } else {
                    if (password !== confirmPassword) {
                        throw new Error("Passwords don't match")
                    }
                    await doCreateUserWithEmailAndPassword(email, password)
                }
                
                // Successful login/registration
                if(userData){
                    if(userData?.roles?.includes("admin")){
                        navigate('/admin')
                    }else{
                        navigate('/home')
                    }
                }
            } catch (error) {
                setErrorMessage(error.message)
            } finally {
                setIsProcessing(false)
            }
        }
    }

    return (
        <>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center mb-6">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                {isLogin ? 'Login to Your Account' : 'Create a New Account'}
                            </h3>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-4"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                disabled={isProcessing}
                                type="password"
                                autoComplete='new-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {!isLogin && (
                            <>
                                <div>
                                    <label className="text-sm text-gray-600 font-bold">
                                        Confirm Password
                                    </label>
                                    <input
                                        disabled={isProcessing}
                                        type="password"
                                        autoComplete='off'
                                        required={!isLogin}
                                        value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>
                            </>
                        )}

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isProcessing ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isProcessing ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
                        </button>
                        <div className="text-sm text-center">
                            {isLogin ? "Don't have an account?" : "Already have an account?"} {' '}
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-center text-sm hover:underline font-bold"
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Register
