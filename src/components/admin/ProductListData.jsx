'use client'
import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
const ProductListData = () => {
    // const [productData,setProductData]=useState([])
    const queryClient =useQueryClient()
    const {data,isLoading,error}=useQuery({
        queryKey:['product'],
        queryFn:async()=>{
            const res= await axios.get('https://e-commerce-backend-wheat-zeta.vercel.app/api/product')
            return res.data;
        }
    })

      const deleteMutation=useMutation({
        mutationFn:async(id)=>{
            return await axios.delete(`https://e-commerce-backend-wheat-zeta.vercel.app/api/product/${id}`)
        },
        onSuccess:()=>{
            alert('product delete successful !')
            queryClient.invalidateQueries(['product'])
        },
        onError:(error)=>{
            console.log(error.message)
            alert('Failed to delete product')
        }
      })

    if(isLoading) return <p className="">Loading .....</p>
    if(error) return <p className="">{error.message}</p>
//     useEffect(()=>{
//         axios.get('https://e-commerce-backend-wheat-zeta.vercel.app/api/product')
//         .then(res=>setProductData(res.data))
//         .catch(err=>console.log(err))
//     },[])

//    const handleDelete=async(id)=>{
//     await axios.delete(`https://e-commerce-backend-wheat-zeta.vercel.app/api/product/${id}`)
//     .then(res=>alert('delete data successful'))
//     .catch(err=>console.log(err.message))
//    }

    return (
        <div>
             <h1 className=" text-3xl font-semibold text-center py-4 lg:py-8">Product List</h1>
            <div className='w-full h-full'>
                <table className='w-full h-full'>
                    <thead className="w-full h-full">
                        <tr className="py-4 text-center text-xs lg:text-lg">
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
                                data.map((data)=><tr className="text-xs lg:text-lg" key={data._id}>
                                <td className='border border-black lg:pl-4'>{data.Name}</td>
                                <td className='border border-black lg:pl-4'>{data.Description.substring(0,20)}</td>
                                <td className='border border-black lg:pl-4'>{data.Category}</td>
                                <td className='border border-black lg:pl-4'>{data.Price}</td>
                                <td className='border border-black lg:pl-4 py-2'><button className='py-1 px-4  border border-black rounded-lg'>Update</button></td>
                                <td className=' border border-black lg:pl-4'><button onClick={()=>deleteMutation.mutate(data._id)} className='py-1 px-4  border border-black rounded-lg'>{deleteMutation.isLoading?'loading...':'delete'}</button></td>
                            </tr>)
                            }
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductListData;