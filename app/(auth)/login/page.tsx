

"use client";
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginSchema, LoginSchema } from '@/lib/validation/loginSchema';
import Link from 'next/link';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash, FaUser } from "react-icons/fa";
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const [show, setShow] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginSchema> = async ({ username, password }) => {
    try {
      const response = await fetch('http://localhost:3000/api/users/userData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Login successful');
        // Handle successful login (e.g., redirect, store token, etc.)
      } else {
        setServerError(result.error || 'Login failed');
      }
    } catch (error: any) {
      setServerError('Something went wrong');
    }
  };

  return (
  
      <div className='w-full max-w-sm p-8 bg-white rounded-lg shadow-xl'>
        <div className='flex items-center justify-center mb-6'>
          <FaUser className='text-4xl max-sm:text-3xl text-gray-700 mr-3' />
          <h1 className='text-4xl max-sm:text-3xl font-extrabold text-gray-800'>Login</h1>
        </div>
        <p className='text-xl text-gray-600 text-center max-sm:text-lg mb-4'>Welcome Back</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className='block text-gray-600 font-medium mb-2'>Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
              placeholder='employee123'
            />
            {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
          </div>
          <div className='mt-4'>
            <label htmlFor="password" className='block text-gray-600 font-medium mb-2'>Password</label>
            <div className='relative'>
              <input
                {...register('password')}
                type={show ? "text" : "password"}
                id="password"
                className={`w-full border-2 rounded-md p-2 text-gray-700 focus:outline-none pr-10 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                placeholder='Enter your password'
              />
              {show ? (
                <FaRegEyeSlash onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
              ) : (
                <IoEyeOutline onClick={() => setShow(!show)} className='absolute right-3 top-3 text-gray-500 cursor-pointer' />
              )}
            </div>
            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
          </div>
          <button
            type='submit'
            className='w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-300'
          >
            Login now
          </button>
          {serverError && <p className='text-red-500 text-center mt-4'>{serverError}</p>}
          <div className='flex justify-center mt-4'>
            <Link href="/forgot-password">
              <p className='text-sm text-blue-500 hover:text-blue-600 transition duration-300'>Forgot Password?</p>
            </Link>
          </div>
        </form>
      </div>
    // </div>
  );
};

export default LoginForm;
