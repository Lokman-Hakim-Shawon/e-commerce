import React from 'react';

const AdsSlider = () => {
    const adsData=[
        {img:'/images/ads1.png',title:'Whirlpool 236 Liters Refrigerator',price:'Tk. 28,290'},
        {img:'/images/ads2.png',title:'OnePlus Watch 3',price:'TK. 29,999'},
        {img:'/images/ads3.png',title:'HONOR Play 10',price:'TK. 10,999'},
        {img:'/images/ads4.png',title:'Haier  7Kg Washing Machine',price:'TK. 24,490'},
        {img:'/images/ads5.png',title:'REVOO A10 Electric Bike',price:'TK. 74,900'},
        {img:'/images/ads6.png',title:"Casio Leather Belt Men's Watch",price:'TK. 3,920'},
    ]
    return (
        <div className='flex justify-between items-center bg-white lg:py-2 my-4 lg:px-24 lg:space-x-4 overflow-scroll w-[100%]'>
            {
                adsData.map((data,index)=><div key={index} className="flex justify-between items-center space-x-2 border-r border-slate-300 lg:p-6 text-xs text-gray-600 lg:font-bold pr-24 lg:pr-30 ">
                <img src={data.img} alt="" className='lg:w-20 object-cover'/>
                <div className="">
                    <p className="text-xs">{data.title}</p>
                    <p className="text-xs">{data.price}</p>
                </div>
            </div>)
            }
        </div>
    );
};

export default AdsSlider;