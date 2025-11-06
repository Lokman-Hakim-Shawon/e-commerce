import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../../public/images/banner1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BannerSection = () => {
    return (
        <div className='w-[100%] lg:w-[80%]'>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="/images/banner1.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
                <div>
                    <img src="/images/banner2.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
                <div>
                    <img src="/images/banner3.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
                <div>
                    <img src="/images/banner4.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
                <div>
                    <img src="/images/banner5.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
                <div>
                    <img src="/images/banner6.jpg" className='h-[60vh] lg:h-[60vh]'/>
                </div>
            </Carousel>
        </div>
    );
};

export default BannerSection;