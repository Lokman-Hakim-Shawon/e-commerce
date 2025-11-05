import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
const HomeSideBar = () => {
    const sideText=[
        {name:'SmartPhones'},
        {name:'Electronics and Appliance'},
        {name:'Television'},
        {name:'Washing Machine'},
        {name:'Mobile Accessories'},
        {name:'Computers'},
        {name:'Computer Accessories'},
        {name:'Lifestyle'},
    ]
    return (
        <div className='max-w-[100%]'>
            {
                sideText.map((data,index)=><div key={index} className='flex justify-between items-center w-full space-x-32 hover:text-primary hover:cursor-pointer'>
                <p className='w-full'>{data.name}</p>
                <IoIosArrowForward  className='text-3xl'/>
           </div>)
            }
        </div>
    );
};

export default HomeSideBar;