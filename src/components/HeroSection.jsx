import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { category } from "./Category";
import { useState } from "react";

export default function HeroSection() {
  let [slide, setSlide] = useState(0);
  let items = category.map((v, i) => {
    return (
      <div
        style={{ transform: `translatex(-${slide * 100}%)` }}
        className="shrink-0 flex-grow"
      >
        <img className="w-[110px] h-[100px]" src={v.img} alt="" />
      </div>
    );
  });
  let nextSlide = () => {
    if (category.length - 8 === slide) return false;
    setSlide(slide + 3);
  };
  let prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="m-[50px] ">
          <h1 className="font-extrabold font-sans">What is your mind?</h1>
        </div>
        <div className="text-white flex m-3">
          <div className="bg-slate-400 p-2 rounded-full">
            <FaArrowLeft onClick={prevSlide} />
          </div>
          <div className="bg-slate-400 p-2 rounded-full">
            <FaArrowRight onClick={nextSlide} />
          </div>
        </div>
      </div>
      <div className=" mx-[30px] bg-red-400 shadow-lg h-10 py-16 px-4 flex items-center gap-2 overflow-hidden">
        {items}
      </div>
    </div>
  );
}
