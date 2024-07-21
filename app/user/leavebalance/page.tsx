import { Separator } from '@/components/ui/separator'
import React from 'react'

const LeaveBalance = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl font-black">Leaves Balance</h1>
      <p className="text-base text-gray-500">
        Here you make changes according to your prefrence
      </p>
      <Separator className="my-2" />
      <div>
        {/* Settings below */}
      
      </div>
    </div>
  )
}

export default LeaveBalance