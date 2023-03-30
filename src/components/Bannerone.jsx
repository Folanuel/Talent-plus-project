import React from 'react'
import {BsSlack, BsDropbox} from 'react-icons/bs'
import {CgMonday} from 'react-icons/cg'
import {FaStripe} from 'react-icons/fa'
import {SiZoom} from 'react-icons/si'


const Bannerone = () => {
    return (
        <div className='w-[428px] h-[100px] grid grid-cols-3 gap-2 px-[30px] pb-[20px] md:w-full md:h-[100px] md:flex md:items-center md:space-x-16 md:px-[200px] bg-[#CCDBF0]'>
        <SiZoom className=' text-5xl md:text-7xl text-white'/>
        <FaStripe className='  text-5xl md:text-7xl text-white'/>
        <div className=' flex items-center md:flex md:items-center'><CgMonday className=' md:text-4xl text-white basis-1/5' /> <h1 className=' md:text-3xl text-white'> monday<span className=' md:text-white text-xl'>.com</span></h1></div>
        <div className=' flex items-center md:flex md:items-center'><BsSlack className=' md:text-4xl text-white '/> <h1 className=' md:text-3xl text-white font-bold '> Slack</h1></div>
        <div className=' flex items-center md:flex md:items-center'><BsDropbox className=' md:text-4xl text-white '/> <h1 className=' md:text-3xl text-white '> Dropbox</h1></div>
        
        </div>
    )
}

export default Bannerone