import React from "react";

export const metadata = {
  title: "About Us",
};

const data = [
  "King-size bed with luxury linens",
  "Private balcony & garden or pool view",
  "Modern décor with ambient lighting",
  "Complimentary breakfast & Wi-Fi",
  "24/7 concierge and room service",
];

export default function About() {
  return (
    <>
      <div className="min-h-[100dvh] about   ">
        <div className=" md:h-24 h-[70px] "></div>
        <div className="c min-h-full ">
          <div className="flex flex-col md:flex-row items-center gap-6 ">
            <div className="md:w-1/2 flex ">
              <img className=" md:w-10/12" src="/Group 14.png" alt="" />
            </div>

            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-Playfair_Display mb-3 text-green md:text-[48px] text-[28px] font-semibold">
                About us
              </h2>
              <h3 className="mb-4 font-medium md:text-[30px]  md:leading-9">
                Welcome to The Blue Nest – Your Serene Escape
              </h3>
              <p className=" text-gray md:text-[18px] md:w-11/12">
                At The Blue Nest, we believe that comfort is more than just a
                good night’s sleep — it’s about feeling truly at home. Nestled
                in a peaceful location, our hotel is designed to offer a perfect
                balance between relaxation and elegance, giving you a unique
                experience whether you’re here for leisure or business.
              </p>
            </div>
          </div>
        </div>
        <div className="c !py-9 ">
          <div className="grid md:grid-cols-2 items-center gap-6 justify-center ">
            <div className="flex flex-col gap-3 order-2 md:-order-1">
              <div className=" font-Playfair_Display mb-3 text-center md:text-left ">
                <h3 className="text-[#626262] md:text-[24px] text-[19px] italic">
                  Elegance meets relaxation in every detail
                </h3>
                <h2 className="font-semibold text-green md:text-[40px] text-[25px] mt-4">
                  New Comfort Experience
                </h2>
              </div>
              <p className=" text-gray text-[24px] ">
                Discover our newly renovated rooms designed to offer a blend of
                modern elegance and relaxing comfort. Whether you’re traveling
                for business or leisure, our spaces are tailored to make your
                stay truly unforgettable.
              </p>
              <div>
                {data.map((text, i) => {
                  return (
                    <li className="text-gray font-medium text-[17px] md:text-[19px]" key={i}>
                      {text}
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="">
              <img
                className="md:w-[580px] h-[543px] object-cover rounded-2xl mx-auto"
                src="/image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
