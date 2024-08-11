"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminLogin = () => {
  return (
    <div>AdminLogin
      <Link href='/admin' className='border p-4'>Login</Link>
    </div>
  )
}

export default AdminLogin