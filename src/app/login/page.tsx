'use client';
import Toast from '@/components/Toast';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        "email": "",
        "password": "",

    })

    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user);
            console.log(response.data);
        } catch (error: any) {
            console.log("Sign up failed", error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Toast />

            <div className="flex bg-gray-100 drop-shadow-xl rounded-xl flex-col items-center w-fit  justify-center py-6 px-4 space-y-5">
                <h1 className='font-extrabold text-3xl'>{
                    loading ? <ClipLoader color='#3B82F6' loading={loading} size={50} /> : "Login"
                }</h1>
                <hr />
                <div className='flex items-start justify-start flex-col h-fit w-fit'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' id='email' type='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Email' />
                </div>
                <div className='flex items-start justify-start flex-col h-fit w-fit'>
                    <label className='label' htmlFor='password'>Password</label>
                    <input className='input' id='password' type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Password' />
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <button onClick={onLogin} className='
                    text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2
                    '>Sign Up</button>
                    <Link className='font-bold text-base text-pink-500' href="/signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>

    )
}