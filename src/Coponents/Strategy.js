import React from 'react'
import imgage_1 from '../Assets/image_1.png'

const Strategy = () => {
  return (
    <div className="w-[1064px] h-[416px] px-[188px] justify-start items-center gap-[108px] inline-flex lg:w-[896px] lg:h-[348px] lg:gap-5 md::w-[688px] md:h-[276px]">
        <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex lg:grow lg:shrink lg:basis-0">
            <div className="flex-col justify-start items-start gap-3 flex lg:self-stretch lg:h-[33px]">
                <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">Digital Strategy Consulting</div>
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Inter']">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</div>
            <button className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
                <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
            </button>
        </div>
        <img className="w-[414px] h-[416px] lg:w-[346px] lg:h-[348px] md:w-[275px] md:h-[276px]" src={imgage_1} />
    </div>
  );
}

export default Strategy;
