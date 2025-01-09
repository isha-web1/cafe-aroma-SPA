import React, { useState } from 'react';
import logo from '../../assets/image/logo.png'
import { Menu, X } from 'lucide-react';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [open, setOpen]= useState(false)
    return (
        <div className='px-4 md:px-0 fixed z-50 w-full top-0 bg-[#ECE7DF]'>
            <div className='max-w-7xl flex justify-between items-center py-2'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-50 h-20' />
                </div>
                 <nav className='md:flex hidden items-center gap-7 px-4'>
                   <ul className='flex items-center gap-7 text-1xl font-semibold text-[#3A312A]'>
                    <a href="/"><li className='cursor-pointer'>Home</li></a>
                    <a href="#menu"><li className='cursor-pointer'>Menu</li></a>
                    <a href="#about"><li className='cursor-pointer'>About</li></a>
                    <a href="#testimonial"><li className='cursor-pointer'>Testimonial</li></a>
                   </ul>
                   <a href="#contact"><button className='pr-4 bg-[#3A312A] text-white hover:bg-amber-800 px-3 py-1 rounded-md'>Contact</button></a>
                 </nav>
                 {
                    open?<X onClick={()=>setOpen(false)} className='text-[#3A312A] w-7 h-7 md:hidden'/>:< Menu onClick={()=>setOpen(true)} className='text-[#3A312A] w-7 h-7 md:hidden'/>
                 }
                 
            </div>
            <ResponsiveMenu open={open} setOpen={setOpen}/>
        </div>
    );
};

export default Navbar;