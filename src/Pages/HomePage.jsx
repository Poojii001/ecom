import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/pagination';

import MainCategorySlider from '../Components/MainCategorySlider'
import BrandSlider from '../Components/BrandSlider'
import ProductSlider from '../Components/ProductSlider'
import Products from '../Components/Products'
import About from '../Components/About'
import { Link } from 'react-router-dom';


export default function HomePage() {
    let sliderOptions = {
        speed: 600,

        slidesPerView: 1,
        spaceBetween: 0,
        navigation: false,
        loop: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        modules: [Pagination, Autoplay]

    }
    return (
        <>

            <section id="hero" >
                <div className="hero-swiper">
                    <Swiper className="mySwiper" {...sliderOptions}>
                        <SwiperSlide className='hero-wraper'>
                            <div className="hero-slider-one" style={{ height: 550 }}>
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section" data-aos="fade-up">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle text-light">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                                </h5>
                                                <h4 className="wrapper-details text-light">Upgrade your wardrobe with stylish men’s outfits crafted for comfort, durability, and a sharp modern look.</h4>
                                                <Link to="/shop?mc=Male" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='hero-wraper'>
                            <div className="hero-slider-two" style={{ height: 550 }}>
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                                </h5>
                                                <h4 className="wrapper-details text-light">Find your perfect style with trending woman’s clothing, premium fits, and fashion crafted for every occasion.</h4>
                                                <Link to="/shop?mc=female" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='hero-wraper'>
                            <div className="hero-slider-three" style={{ height: 550 }}>
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                                </h5>
                                                <h4 className="wrapper-details text-light">Shop the latest kid’s fashion featuring top-quality styles, everyday essentials, and bold statement pieces.</h4>
                                                <Link to="/shop?mc=kids" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='hero-wraper'>
                            <div className="hero-slider-four" style={{ height: 550 }}>
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                                </h5>
                                                <h4 className="wrapper-details text-light">Upgrade your home with modern furniture designed to bring comfort, style, and convenience together.</h4>
                                                <Link to="/shop?mc=furniture" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='hero-wraper'>
                            <div className="hero-slider-five" style={{ height: 550 }}>
                                <div className="container">
                                    <div className="col-lg-6">
                                        <div className="wrapper-section">
                                            <div className="wrapper-info">
                                                <h5 className="wrapper-subtitle">UP TO <span className="wrapper-inner-title">70%</span> OFF
                                                </h5>
                                                <h4 className="wrapper-details text-light">Discover advanced electronics that transform your home with comfort, innovation, and timeless modern design.</h4>
                                                <Link to="/shop?mc=electronics" className="shop-btn">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-pagination"></div>

                    </Swiper>
                </div>
            </section>

            <section className="product fashion-style">
                <div className="container">
                    <div className="style-section">
                        <div className="row gy-4 gx-5 gy-lg-0">
                            <div className="col-lg-6">
                                <div className="product-wrapper wrapper-one" data-aos="fade-right">
                                    <div className="wrapper-info">
                                        <span className="wrapper-subtitle">NEW STYLE</span>
                                        <h4 className="wrapper-details">Get 65% Offer
                                            <span className="wrapper-inner-title">& Make New</span> Fusion.
                                        </h4>
                                        <a href="product-sidebar.html" className="shop-btn">Shop Now
                                            <span>
                                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.45312" y="0.914062" width="9.25346" height="2.05632"
                                                        transform="rotate(45 1.45312 0.914062)" />
                                                    <rect x="8" y="7.45703" width="9.25346" height="2.05632"
                                                        transform="rotate(135 8 7.45703)" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-wrapper wrapper-two" data-aos="fade-up">
                                    <div className="wrapper-info">
                                        <span className="wrapper-subtitle">Mega OFFER</span>
                                        <h4 className="wrapper-details">
                                            Make your New
                                            <span className="wrapper-inner-title">Styles with Our</span>
                                            Products
                                        </h4>
                                        <a href="product-sidebar.html" className="shop-btn">Shop Now
                                            <span>
                                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.45312" y="0.914062" width="9.25346" height="2.05632"
                                                        transform="rotate(45 1.45312 0.914062)" />
                                                    <rect x="8" y="7.45703" width="9.25346" height="2.05632"
                                                        transform="rotate(135 8 7.45703)" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <MainCategorySlider />
            <ProductSlider />
            <BrandSlider />
            <Products />
            <Products />


        </>
    )
}
