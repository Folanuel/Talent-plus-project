import React from 'react'
import TechTime from '../assets/techtime.png'
import {MdFacebook} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {FaYoutube, FaInstagram, FaDiscord} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' bg-[#000F24] grid grid-cols-4 mt-[100px] px-[80px] py-[80px] text-white'>
        <div className='grid grid-rows-3 '>
            <img src={TechTime} alt='logo' />
            <p className='text-sm'>reach out to us on any of our social media networks</p>
            <div className='flex space-x-4'>
                <MdFacebook  className='text-[#A2A2A2B]'/>
                <BsTwitter  className='text-[#A2A2A2B]'/>
                <FaYoutube  className='text-[#A2A2A2B]'/>
                <FaInstagram  className='text-[#A2A2A2B]'/>
                <FaDiscord  className='text-[#A2A2A2B]'/>
            </div>
        </div>
        <div className='grid grid-rows-6 gap-2'>
            <h1 className='font-extrabold text-3xl pb-2'>Useful Links</h1>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Courses</p>
            <p>Testimonial</p>
            <p>Community</p>
        </div>
        <div className='grid grid-rows-6 gap-2'>
            <h1 className='font-extrabold text-3xl pb-2'>Community</h1>
            <p>Help Centers</p>
            <p>Partners</p>
            <p>Suggestion</p>
            <p>Blog</p>
            <p>Newsletter</p>
        </div>
        <div className='grid grid-rows-2'>
            <h1 className='font-extrabold text-3xl'>Subscribe Us</h1>
            <form >
            <input type='email' placeholder='Email Address' />
            <button className='bg-[#004DB3] py-3 px- text-sm'>Send Message</button>
            </form>
            
        </div>
                
        </div>
    )
}

export default Footer