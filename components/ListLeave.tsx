import { columns } from '@/app/user/leaveshistory/columns'
import { DataTable } from '@/app/user/leaveshistory/data-table'
import { getData } from '@/constants/leavesdata'
import { cn } from '@/lib/utils'
import React from 'react'

const ListLeave = async({className}:{className:string}) => {
  const data = await (await getData())
  return (
    <div className={cn("py-5 max-h-screen pb-10", className)}>
      <DataTable columns={columns} data={data.filter(d=>d.id<8)}/>
    </div>
  )
}

export default ListLeave