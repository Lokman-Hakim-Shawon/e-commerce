"use client"
import BannerSection from '@/components/user/HomePage/BannerSection';
import HomeSideBar from './../../components/user/HomePage/HomeSideBar';
import AdsSlider from '@/components/user/HomePage/AdsSlider';
import Product_Section from '@/components/user/HomePage/Product_Section';

export default function Home() {
  const heading1='Best Deals of Electronics'
  const heading2='Mobile'
  const heading3='Best Selling Products'
  const heading4='Best Television'
  const heading5='SmartPhone Hub'
  const heading6='Best AC Deals'
  const cardData=[
    {id:'1', img:'/images/TV.jpg',title:'Google Television',desc:'Haier 43 Inch FHD Bezel-Less google TV.',price:'40,900'},
    {id:'2', img:'/images/TV.jpg',title:'Google Television',desc:'Haier 43 Inch FHD Bezel-Less google TV.',price:'40,900'},
    {id:'3', img:'/images/TV.jpg',title:'Google Television',desc:'Haier 43 Inch FHD Bezel-Less google TV.',price:'40,900'},
    {id:'4', img:'/images/TV.jpg',title:'Google Television',desc:'Haier 43 Inch FHD Bezel-Less google TV.',price:'40,900'},
    {id:'5', img:'/images/TV.jpg',title:'Google Television',desc:'Haier 43 Inch FHD Bezel-Less google TV.',price:'40,900'},
  ]
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
