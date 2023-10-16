"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles/style.css';
import { FaCalendarDay, FaGear } from 'react-icons/fa6';
// import required modules
import { EffectCards } from 'swiper/modules';
import ChallengeCard from './Components/ChallengeCard';

const cardData = [
    {cardNumber: 1, challenge: "Get the sum of two numbers", status: 2, type: 0},
    {cardNumber: 2, challenge: "Reverse a binary linked tree", status: 3, type: 1},
    {cardNumber: 3, challenge: "Find the index of the first occurrence of a word", status: 3, type: 2},
    {cardNumber: 4, challenge: "Check if a word is a pandrome", status: 1, type: 1},
    {cardNumber: 5, challenge: "Find the length of the longest word", status: 0, type: 0},
]

export default function Swipers() {
    return (
        <section className='border border-themeMain/30 dark:bg-white/10 bg-black/10 rounded-lg backdrop-blur-xl flex-1 min-h-fit dark:text-white min-w-[15rem] flex-shrink-0 flex flex-col relative'>
            <span className='px-3 py-2 text-sm font-semibold dark:text-white w-full flex justify-between items-center border-b dark:border-white/10 border-themeMain/10'>
            <span className={"flex items-center gap-1"}>
                    <FaCalendarDay />
                    Daily challenge
                </span>
                <span title={"Settings"} className='w-[30px] h-[30px] rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer active:scale-90 grid place-items-center dark:text-white group'>
                    <FaGear className='group-active:rotate-90' />
                </span>
            </span>
            <div className='flex-1 grid place-items-center overflow-hidden h-fit p-3'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    {cardData.map((card) => (
                        <SwiperSlide key={card.cardNumber} className={`rounded-2xl overflow-hidden backdrop-blur-md dark:bg-white/5 bg-white/25 border-2 dark:border-white/50 border-themeMain/50`}>
                            <ChallengeCard 
                                cardNumber={card.cardNumber}
                                challengeText={card.challenge}
                                status={card.status}
                             />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
