"use client"
import BannerSection from '@/components/user/HomePage/BannerSection';
import HomeSideBar from './../../components/user/HomePage/HomeSideBar';
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className='flex justify-between  border'>
        <HomeSideBar className='w-[20%]'/>
        <BannerSection className='w-[80%]'/>
      </div>
    </main>
  );
}
