import React from 'react'
import Girl from '../assets/Girl.png'
import Frame95 from '../assets/Frame95.png'
import Frame96 from '../assets/Frame96.png'
import Frame97 from '../assets/Frame97.png'
import Frame98 from '../assets/Frame98.png'
import Frame99 from '../assets/Frame99.png'
import Frame88 from '../assets/Frame88.png'
import Path22 from '../assets/path22.png'
import Vector from '../assets/Vector.png'
import Vectorcircle from '../assets/Vectorcircle.png'
import Vectordot from '../assets/Vectordot.png'
import Vectortriangle from '../assets/Vectortriangle.png'
import Vectorww from '../assets/Vectorww.png'
import Vscode from '../assets/Visual-Studio-Code.png'
import Bulb from '../assets/bulb.png'
const Main = () => {
    return (
        <div className='w-[428px] h-[1030px] md:w-full md:h-full md:flex md:justify-between items-center bg-[#004DB3] pt-44 '>
            <div>
                <h1 className='text-white font-bold text-[32px] whitespace-normal text-center md:text-justify w-[389.7px] h-[138px] py-4 md:text-6xl md:w-[592.57px] md:h-[209px] md:pl-[64px]'>Grow your skills to advance your career path</h1>
                <p className='w-[350px] h-[30px] text-center text-[8px]  pt-2 pb-4 md:py-4 md:text-justify md:text-xl md:w-[452.49px] md:h-[45px] md:pl-[64px] text-white'>Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>
                <div className='flex items-center pt-6 md:pt-[70px] pl-[50px]'>
                <p className='text-sm bg-[#004DB3] text-white border border-white p-3 mx-4 mr-5'>Get Started Now</p>
                <p className='text-sm bg-white text-[#004DB3] p-3'>Enroll Now</p>
                </div>
                <div className='pt-6'>
                    <div className=''>
                    <img src={Frame95} alt='contact card' className='w-[54.33px] h-[54.33px] left-[56px] absolute'/>
                    <img src={Frame96} alt='contact card' className='w-[54.33px] h-[54.33px] absolute left-[86px]'/>
                    <img src={Frame97} alt='contact card' className='w-[54.33px] h-[54.33px] absolute left-[116px]'/>
                    <img src={Frame98} alt='contact card' className='w-[54.33px] h-[54.33px] absolute left-[146px]'/>
                    <img src={Frame99} alt='contact card' className='w-[54.33px] h-[54.33px] absolute left-[176px]'/>
                    </div>
                    
                    <div className='left-[250px] absolute'>
                    <h1 className='text-white font-extrabold text-xl md:text-2xl'>255k+</h1>
                    <p className='text-white'>Previews</p>                
                    </div>
                

                </div>
            </div>
            <div classname='w-[363.01px] pt-[50px] md:w-[598.8px] h-[752.18px] absolute '>
                <img src={Girl} alt='a girls pic' className='relative top-14 md:top-0'/>
                <img src={Vscode} alt='vs code editor logo' className=' absolute w-[50px] h-[50px] md:w-[70px] md:h-[70px] top-[520px] md:top-72 left-[320px] md:left-[1200px]' />
                <img src={Bulb} alt='idea logo' className=' absolute w-[120px] h-[120px] md:w-[170px] md:h-[170px] top-[520px] md:top-[250px] left-[15px] md:left-[750px]' />
                <img src={Vector} alt='idea logo' className=' absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] top-[400px] md:top-[680px] left-[320px] md:left-[650px] rotate-[70deg] md:rotate-0' />
                <img src={Vectorcircle} alt='idea logo' className=' absolute w-[20px] h-[20px] md:w-[30px] md:h-[30px] top-[650px] md:top-[440px] left-[60px] md:left-[800px]' />
                <img src={Vectorcircle} alt='idea logo' className=' absolute hidden md:w-[16px] md:h-[16px] top-[230px] md:left-[80px]' />
                <img src={Vectortriangle} alt='idea logo' className=' absolute w-[20px] h-[20px] md:w-[30px] md:h-[30px] top-[680px] md:top-[470px] left-[350px] md:left-[1250px]' />
                <img src={Vectordot} alt='idea logo' className=' absolute w-[5px] h-[5px] md:w-[10px] md:h-[10px] top-[970px] md:top-[850px] left-[50px] md:left-[800px]' />
                <img src={Vectordot} alt='idea logo' className=' absolute hidden md:w-[10px] md:h-[10px] top-[250px] md:left-[510px]' />
                <img src={Vectorww} alt='idea logo' className=' absolute md:w-[30px] md:h-[30px] top-[520px] md:left-[0px]' />
                <img src={Frame88} alt='idea logo' className=' absolute w-[50px] h-[50px] md:w-[70px] md:h-[70px] top-[800px] md:top-[650px] left-[20px] md:left-[750px]' />
                <img src={Path22} alt='idea logo' className='bg-white p-2 absolute w-[50px] h-[50px] md:w-[70px] md:h-[70px] top-[970px] md:top-[850px] left-[350px] md:left-[1250px]' />
            </div>
        </div>
    )
}

export default Main