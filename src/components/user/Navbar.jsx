import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
const Navbar = () => {
    return (
        <div className="">
            {/* ads section  */}
            <div className=""><img src="/images/ads1.gif" alt="" className='mx-auto'/></div>

            {/* menu and logo section  */}
            <div className='flex justify-between items-center px-8 py-2 gl:py-4 bg-primary text-white'>
            <MdMenu  className='text-4xl font-bold'/>
            <h1 className=" font-bold text-xl lg:text-4xl">Pickaboo</h1>
            <div>
                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Search"
                    className="hidden lg:block w-[500px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent bg-white"
                />
            </div>

            {/* Login button */}
            
            <div className='flex justify-between items-center gap-x-4'>
            <button className="hidden lg:block items-center justify-center px-4 lg:px-8 py-1 lg:py-3 font-sans font-semibold tracking-wide text-white rounded-lg border border-white hover:bg-white hover:text-black">
                Login
            </button>
               <div className='flex justify-between items-center text-sm lg:text-xl gap-x-2 lg:gap-x-4'>
               <FaShoppingCart className='text-xl lg:text-3xl'/>
               Cart
               </div>
            </div>
        </div>
            <div className="lg:hidden bg-primary px-8 pb-4">
                <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Search"
                    className=" w-[300px] border border-slate-200 rounded-lg py-2 px-5 outline-none	bg-transparent bg-white"
                />
            </div>
        </div>
    );
};

export default Navbar;