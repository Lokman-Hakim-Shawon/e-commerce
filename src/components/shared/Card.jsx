import React from 'react';

const Card = ({id,img,title,desc,price}) => {
    
    return (
        <div>
                <div className='border border-slate-200 w-[165px] lg:w-[220px] cursor-pointer'>
                    <img src={img} alt="TV" className='w-full max-h-[60%]'/>
                    <div className='p-1 lg:p-4'>
                    <p className=" lg:font-bold text-sm lg:text-xl pt-2 ">{title.slice(0,30)}</p>
                    <p className="font-semibold text-sm py-2">{desc.slice(0,35)}</p>
                    <p className="text-primary font-bold text-sm">{price} Tk</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;