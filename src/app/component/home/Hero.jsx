import React from "react";
import Marquee from "react-fast-marquee";

import { HiOutlineCheckCircle, HiOutlineTruck } from "react-icons/hi";
import { BsShieldCheck, BsCurrencyDollar } from "react-icons/bs";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./hero.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <div className="flex mb-7">
            <Marquee speed={50} pauseOnHover={true}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 py-6 px-10 text-center rounded-xl shadow-lg mx-4">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                  Welcome to <span className="text-green-500">QurbaniHat</span>
                </h1>

                <p className="mt-3 text-lg md:text-xl text-gray-200">
                  আপনার পছন্দের Qurbani animal কিনুন সহজে ও নিরাপদে
                </p>

                <div className="mt-4 flex items-center justify-center gap-6 text-sm md:text-lg text-gray-100 font-semibold">
                  <span className="flex items-center gap-2">
                    <HiOutlineCheckCircle className="text-green-500 text-xl" />{" "}
                    Healthy Cows & Goats
                  </span>
                  <span className="flex items-center gap-2">
                    <BsCurrencyDollar className="text-green-500 text-xl" />{" "}
                    সাশ্রয়ী মূল্য
                  </span>
                  <span className="flex items-center gap-2">
                    <BsShieldCheck className="text-green-500 text-xl" /> Trusted
                    Sellers
                  </span>
                  <span className="flex items-center gap-2">
                    <HiOutlineTruck className="text-green-500 text-xl" /> Quick
                    Delivery
                  </span>
                </div>
              </div>
            </Marquee>
          </div>
          <h1 className="mb-5 text-6xl font-bold">
            Find Your <span className="text-green-500">Perfect</span>
            <br></br> Qurbani Animal
          </h1>
          <p className="mb-5">
            Browse certified, health-checked livestock from trusted farmers
            across Bangladesh. Authentic Qurbani animals at your fingertips.
          </p>
          <div className="flex gap-7 justify-center">
            <button className="btn bg-green-500 text-white">Get Started</button>
            <button className="btn btn-soft  text-green-500">Pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
