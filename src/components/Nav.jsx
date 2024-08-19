import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
export default function Nav() {
  return (
    <>
      <header className="h-4 py-8 shadow-md flex items-center ">
        <div className="mx-[120px] flex items-center">
          <img
            className="w-[100px] h-full m-6"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png"
            alt=""
          />
          <div className="rotate-0 bg-slate-200 h-[30px] w-[1px] "></div>
          <span className="pt-2 font-bold text-[13px]">
            <FaTelegramPlane className="inline m-1 text-orange-400" />
            Setup your precise Location
            <RiArrowDropDownLine className="inline m-1 text-[28px] text-orange-400" />
          </span>
          <div>
            <input
              type="text"
              className="bg-[rgba(0,0,0,0.1)] p-2
            rounded-md w-[300px] font-bold outline-none focus:bg-slate-100"
              placeholder="Search for restaurant and food"
            />
            <CiSearch className="inline font-extrabold text-[22px] cursor-pointer" />
          </div>
        </div>
        <MdAccountCircle className="text-[black] text-[45px] -ml-20" />
      </header>
      {/* hero section */}
      <div className="h-[300px] w-full shadow-md bg-gradient-to-t from-slate-400  border-b-2 rounded-b-3xl flex items-center justify-center text-center">
        <div className="basis-[50%] text-[40px] font-bold ">
          Order Food <br /> Online in Kolkata
          <svg
            className="text-center mx-auto"
            width="200px"
            viewBox="0 0 78 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
              stroke="#FF5200"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
        <div className="basis-[50%]">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
