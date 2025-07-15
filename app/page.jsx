import React from "react";
import About from "./about/page";
import Image from "next/image";
import { motion } from "framer-motion";

export default function page() {
  const imgs = ["/s.png", "/s2.png", "/s3.png"];
  return (
    <>
      <div className="c pb-0 mb-0 min-h-[100dvh] w-full flex items-center relative bg-black/40">
        <video
          className="h-full w-full absolute inset-0 -z-10 object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          src="/lv_0_20250705183811.mp4"
        ></video>
        <div className="flex flex-col text-white md:gap-7  gap-4 mt-20">
          <h2 className="md:text-5xl text-2xl t font-Playfair_Display font-black">
            Where Comfort Meets Elegance
          </h2>
          <p className="md:text-2xl text-[18px] t">
            Discover a place where every moment feels like a vacation. From
            <span className="md:block">
              {" "}
              luxurious rooms to unforgettable views. Your perfect stay awaits.
            </span>
          </p>
          <div className="flex items-center gap-5 justify-center md:justify-normal">
            <a
              href=""
              className="px-10 py-3 md:px-14 md:py-3 bg-[#093E2E] border border-transparent rounded-lg md:text-[19px]"
            >
              Book Now
            </a>
            <a
              href=""
              className="px-10 py-3 md:px-14 md:py-3 border md:border-2 border-white rounded-lg md:text-[19px]"
            >
              View Offer
            </a>
          </div>
        </div>
      </div>
      <div className="c !py-8 mt-5 flex flex-col gap-20 ">
        <div className=" grid md:grid-cols-3 gap-5">
          {imgs.map((img, i) => {
            return (
              <div
                key={i}
                className=" h-[400px] object-cover rounded-2xl overflow-hidden object-center"
              >
                <img src={img} />
              </div>
            );
          })}
        </div>
        <div className="text-center flex flex-col gap-7 ">
          <div className="font-Playfair_Display flex flex-col gap-3">
            <h3 className="text-gray text-[18px]">
              Tourist Retreats – Paradise
            </h3>
            <h2 className="text-green md:text-3xl text-[28px] font-semibold">
              NEW EXPERIENCES
            </h2>
          </div>
          <p className=" mx-auto md:w-11/12">
            Discover the latest upgrades across our resort, designed to elevate
            your stay with modern elegance and coastal charm. From revamped
            suites to serene poolside lounges, each space has been thoughtfully
            reimagined for your comfort and relaxation.
          </p>
        </div>
      </div>

      <About />
    </>
  );
}
