import React from 'react';
import coffee from '../../assets/image/coffee5.png';
import bean1 from '../../assets/image/bean1.png';
import bean2 from '../../assets/image/bean2.png';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className='from-slate-100 to-[#8E7B6E] bg-gradient-to-r mt-14 pl-4'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
                {/* text section */}
                <div className='space-y-5 px-4 md:px-0'>
                   <motion.h1 
                   initial={{opacity:0,x:-50}}
                   whileInView={{opacity:1,x:0}}
                   transition={{duration:1, delay:0.2}}
                   className='text-[#3A312A] font-semibold  text-2xl my-4'>Welcome to Cafe-aroma___</motion.h1>
                   <motion.h1 
                    initial={{opacity:0,x:-60}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1, delay:0.4}}
                   className='text-4xl md:text-6xl font-bold text-[#524237]'> <span className='text-[#3A312A] '>Experience the aroma</span> of freshly roasted crafted coffee </motion.h1>
                   <motion.p
                   initial={{opacity:0,x:-60}}
                   whileInView={{opacity:1,x:0}}
                   transition={{duration:1.2, delay:0.6}}
                   >Where every cup tells a story. Handcrafted coffee, warm vibes, and moments that linger. Find your escape.</motion.p>
                   <motion.div
                   initial={{opacity:0,x:-70}}
                   whileInView={{opacity:1,x:0}}
                   transition={{duration:1.4, delay:0.8}}
                    className='flex gap-2'>
                      <a href="#menu"><button className='bg-[#524237] text-white px-3 py-2 rounded-md'>View menu</button></a>
                      <a href="#menu"><button className='bg-transparent border border-[#524237] rounded-md px-3 py-2'>Our story</button></a>
                   </motion.div>
                </div>
                {/* image section */}
                <div className='relative'>
                  <motion.img 
                   initial={{opacity:0,scale:0.5}}
                   whileInView={{opacity:1,scale:1}}
                   transition={{duration:1.5, delay:0.5}}
                  src={coffee} alt="" className='w-[500px]' />
                </div>
                <motion.img
                 initial={{opacity:0,x:400,scale:0.7}}
                 whileInView={{opacity:1,x:0,scale:1,rotate:45}}
                 transition={{duration:1.8, delay:0.8}}
                 src={bean2} alt="" className='absolute hidden md:block bottom-10 left-36 x-10 w-20 rotate-45' />
                <motion.img
                initial={{opacity:0,x:600,y:200,scale:0.7}}
                whileInView={{opacity:1,x:0,y:0,scale:1}}
                transition={{duration:1.8, delay:0.8}}
                 src={bean1} alt="" className='absolute hidden md:block top-14 left-0 w-20' />
                <motion.img
                initial={{opacity:0,x:-100,y:100,scale:0.7}}
                whileInView={{opacity:1,x:0,y:0,scale:1,rotate:45}}
                transition={{duration:1.8, delay:0.8}}
                 src={bean2} alt="" className='absolute hidden md:block w-20 top-8 right-0 -rotate-45'/>
            </div>
            
        </div>
    );
};

export default Banner;