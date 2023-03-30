import React from 'react'
import {Carousel} from 'flowbite-react'
import A from '../assets/coursepassport/Frame165a.png' 
import B from '../assets/coursepassport/Frame165b.png' 
import C from '../assets/coursepassport/Frame165c.png' 

const Testimonial = () => {
    return (        
        <div className='px-[80px] bg-[#F8F9FC]'>
            <h1 className='capitalize text-center font-extrabold text-[#000F24] text-6xl py-4 '>What are our clients saying</h1>
            <p className='capitalize text-[20px] leading-7 text-[#A1A1A1] text-center md:px-[250px] py-4'> high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
            <div className=''>
            <div className="p[80px] w-[683px] h-[250px]">
            <Carousel indicators={false}>
                <div className="h-full items-center justify-center bg-white text-[#A1A1A1] pt-10 px-[80px] py-4">
                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world </p>
                <div className='flex pt-6'>
                    <img src={A} alt="passport" className='w-[40px] h-[40px] pr-2' /> 
                    <div className='grid grid-rows-2'>
                        <h1>Bella Moon</h1>
                        <p>Product Designer</p>
                    </div>
                    
                </div>
                </div>
                <div className="h-full items-center justify-center bg-white text-[#A1A1A1] pt-10 px-[80px] py-4">
                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world </p>
                <div className='flex pt-6'>
                    <img src={B} alt="passport" className='w-[40px] h-[40px] pr-2' /> 
                    <div className='grid grid-rows-2'>
                        <h1>Samuel Fortune</h1>
                        <p>Developer</p>
                    </div>
                    
                </div>
                </div>
                <div className="h-full items-center justify-center bg-white text-[#A1A1A1] pt-10 px-[80px] py-4">
                <p>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world </p>
                <div className='flex pt-6'> 
                    <img src={C} alt="" className='w-[40px] h-[40px] pr-2' /> 
                    <div className='grid grid-rows-2'>
                        <h1>Bryce Jason</h1>
                        <p>Product Designer</p>
                    </div>
                    
                </div>
                </div>
            </Carousel>
            </div>
            </div>
        </div>
        
    )
}

export default Testimonial