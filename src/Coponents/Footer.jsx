import React from "react";
import Logo from '../Assets/Logo.png';

const Footer =()=>{
    return(
        <div className="w-[1440px] h-[350px] px-20 pt-10 pb-5 bg-violet-700 flex-col justify-start items-center gap-10 inline-flex ">
            <div className="self-stretch justify-between items-start inline-flex lg:gap-28">
                <div className="w-[413px] flex-col justify-start items-start gap-5 inline-flex">
                    <div className="w-[238.89px] h-[25px] relative">
                        <div className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute">
                            <img
                                src={Logo}
                                alt="AT-Digital Logo"
                                // className="w-[238.889px] h-[25px] "

                            />
                        </div>
                    </div>
                    <div className="self-stretch text-white text-base font-normal font-['Lato']">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</div>
                </div>
                <div className="justify-start items-start gap-32 flex">
                    <div className="w-[197px] flex-col justify-start items-start gap-3 inline-flex">
                        <div className="text-white text-[21px] font-semibold font-['Inter']">Our Technologies</div>
                        <div className="flex-col justify-start items-start gap-3 flex">
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">ReactJS</div>
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">Gatsby</div>
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">NextJS</div>
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">NodeJS</div>
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">GraphQL</div>
                            <div className="text-white text-sm font-medium font-['Inter'] capitalize">Laravel</div>
                        </div>
                    </div>
                    <div className="w-[197px] flex-col justify-start items-start gap-3 inline-flex">
                        <div className="text-white text-[21px] font-semibold font-['Inter']">Our Services</div>
                        <div className="self-stretch h-[150px] flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">Social media Marketing</div>
                            <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">Web & Mobile App Development</div>
                            <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">Data & Analytics</div>
                            <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">Google Marketing solutions</div>
                            <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">Search Engine Optimization</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[25px] flex-col justify-start items-center gap-2 flex">
                <div className="w-[630px] h-[0px] border border-white"></div>
                <div className="justify-center items-center gap-4 inline-flex">
                    <div className="text-white text-sm font-medium font-['Inter'] capitalize">Privacy Policy</div>
                    <div className="w-4 h-[0px] origin-top-center rotate-90 border border-white"></div>
                    <div className="text-white text-sm font-medium font-['Inter'] capitalize">Terms & Conditions</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;