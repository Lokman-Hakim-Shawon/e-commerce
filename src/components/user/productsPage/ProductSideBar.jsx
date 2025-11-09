'use client'
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ProductSideBar = () => {
    const link=[
        {name:'Price',address:'/dashboard'},
        {name:'Brand',address:'/dashboard/add_product'},
        {name:'Display Size',address:'#'},
        {name:'RAM',address:'#'},
        {name:'Processor',address:'/'},
        {name:'Feature',address:'/'},
        {name:'Operating System',address:'/'},
        {name:'EXpress Delivery',address:'/'},
        {name:'color',address:'/'},
    ]
    return (
        <div className='hidden lg:block border border-black h-[100vh] '>
            <h1 className="border-b border-black text-center py-4 font-semibold ">Filter</h1>
            <ul className="">
                {
                    link.map((data,index)=><Link href={data.address} key={index}><li  className=" border-t  border-slate-300 py-4 lg:px-8 hover:bg-slate-100 flex items-center justify-between">{data.name} <IoIosArrowForward /></li></Link>)
                }
            </ul>
        </div>
    )
};

export default ProductSideBar;