import React from 'react'
import { ReactComponent as World } from '../assets/world.svg'
import Frame95 from '../assets/Frame95.png'
import Frame96 from '../assets/Frame96.png'
import Frame97 from '../assets/Frame97.png'
import Frame98 from '../assets/Frame98.png'
import Frame99 from '../assets/Frame99.png'
import A from '../assets/coursepassport/Frame165a.png' 
import B from '../assets/coursepassport/Frame165b.png' 
import C from '../assets/coursepassport/Frame165c.png' 
import D from '../assets/coursepassport/Frame165d.png' 
import E from '../assets/coursepassport/Frame165e.png' 
import F from '../assets/coursepassport/Frame165f.png' 

const Community2 = () => {
    return (
        <div className='w-full h-screen bg-[#004DB3] pt-10 pl-[80px]'>
        <div className=' absolute '>
                    <World  className=' absolute w-[983px] h-[500px]'/>
                    <img src={Frame95} alt='contact card' className='w-[50px] h-[50px] relative left-[350px] top-[50px]'/>
                    <img src={Frame96} alt='contact card' className='w-[50px] h-[50px] absolute left-[706px] top-[50px]'/>
                    <img src={Frame97} alt='contact card' className='w-[50px] h-[50px] absolute left-[256px] top-[70px]'/>
                    <img src={Frame98} alt='contact card' className='w-[50px] h-[50px] absolute left-[440px] top-[100px]'/>
                    <img src={Frame99} alt='contact card' className='w-[50px] h-[50px] absolute left-[600px] top-[200px]'/>
                    <img src={A} alt='contact card' className='w-[50px] h-[50px] absolute left-[200px] top-[200px]'/>
                    <img src={B} alt='contact card' className='w-[50px] h-[50px] absolute left-[350px] top-[400px]'/>
                    <img src={C} alt='contact card' className='w-[50px] h-[50px] absolute left-[580px] top-[280px]'/>
                    <img src={D} alt='contact card' className='w-[50px] h-[50px] absolute left-[800px] top-[200px]'/>
                    <img src={E} alt='contact card' className='w-[50px] h-[50px] absolute left-[600px] top-[200px]'/>
                    <img src={F} alt='contact card' className='w-[50px] h-[50px] absolute left-[900px] top-[300px]'/>
            
                <h1 className='absolute text-[#004DB3] bg-white font-extrabold top-[500px] left-[600px] px-4 whitespace-nowrap'>Join Our Community</h1>
            
        </div>
        </div>
    )
}

export default Community2