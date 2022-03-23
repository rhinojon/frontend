import React from 'react'
import "./AboutBanner.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AboutBannerCarousel } from "../../../Utilities/frontend/data/about/AboutBannerCarousel";


const AboutBanner = () => {

    const settings = {
        showArrows: false,
        swipeable: true,
        fade: true,
        stopOnHover: true,
        autoPlay: true,
        infiniteLoop: true,
        transitionTime: 2000,
        showIndicators: false,
        useKeyboardArrows: true,
        emulateTouch: true,
        showThumbs: false,
    }

    const transitionTimingFunction = 'ease-in';

    const carouselSlides = {
        position: 'absolute',
        display: 'block',
        zIndex: -2,
        minHeight: '100%',
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction: transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction,
    }

    return (

        
    <Carousel className="about-image" id = "about-banner" {...settings} style={carouselSlides} >
        {
            AboutBannerCarousel.map((carousel, index) => (
                <div key = {index}>
                    <img className="about-banner-images" src={carousel.image}  alt="Rhino john about sliders"/>
                </div>
            ))
        }
    </Carousel>

    )
}

export default AboutBanner
