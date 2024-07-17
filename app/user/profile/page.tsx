import { Separator } from '@/components/ui/separator'
import React from 'react'

const Profile = () => {
  return (
    <section className='mt-4 flex flex-col w-full relative px-2'>
      <h1 className='text-4xl font-bold '>Profile</h1>
      <Separator className='mb-2'/>
      <div className='flex flex-col border max-w-sm rounded-sm '>
        {/* basic info */}
        <h2 className='text-2xl font-semibold text-black bg-blue-300 '>Personal Info</h2>
        <div className='flex mt-5 gap-3 items-center'>
          <h1 className='text-xl font-bold'>Name</h1>
          <p className='text-xl font-semibold '>Kmalesh Shani</p> 
        </div>
      </div>
    </section>
  )
}

export default Profile