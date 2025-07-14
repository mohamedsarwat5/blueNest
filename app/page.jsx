import React from "react";
import About from "./about/page";

export default function page() {
  return (<>
    <div className="c min-h-[100dvh] w-full flex items-center relative bg-black/40">
      <video className="h-full w-full absolute inset-0 -z-10 object-cover object-center" autoPlay muted loop playsInline src="/lv_0_20250705183811.mp4"></video>
      <div className="flex flex-col text-white md:gap-7  gap-4 mt-20">
        <h2 className="md:text-5xl text-2xl t ">Where Comfort Meets Elegance</h2>
        <p className="md:text-2xl text-[18px] t">Discover a place where every moment feels like a vacation. From<span className="md:block"> luxurious rooms to unforgettable views. Your perfect stay awaits.</span></p>
        <div className="flex items-center gap-5 justify-center md:justify-normal">
          <a href="" className="px-10 py-3 md:px-14 md:py-3 bg-[#093E2E] border border-transparent rounded-lg md:text-[19px]">Book Now</a>
          <a href="" className="px-10 py-3 md:px-14 md:py-3 border md:border-2 border-white rounded-lg md:text-[19px]">View Offer</a>
        </div>
      </div>
    </div>

    <About />
  </>);
}
