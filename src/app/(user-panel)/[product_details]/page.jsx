import React from 'react';

const page = () => {
    return (
        <div className='grid grid-cols-3 items-center w-full border border-black py-2 space-x-2'>
            {/* first div */}
            <div className="min-h-[100%] bg-white"><img src="/images/TV.jpg" alt="" className='h-[70vh] overflow-hidden object-cover mt-0'/></div>

            {/* second div */}
            <div className=" h-full bg-white p-4 border border-slate-300">
                <h1 className="text-3xl font-bold ">OnePlus Nord CE 4 Lite 5G 8GB/256GB</h1>

                <div className="">
                    <p className="">Express</p>
                    <p className="">Get GUARANTEED delivery by tomorrow with Express Delivery</p>
                </div>

                <p className="">Brand: <span className="text-secondary font-semibold">OnePlus</span> | Sold by: <span className="text-secondary font-semibold">OnePlus Official</span></p>
                <p className="border-b border-slate-300 pb-4 text-secondary font-bold">৳ 22,999</p>
                <div><img src="/images/Washing_machine_in_id_ads.gif" alt=""/></div>

                <div className=" border-b border-slate-300 py-4 flex space-x-4 ">
                    <p className="text-secondary font-semibold">color*</p>
                    <img src="/images/TV.jpg" alt="" className='w-20 border border-black rounded-sm'/>
                </div>

                <div className='py-6 border-b border-slate-300 pb-4'>
                    <span className="font-bold">Quantity : <span className="border py-1 px-3 font-bold">-</span> <span className="border py-1 px-3 font-bold">1</span> <span className="border py-1 px-3 font-bold">+</span></span>
                </div>

                <div className=" flex space-x-2 border-b border-slate-300 py-4">
                    <span className="font-bold">Warranty: </span> <span className="">Device: 1 year official warranty | Display: 1 year official warranty ***(This warranty does not cover any physical or accidental damage) | Lifetime display warranty for green line issues</span>
                </div>

                <div className="border-b border-slate-300 pb-4">
                    <p className="font-bold">Available Offer</p>
                    <p className="py-4">Enjoy Additional 10% OFF up to BDT 1000 with Visa & MasterCard</p>
                    <p className="">Please visit this link for Bimafy Insurance Details: Bimafy Insurance</p>
                </div>
            </div>

            {/* third div */}
            <div className="min-h-[100%] bg-white px-4">
                <div className=" border-b border-slate-300 py-4">
                    <p className=" py-4 text-sx">Available Offer</p>
                    <div className="flex items-center space-x-4">
                        <img src="/images/club-point.png" alt="" className='w-6 bg-blue-600 rounded-sm'/>
                        <div className="">
                            <p className="font-bold">Club Points</p>
                            <p className="">Earn 412.2 Club Points</p>
                        </div>
                    </div>
                </div>
                {/* first ads */}
                    <div className="py-4 border-b border-slate-300 ">
                        <h1 className="font-bold text-xl">Frequently brought together</h1>
                        <div className="flex items-center space-x-6 p-4">
                            <img src="/images/TV.jpg" alt="" className='w-16'/>
                            <p className="">GOVO GoKixx 621 ENC Bluetooth Wireless</p>
                            <button className='bg-blue-600 text-white py-1 px-2 rounded-xl'>Add</button>
                        </div>
                    </div>
                {/* second ads */}
                    <div className="py-4 border-b border-slate-300 ">
                        <h1 className="font-bold text-xl">Frequently brought together</h1>
                        <div className="flex items-center space-x-6 px-4">
                            <img src="/images/TV.jpg" alt="" className='w-16'/>
                            <p className="">GOVO GoKixx 621 ENC Bluetooth Wireless</p>
                            <button className='bg-blue-600 text-white py-1 px-2 rounded-xl'>Add</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default page;