import React from 'react';

const Banner = () => {
    return (
        <div className='from-slate-100 to-[#8E7B6E] bg-gradient-to-r mt-14'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>
                {/* text section */}
                <div className='space-y-5 px-4 md:px-0'>
                   <h1 className='text-[#3A312A] font-semibold text-lg'>Welcome to Cafe-aroma___</h1>
                   <h1 className='text-4xl md:text-6xl font-bold text-[#524237]'> <span className='text-[#3A312A] '>Experience the aroma</span> of freshly roasted crafted coffee </h1>
                   <p>Where every cup tells a story. Handcrafted coffee, warm vibes, and moments that linger. Find your escape.</p>
                   <div className='flex gap-2'>
                      <a href="#menu"><button className='bg-[#524237] text-white px-3 py-2 rounded-md'>View menu</button></a>
                      <a href="#menu"><button>Our story</button></a>
                   </div>
                </div>
                {/* image section */}
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;