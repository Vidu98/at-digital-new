import React from 'react'
import Tab from '../Assets/Tab.png'

const Services = () => {
    return (
        <div>
            <div className="w-[1064px] h-[414px] px-[188px] justify-start items-center gap-[108px] inline-flex lg:w-[896px] lg:h-[346px] md:w-[688px] md:h-[275px]">
                <img src={Tab} className="w-[414px] h-[414px] lg:w-[346px] lg:h-[346px] md:" />
                    <div className="w-[542px] flex-col justify-start items-start gap-5 inline-flex lg:grow lg:shrink lg:basis-0 lg:flex-col">
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="w-[507px] text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide">Web & Mobile App Development</div>
                        </div>
                        <div className="self-stretch text-black text-base font-normal font-['Inter']">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</div>
                        <button className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
                            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">LEARN MORE</div>
                        </button>
                    </div>
            </div>
        </div>

    );
}

export default Services;


