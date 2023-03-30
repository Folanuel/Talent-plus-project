import React from 'react'
import Picone from '../assets/unsplash_4-EeTnaC1S4.png'
import Pictwo from '../assets/unsplash_VtKoSy_XzNU.png'
import Audio from '../assets/Frame110audio.png'
import Live from '../assets/Frame110live.png'
import Record from '../assets/Frame110record.png'
import Notes from '../assets/Frame110notes.png'
import Crown from '../assets/crown.png'
import dotssss from '../assets/dotssss.png'
import Frame113 from '../assets/Frame113.png'
import Vectorcircleplane from '../assets/Vectorcircleplane.png'



const About = () => {
    return (
        <div className='bg-[#F8F9FC] w-full h-screen pt-10'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 absolute'>
                <div className='pt-[20px] pl-[64px]'>
                    <h1 className='text-5xl whitespace-normal md:whitespace-pre-wrap md:text-6xl text-[#000F24] font-extrabold py-4'>High quality video, audio & live classes</h1>
                    <p className='capitalize text pb-[30px] text-[#A1A1A1]'>High-Defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <p className='absolute md:static text-white bg-[#004DB3] left-[150px] top-[310px] py-2 px-4 inline '>view courses</p>
                    <div className='grid grid-cols-2 gap-4 py-[30px]'>
                    <div className='flex px-2 bg-white items-center'>
                    <img src={Audio} alt='audio logo' />
                    <p className='p-4'>Audio classes</p>
                    </div>
                    <div className='flex px-2 bg-white items-center'>
                    <img src={Live} alt='live logo' />
                    <p className='p-4'>Live classes</p>
                    </div>
                    <div className='flex px-2 bg-white items-center'>
                    <img src={Record} alt='record logo' />
                    <p className='p-4'>Recorded classes</p>
                    </div>
                    <div className='flex px-2 bg-white items-center'>
                    <img src={Notes} alt='note logo' />
                    <p className='p-4'>50+ Notes</p>
                    </div>                        
                    </div>
                </div>
                <div>
                    <img src={Picone} alt='first big pic' className='absolute left-[100px] w-[265px] h-[224px] md:left-[700px] md:w-[600px] md:h-[512px]'/>
                    <img src={Crown} alt='first big pic' className='absolute left-[30px] top-[10px]'/>
                    <img src={Frame113} alt='first big pic' className='absolute w-[150px] h-[60px] md:left-[600px] top-[100px]'/>
                    <img src={Vectorcircleplane} alt='first big pic' className='absolute w-[10px] h-[10px] left-[1000px] top-[500px]'/>
                    <img src={dotssss} alt='first big pic' className='hidden md:left-[400px] md:top-[-40px] '/>
                    <img src={Pictwo} alt=' second small pic' className='absolute w-[174px] h-[116px] mt-32 md:mt-0 md:left-[540px] md:top-[300px] md:h-[265px] md:w-[350px]' />
                </div>
            </div>            
        </div>
    )
}

export default About