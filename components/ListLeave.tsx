import { columns } from '@/app/user/leaveshistory/columns'
import { DataTable } from '@/app/user/leaveshistory/data-table'
import { getData } from '@/app/user/leaveshistory/page'
import React from 'react'

const ListLeave = async() => {
  const data = await getData()
  return (
    <div className='py-5'>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}

export default ListLeave