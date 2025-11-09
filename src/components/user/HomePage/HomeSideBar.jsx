import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const HomeSideBar = ({isActive,menuOpenClose}) => {
    const sideText=[
        {name:'SmartPhones'},
        {name:'Electronics and Appliance'},
        {name:'Television'},
        {name:'Washing Machine'},
        {name:'Mobile Accessories'},
        {name:'Computers'},
        {name:'Computer Accessories'},
        {name:'Lifestyle'},
    ]
    
    return (
        <div className={`${isActive == true?'translate-x-0':'-translate-x-full lg:translate-x-0'} transform transition-transform duration-300 ease-in-out  min-w-[100%] lg:min-w-[20%] lg:block h-[100vh] lg:h-[60vh] z-30 fixed lg:static -mt-36 lg:mt-0 bg-white overflow-auto`}>
            <div className='px-6 font-bold text-xl pt-6 pb-2 border-b border-slate-300 flex items-center justify-between sticky lg:static lg:hidden'>
            <h1 className="">Menu</h1>
            <IoMdClose onClick={menuOpenClose}/>
            </div>
            {
                sideText.map((data,index)=><div key={index} className='flex justify-between items-center w-full space-x-6 space-y-6 px-4 hover:text-primary hover:cursor-pointer'>
                <p className='w-full'>{data.name}</p>
                <IoIosArrowForward  className='text-xl'/>
           </div>)
            }
        </div>
    );
};

export default HomeSideBar;