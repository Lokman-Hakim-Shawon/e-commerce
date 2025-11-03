'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductListData = () => {
    const [productData,setProductData]=useState([])
    useEffect(()=>{
        axios.get('https://e-commerce-backend-wheat-zeta.vercel.app/api/product')
        .then(res=>setProductData(res.data))
        .catch(err=>console.log(err))
    },[])

   const handleDelete=async(id)=>{
    await axios.delete(`https://e-commerce-backend-wheat-zeta.vercel.app/api/product/${id}`)
    .then(res=>alert('delete data successful'))
    .catch(err=>console.log(err.message))
   }

    return (
        <div>
             <h1 className=" text-3xl font-semibold text-center py-8">Product List</h1>
            <div className='w-full h-full'>
                <table className='w-full h-full'>
                    <thead className="w-full h-full">
                        <tr className="py-4 text-center">
                            <td className='border border-black py-2'>product Name </td>
                            <td className='border border-black'>product Description</td>
                            <td className='border border-black'>product Category </td>
                            <td className='border border-black'>product Price</td>
                            <td className='border border-black'>Update</td>
                            <td className='border border-black'>Delete</td>
                        </tr>
                    </thead>

                    <tbody className="">
                            {
                                productData.map((data)=><tr className="" key={data._id}>
                                <td className='border border-black pl-4'>{data.Name}</td>
                                <td className='border border-black pl-4'>{data.Description.substring(0,50)}</td>
                                <td className='border border-black pl-4'>{data.Category}</td>
                                <td className='border border-black pl-4'>{data.Price}</td>
                                <td className='border border-black pl-4 py-2'><button className='py-1 px-4  border border-black rounded-lg'>Update</button></td>
                                <td className=' border border-black pl-4'><button onClick={()=>handleDelete(data._id)} className='py-1 px-4  border border-black rounded-lg'>Delete</button></td>
                            </tr>)
                            }
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListData;