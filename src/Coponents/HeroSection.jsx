import React from 'react'
import Hero from '../Assets/Hero.png'
import Button from './Button'


export default function HeroSection() {
  return (
    <div className="w-[1440px] h-[700px] relative mt-10">
    <div className="w-[1440px] h-[700px] left-0 top-0 absolute">
        <div className="w-[1440px] h-[700px] left-0 top-0 absolute bg-zinc-300" />
        <img src= {Hero} className="w-[1440px] h-[763px] left-0 top-[-40px] absolute"/>
    </div>
    <div className="h-[306px] pl-8 pr-4 pt-6 pb-8 left-[80px] top-[354px] absolute bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex">
        <div className="w-[590px] text-white text-5xl font-bold font-['Inter'] capitalize leading-[48px]">We crush your competitors, goals, and sales records - without the B.S.</div>
        <Button/>
    </div>
</div>
  );
}

