'use client'
import { SafeCourse, SafeUser } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CourseProps{
    data:SafeCourse,
    key:string,
    currentUser:SafeUser | null
}
const CourseComponent = ({data, key}:CourseProps) => {
    const router = useRouter();
  return (
    <div className='pt-4' key={key} onClick={()=>router.push(`/create/${data.id}`)}>
        <div className='flex flex-col w-[300px] p-2 relative'>
            <div className='cursor-pointer hover:opacity-80'>
                <div className='border-[4px] broder-yellow-400 relative'>
                    <Image src={data.imageSrc} width={200} height={200} alt="Course Image" 
                        className='object-cover w-[320px] h-[150px]'
                    />
                </div>
                <div className='pt-1 px-1'>
                    <h3 className='text-[16px]'>{data.name}</h3>
                    <span className='text-gray-400 block text-[9px] font-normal'>Author: {data.author}</span>
                    <span>Rs. {data.price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseComponent