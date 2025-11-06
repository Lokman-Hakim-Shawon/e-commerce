"use client"
import BannerSection from '@/components/user/HomePage/BannerSection';
import HomeSideBar from './../../components/user/HomePage/HomeSideBar';
export default function Home() {
  return (
    <main className="w-full h-full ">
      <div className='lg:flex lg:justify-between bg-white h-[60vh]'>
        <HomeSideBar className='lg:w-[20%]'/>
        <BannerSection className='w-[100vw] lg:w-[80%]'/>
      </div>
    </main>
  );
}
