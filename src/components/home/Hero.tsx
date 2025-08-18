import { heroSvg } from "@/dynamicSvgs/hero";
import { useState } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";

import jsonData from "@data/hero.json";
const hero = jsonData.hero;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const showing = hero.right.funitures[index];

  // handle navigation
  const nextSlide = () => {
    if (index < hero.right.funitures.length - 1) {
      setIndex(index + 1);
    }
  };
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const goToSlide = (i: number) => {
    setIndex(i);
  };

  return (
   <>
    <div className="w-full relative px-[5%] lg:ps-[201px] lg:pr-[189px] h-fit lg:h-[850px] bg-[#F0F2F3] rounded-bl-[48px] rounded-br-[48px] lg:w-[95%] mx-auto ">
      {/* container */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
        {/* left */}
        <div className="pt-[131px] lg:pt-[263px] ">
          <h5 className="font-inter font-normal text-[#272343] text-[14px] ">
            {hero.left.h5}
          </h5>
          <h2 className="font-inter leading-[110%] font-bold mt-2 text-[#272343] text-3xl lg:text-5xl ">
            <span> {hero.left.h2.span1} </span>
            <br />
            <span> {hero.left.h2.span2} </span>
            <br />
            <span> {hero.left.h2.span3} </span>
          </h2>
          {/* cta */}
          <div className="mt-6 ">
            <Link
              className="w-fit py-[14px] px-6 rounded-[8px] bg-[#029FAE] flexCenter gap-5 font-inter font-semibold text-base text-white "
              to={hero.left.cta.text}
            >
              <span>{hero.left.cta.text}</span>
              <span>{heroSvg[hero.left.cta.icon]}</span>
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="relative ">
          <img
            className="relative z-0"
            src={hero.right.bg}
            alt="background circle"
            loading="lazy"
          />
          <div className="relative lg:absolute top-[-184px] lg:top-[82px] h-[400px] w lg:w-[400px] lg:h-[649px] z-10">
            <img
              className="w-[inherit] mx-auto h-[inherit] lg:w-[inherit] lg:h-[inherit] "
              src={showing.img}
              alt="furniture"
              loading="lazy"
            />
            {/* discount */}
            <div className="absolute z-[11] top-0 right-0 lg:right-[-47px] h-[70px] w-[62px] lg:w-[140px] lg:h-[124px] rounded-full flexCol bg-white ">
              <span className="font-inter font-bold text-[#F05C52] text-[18px] lg:text-[36px] ">
                {showing.discount.percentage}
              </span>
              <span className="font-inter font-[500] text-[8px] lg:text-[14px] text-[#272343] ">
                {showing.discount.text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* pagination arrows */}
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className="absolute left-[88px] top-1/2 hidden lg:flex items-center justify-center cursor-pointer w-[56px] h-[56px] -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow disabled:opacity-50  "
      >
        {/* left */}
       <span className=" inline-block rotate-180 text-[#007580]  "> {heroSvg.arrow} </span>
      </button>
      <button
        onClick={nextSlide}
        disabled={index === hero.right.funitures.length - 1}
        className="absolute right-[88px] top-1/2 hidden lg:flex items-center justify-center cursor-pointer w-[56px] h-[56px] -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow disabled:opacity-50  "
      >
         {/* right */}
       <span className=" inline-block text-[#007580]  "> {heroSvg.arrow} </span>
      </button>

      {/* pagination dots */}
      <div className="absolute bottom-[111px] left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {hero.right.funitures.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#272343]" : "bg-[#9A9CAA]"
            }`}
          ></button>
        ))}
      </div>
      {/* services */}
    </div>
    <div className="mt-[-75px] relative z-[22] ">
      <Services />

    </div>
   </>
  );
};

export default Hero;
