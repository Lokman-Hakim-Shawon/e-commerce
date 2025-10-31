'use client'
import React from 'react';

const Add_product = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(e.target)
        const name=formData.get('name')
        const desc=formData.get('description')
        const price=formData.get('price')
        const cetegory=formData.get('cetegory')
        const image=formData.get('image')
        console.log(name,desc,price,cetegory,image)
    }
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div className='border border-black p-4 w-full'>
                <h1 className="text-3xl font-semibold text-center pb-9">Add a New Product</h1>
                <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-3 gap-x-8 items-center w-full h-full " action="" method="">

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
                        type="number" id="id" name="price" placeholder="Type Product Price"
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
                    <button className="col-span-3 inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add_product;