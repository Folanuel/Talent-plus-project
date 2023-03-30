import React from 'react'
import Picthree from '../assets/unsplash_6MePtA9EVDA.png'
import Bluelogo from '../assets/logo1/Frame131blue.png'
import Greenlogo from '../assets/logo1/Frame131green.png'
import Orangelogo from '../assets/logo1/Frame131orange.png'
import Pinklogo from '../assets/logo1/Frame131pink.png'

const About2 = () => {
    return (
        <div className=' bg-[#F8F9FC] grid grid-cols-1 md:grid-cols-2 gap-10 px-[80px]  '>
            <div className=''>
                <h1 className='capitalize py-2 text-5xl text-[#000F24] font-extrabold'>this is why we are best from others</h1>
                <p className='capitalize py-3 text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                <img src={Picthree} alt=' boy with a laptop' className='pb-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-6'>
                <div className='bg-white p-2 w-[256px] h-[290px]'>
                    <img src={Bluelogo} alt='logos' className='py-4'/>
                    <h1 className='font-extrabold capitalize text-[#000F24]'> experienced mentors</h1>
                    <p className='capitalize py-4 text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                </div>
                <div className='bg-white p-2 w-[256px] h-[290px]'>
                    <img src={Greenlogo} alt='logos' className='py-4'/>
                    <h1 className='font-extrabold capitalize text-[#000F24]'>one-on-one meetings</h1>
                    <p className='capitalize py-4 text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                </div>
                <div className='bg-white p-2 w-[256px] h-[290px]'>
                    <img src={Pinklogo} alt='logos' className='py-4'/>
                    <h1 className='font-extrabold capitalize text-[#000F24]'>one-on-one meetings</h1>
                    <p className='capitalize py-4 text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                </div>
                <div className='bg-white p-2 w-[256px] h-[290px]'>
                    <img src={Orangelogo} alt='logos'className='py-4'/>
                    <h1 className='font-extrabold capitalize text-[#000F24]'> affordable prices</h1>
                    <p className='capitalize py-4 text-[#A1A1A1]'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition.</p>
                </div>
            </div>

            </div>
    )
}

export default About2