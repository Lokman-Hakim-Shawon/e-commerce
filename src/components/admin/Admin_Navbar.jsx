import Link from 'next/link';
import React from 'react';

const Admin_Navbar = () => {
    const link=[
        {name:'Dashboard',address:'/dashboard'},
        {name:'Add product',address:'/dashboard/add_product'},
        {name:'Upload Banner',address:'#'},
        {name:'Create New Category',address:'#'},
        {name:'Home',address:'/'},
    ]
    return (
        <div className='border border-black h-[100vh]'>
            <h1 className="border-b border-black text-center py-4 font-semibold ">Admin panel</h1>
            <ul className="">
                {
                    link.map((data,index)=><Link href={data.address} key={index}><li  className=" border-b border-black py-4 px-8 hover:bg-slate-100">{data.name}</li></Link>)
                }
            </ul>
        </div>
    );
};

export default Admin_Navbar;