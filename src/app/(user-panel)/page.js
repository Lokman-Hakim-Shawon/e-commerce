"use client"
import BannerSection from '@/components/user/HomePage/BannerSection';
import HomeSideBar from './../../components/user/HomePage/HomeSideBar';
import AdsSlider from '@/components/user/HomePage/AdsSlider';
import Product_Section from '@/components/user/HomePage/Product_Section';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const heading1='Best Deals of Electronics'
  const heading2='Mobile'
  const heading3='Best Selling Products'
  const heading4='Best Television'
  const heading5='SmartPhone Hub'
  const heading6='Best AC Deals'

  const [cardData,setCardData]=useState([])
  useEffect(()=>{
    axios.get('https://e-commerce-backend-wheat-zeta.vercel.app/api/product')
    .then(res=>setCardData(res.data))
    .catch(error=>console.log(error.message))
  },[])
  return (
    <main className="w-full h-full ">
      <div className='lg:flex lg:justify-between bg-white h-[40vh] lg:h-[60vh]'>
        <HomeSideBar className='lg:w-[20%]'/>
        <BannerSection className='w-[100vw] lg:w-[80%]'/>
      </div>
      <AdsSlider/>
      <Product_Section heading={heading1} data={cardData}/>
      <Product_Section heading={heading2} data={cardData}/>
      <Product_Section heading={heading3} data={cardData}/>
      <Product_Section heading={heading4} data={cardData}/>
      <Product_Section heading={heading5} data={cardData}/>
      <Product_Section heading={heading6} data={cardData}/>
    </main>
  );
}
