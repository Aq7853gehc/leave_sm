import { redirect } from 'next/navigation'
import React from 'react'

const Login = () => {
  return (
    <div>Login
      {redirect("/user")}
    </div>
  )
}

export default Login