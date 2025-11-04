'use client'
import axios from 'axios';
import React from 'react';

const Add_product = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target)
        const Name=formData.get('name');
        const Description=formData.get('description')
        const Price=formData.get('price')
        const Category=formData.get('category')
        const imageFile=formData.get('image')
 
       const data=new FormData()
       data.append('image',imageFile)
       axios.post('https://api.imgbb.com/1/upload?key=9680b301d85d640ef2127f120a152180',data)
       .then(res=>{
         const Image=res.data.data.url
         const DATA = {Name,Description,Price,Category,Image}
         console.log(DATA)
         axios.post('https://e-commerce-backend-wheat-zeta.vercel.app/api/product',DATA)
         .then(res=>{
            alert('data is posted successful')
            console.log(res.data)
         })
         .catch(err=>console.log(err))
       })
       .catch(err=>console.log(err))
     }
    return (
        <div className='w-full lg:h-[100vh]'>
            <div className='border border-black p-4 w-full lg:h-[100vh]'>
                <h1 className="text-3xl font-semibold text-center lg:pb-9">Add a New Product</h1>
                <form onSubmit={handleSubmit} className="space-y-4 py-5 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 items-center w-full lg:h-[80vh] " action="" method="">

                    {/* product name  */}
                    <div className=" space-y-2 ">
                    <p className="">Product Name</p>
                    <input
                        type="text" id="id" name="name" placeholder="Type Product Name"
                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                    />
                    </div>

                    {/* product description */}
                    <div className=" space-y-2 ">
                    <p className="">Product Description</p>
                    <input
                        type="text" id="id" name="description" placeholder="Type Product Description"
                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                    />
                    </div>

                    {/* product price */}
                    <div className=" space-y-2 ">
                    <p className="">Product Price</p>
                    <input
                        type="text" id="id" name="price" placeholder="Type Product Price"
                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                    />
                    </div>
                    {/* product Category */}
                    <div className=" space-y-2 ">
                    <p className="">Product Category</p>
                    <input
                        type="text" id="id" name="category" placeholder="Type Product Category"
                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                    />
                    </div>

                    {/* product image*/}
                    <div className=" space-y-2 ">
                    <p className="">Product Description</p>
                    <input
                        type="file" id="id" name="image"
                        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                    />
                    </div>
                    <button className="lg:col-span-3 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                         Upload Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add_product;