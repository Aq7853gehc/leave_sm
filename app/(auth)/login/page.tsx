'use client'
import { redirect } from 'next/navigation'
import React from 'react'

const Login = () => {
  return (
    <div>Login
     <button onClick={() => redirect('/user')} className='border p-4'>Login</button>
    </div>
  )
}

export default Login