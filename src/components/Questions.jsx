import React from 'react'
import Accordion from './accordion'

const Questions = () => {
    return (
        <div className='w-full h-screen pl-[80px] pb-10'>
        <h1 className='capitalize text-[#000F24] text-center text-6xl font-extrabold py-4'>frequently asked questions</h1>
        <p className='capitalize text-[20px] leading-7 text-[#A1A1A1] text-center px-[290px] py-4'>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image </p>
        
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="Is there a free trial available?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="Can I change my plan later?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="Are the courses lifetime?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="Do I get certified after taking the course?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="How do I reach out to mentors?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        <div className="container mx-auto p-4 px-[80px]">
            <Accordion title="Do we get job ready after taking courses?" content="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image " />
        </div>
        </div>
    )
}

export default Questions