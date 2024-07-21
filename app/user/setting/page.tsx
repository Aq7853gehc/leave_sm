import { Separator } from '@/components/ui/separator'
import React from 'react'

const Setting = () => {
  return (
    <div className='flex flex-col '>
      <h1 className="text-4xl font-bold ">Settings</h1>
      <p className="text-base text-gray-500">Here you make changes according to your prefrence</p>
      <Separator className="mb-1" />
    </div>
  )
}

export default Setting