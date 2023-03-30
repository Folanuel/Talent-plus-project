import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

import {Link} from 'react-scroll'
import TechTime from '../assets/techtime.png'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    

    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className='fixed w-[428px] md:w-full h-[80px] flex justify-between items-center px-4 py-[50px] bg-[#004DB3] text-gray-300 z-50 '>
        <div className='md:pl-[55px]'>        
        <img src={TechTime} alt='logo' className='w-[130px] h-[47px] hover:cursor-pointer'/>
        </div>

        {/* menu section */}
        
        <ul className='hidden md:flex mr-10'>
            <li >
            <Link className="hover:text-blue-400 hover:scale-110 duration-500 px-4" activeClass="active" spy={true} to="home" smooth={true} duration={500} offset={-100}>
            Home
            </Link>
            </li>
            <li >
            <Link className="hover:text-blue-400 px-4" activeClass="active" spy={true} to="about" smooth={true} duration={500} offset={-100}>
            About Us
            </Link>
            </li>
            <li>
            <Link className="hover:text-blue-400 px-4" activeClass="active" spy={true} to="skills" smooth={true} duration={500} offset={-100}>
            Courses
            </Link>
            </li>
            <li>
            <Link className="hover:text-blue-400 px-4" activeClass="active" spy={true} to="projects" smooth={true} duration={500} offset={-100}>
            Testimonial
            </Link>
            </li>
            <li>
            <Link className="hover:text-blue-400 px-4" activeClass="active" spy={true} to="contact" smooth={true} duration={500} offset={-90} >
            Community
            </Link>
            </li>
            <li>
            <Link className="hover:text-blue-400 bg-white text-[#004DB3] px-5 py-3 rounded-md font-extrabold " activeClass="active" spy={true} to="contact" smooth={true} duration={500} offset={-90} >
            Enroll Now
            </Link>
            </li>
        </ul>
        


        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* menu for mobile */}
        <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-[428px] h-screen bg-[#004DB3] flex flex-col justify-center items-center'}>   
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Us
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Courses
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
            Testimonial
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Community
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Enroll Now
            </Link>
            </li>
        </ul>       
        </div>
    )
}