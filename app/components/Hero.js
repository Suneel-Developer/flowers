"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import CarouselOne from "../assets/2.webp";
import CarouselTwo from "../assets/1.jpg";
import CarouselThree from "../assets/1.jpg";
import CarouselFour from "../assets/2.webp";
import { FaChevronLeft } from "react-icons/fa6";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const totalSlides = 4;

    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex + 1);
    };

    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className="z-30">
            <Swiper
                ref={swiperRef}
                onSlideChange={handleSlideChange}
                navigation={false}
                pagination={false}
                modules={[Navigation]}
                className="h-[340px] md:h-[35rem]"
            >
                <SwiperSlide>
                    <img src={CarouselOne.src} alt="Slide 1" className="w-full h-full object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={CarouselTwo.src} alt="Slide 2" className="w-full h-full object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={CarouselThree.src} alt="Slide 3" className="w-full h-full object-cover" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={CarouselFour.src} alt="Slide 4" className="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="border-b border-base-text flex items-center justify-center">
                {/* Left arrow */}
                <button
                    onClick={handlePrevSlide}
                    className={`w-11 h-11 ${currentIndex === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    <FaChevronLeft className="text-[#121212BF] text-[10px] flex items-center justify-center" />
                </button>

                {/* Slide counter */}
                <div className="w-11 flex items-center text-xs text-[#121212BF]">
                    {currentIndex}/{totalSlides}
                </div>

                {/* Right arrow */}
                <button
                    onClick={handleNextSlide}
                    className={`w-11 h-11 ${currentIndex === totalSlides ? "opacity-80 cursor-not-allowed" : ""}`}
                >
                    <FaChevronLeft className="text-[#121212BF] text-[10px] flex items-center justify-center rotate-180" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
