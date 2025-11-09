import Card from '@/components/shared/Card';
import Link from 'next/link';
import React from 'react';

const Product_Section = ({heading,data}) => {
    return (
        <div className='w-full h-full bg-white py-4 px-3 lg:py-12 lg:px-24 mb-4'>
            <div className='flex justify-between items-center pb-4'>
                <h1 className="text-sm lg:text-3xl font-bold">{heading}</h1>
                <Link href="/products"><button  className="text-sm inline-flex items-center justify-center px-3 lg:px-5 py-1 lg:py-3 font-sans font-semibold tracking-wide bg-slate-100 hover:text-white hover:bg-primary rounded-lg ">
                    View More
                </button></Link>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-5 gap-x-1 lg:gap-x-4 gap-y-2">
                {
                    data.map((card,index)=><Link key={index} href={`/${card._id}`}><Card id={card._id} img={card.Image} title={card.Name} desc={card.Description} price={card.Price}/></Link>)
                }
            </div>
        </div>
    );
};

export default Product_Section;