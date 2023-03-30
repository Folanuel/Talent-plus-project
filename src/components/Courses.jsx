import React from 'react'
import { data } from '../Data/data'
import {BsFillStarFill, BsClock} from 'react-icons/bs'
import {MdOutlineMenuBook} from 'react-icons/md'

const Courses = () => {
    const course = data;

    return (
        <div className='px-[80px] bg-[#F8F9FC]'>
            <h1 className='capitalize text-center font-extrabold text-[#000F24] text-4xl md:text-6xl py-4 '>browse our popular courses</h1>
            <p className='capitalize text-[20px] leading-7 text-[#A1A1A1] text-center md:px-[250px] py-4'> high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            
            <div className='flex items-center space-x-14 pl-[400px] py-8'>
                <p className='capitalize text-[#0040B3] 1xl font-extrabold bg-white'>All categories</p>
                <p className='capitalize text-[#A1A1A1] 1xl'>design</p>
                <p className='capitalize text-[#A1A1A1] 1xl'>development</p>
                <p className='capitalize text-[#A1A1A1] 1xl'>marketing</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-12 pt-8'>
            {course.map((item, index) => (
                <div key={index}  className="border-lg border-2 hover:shadow-lg hover:shadow-[#040c16] hover:scale-105 group container rounded-md flex flex-col px-3 py-3">
                <div className='pb-2'>
                <img src={item.pic} alt='main pic'/>                
                </div>
                <div className='flex justify-between pb-3'>
                <p className='text-[#004DB3] bg-[#a3c2fa] rounded-full px-3 text-sm '>{item.category}</p>
                <div className='flex'>
                    <div className='flex px-2 space-x-2'>
                        <p className='text-sm'>{item.rating} </p>
                        <BsFillStarFill className='text-[#F6B435]'/>
                    </div>
                    
                    <p className='text-sm'> {item.num}</p>
                </div>                               
                </div>
                    <h1 className='text-md capitalize font-extrabold'>{item.course}</h1>
                    <div className='flex justify-between py-4'>
                    <div className='flex px-2 space-x-2'>
                        <BsClock className='text-[#A1A1A1]'/>
                        <p className='text-[#A1A1A1] text-sm'> {item.time}</p>
                    </div>                    
                    <div className='flex px-2 space-x-2'>
                        <MdOutlineMenuBook className='text-[#A1A1A1]'/>
                        <p className='text-[#A1A1A1] text-sm'> {item.lessons}</p>
                    </div>                    
                    </div>
                <div className='flex justify-between'>
                <div className='flex px-2 space-x-2'>
                    <img src={item.passport} alt='passport' className='w-[30px] h-[30px]' />
                    <p className='capitalize font-extrabold'>{item.teacher}</p>
                </div>
                
                <p className='text-[#004DB3] font-extrabold'>{item.price}</p>
                </div>                    
                </div>
            ) )}
        </div>
            </div>
            <div className='grid'>
                <h1 className='capitalize bg-[#004DB3] m-auto py-3 px-5 mt-5 text-white font-extrabold'>Explore all courses</h1>
            </div>
            
        </div>
    )
}

export default Courses