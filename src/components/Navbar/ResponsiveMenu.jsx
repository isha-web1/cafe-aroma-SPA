import React from 'react';

const ResponsiveMenu = ({open,setOpen}) => {
    return (
        <div className={`${open?'left-0':'-left-[100%]'} fixed bottom-0 top-0 x-30 flex h-screen w-[75%] flex-col justify-between bg-[#3A312A] px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>

            <div>
                <nav className='mt-12'>
                    <ul className='flex flex-col gap-7 text-lg font-semibold text-white'>
                    <a href="/"><li className='cursor-pointer'>Home</li></a>
                    <a href="#menu"><li className='cursor-pointer'>Menu</li></a>
                    <a href="#about"><li className='cursor-pointer'>About</li></a>
                    <a href="#testimonial"><li className='cursor-pointer'>Testimonial</li></a>
                    <a href="#contact"><button className='pr-4 bg-amber-800 text-white hover:bg-amber-800 px-3 py-1 rounded-md'>Contact</button></a> 
                    </ul>
                </nav>
            </div>
            <div className='text-white'>
              <h1>created by !$4@🤙</h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;