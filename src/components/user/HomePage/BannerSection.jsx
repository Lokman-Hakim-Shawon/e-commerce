import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../../public/images/banner1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BannerSection = () => {
    return (
        <div className='w-[80%] border border-black'>
            <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src="/images/banner1.jpg" />
                </div>
                <div>
                    <img src="/images/banner2.jpg" />
                </div>
                <div>
                    <img src="/images/banner3.jpg" />
                </div>
                <div>
                    <img src="/images/banner4.jpg" />
                </div>
                <div>
                    <img src="/images/banner5.jpg" />
                </div>
                <div>
                    <img src="/images/banner6.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default BannerSection;