import React from 'react';
import Logo from '../Assets/Logo.png';


const Navbar = () => {
    return(
      <div className="w-[1440px] h-[77px] px-20 py-[26px] bg-violet-700 justify-between items-center inline-flex">
        <div className="w-[238.89px] h-[25px] relative">
          <div className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute">
            <img
              src={Logo}
              alt="AT-Digital Logo"
              // className="w-[238.889px] h-[25px] flex-shrink-0"
              />
          </div>
        </div>
        <div className="justify-start items-start gap-7 flex">
          <div className="text-white text-sm font-medium font-['Inter']">SERVICES</div>
          <div className="text-white text-sm font-medium font-['Inter']">ABOUT US</div>
          <div className="text-white text-sm font-medium font-['Inter']">CONTACT US</div>
          <div className="text-white text-sm font-medium font-['Inter']">CAREERS</div>
        </div>
      </div>
    );
};

export default Navbar;

