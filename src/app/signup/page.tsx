'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";
import Toast from '@/components/Toast';
import axios from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        "email": "",
        "password": "",
        "username": ""

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(true)
    const [loading, setLoading] = React.useState(false)
    const router = useRouter();

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/signup', user);
            console.log(response.data);
            toast.success("Signing up...")
            router.push('/login')
        } catch (error: any) {
            console.log("Sign up failed", error)
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user.email && user.password && user.username) {
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    }, [user])
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Toast />
            <div className="flex bg-gray-100 drop-shadow-xl rounded-xl flex-col items-center w-fit  justify-center py-6 px-4 space-y-5">
                <h1 className='font-extrabold text-3xl'>
                    {
                        loading ? <ClipLoader color='#3B82F6' loading={loading} size={50} /> : "Signup"
                    }
                </h1>
                <hr />
                <div className='flex items-start justify-start flex-col h-fit w-fit'>
                    <label className='label' htmlFor='username'>Username</label>
                    <input className='input' id='username' type='text' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder='Username' />
                </div>
                <div className='flex items-start justify-start flex-col h-fit w-fit'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input className='input' id='email' type='email' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='Email' />
                </div>
                <div className='flex items-start justify-start flex-col h-fit w-fit'>
                    <label className='label' htmlFor='password'>Password</label>
                    <input className='input' id='password' type='password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='Password' />
                </div>
                <div className='flex flex-col space-y-4 items-center justify-center'>
                    <button onClick={onSignup} className='
                    text-lg font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2
                    '>
                        {buttonDisabled ? "No Signup" : "Signup"}

                    </button>
                    <Link className='font-bold text-base text-pink-500' href="/login">
                        Signup                    </Link>
                </div>
            </div>
        </div>

    )
}