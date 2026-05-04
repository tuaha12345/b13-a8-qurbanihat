import React from "react";
import Marquee from "react-fast-marquee";

import { HiOutlineCheckCircle, HiOutlineTruck } from "react-icons/hi";
import { BsShieldCheck, BsCurrencyDollar } from "react-icons/bs";
import Link from "next/link";
import "animate.css";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-neutral-content text-center px-4">
        <div className="w-full max-w-4xl">

          <div className="mb-6">
            <Marquee speed={40} pauseOnHover={true}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-5 md:px-10 text-center rounded-xl shadow-lg mx-2 md:mx-4 animate__animated animate__fadeInDown">
                
                <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white">
                  Welcome to <span className="text-green-500">QurbaniHat</span>
                </h1>

                <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200">
                  আপনার পছন্দের Qurbani animal কিনুন সহজে ও নিরাপদে
                </p>

                {/* Features */}
                <div className="mt-3 flex flex-wrap justify-center gap-3 md:gap-6 text-xs sm:text-sm md:text-base text-gray-100 font-semibold">
                  
                  <span className="flex items-center gap-1 md:gap-2">
                    <HiOutlineCheckCircle className="text-green-500 text-lg" />
                    Healthy
                  </span>

                  <span className="flex items-center gap-1 md:gap-2">
                    <BsCurrencyDollar className="text-green-500 text-lg" />
                    Affordable
                  </span>

                  <span className="flex items-center gap-1 md:gap-2">
                    <BsShieldCheck className="text-green-500 text-lg" />
                    Trusted
                  </span>

                  <span className="flex items-center gap-1 md:gap-2">
                    <HiOutlineTruck className="text-green-500 text-lg" />
                    Delivery
                  </span>
                </div>
              </div>
            </Marquee>
          </div>

          <h1 className="mb-4 text-2xl sm:text-4xl md:text-6xl font-bold animate__animated animate__bounceIn leading-tight">
            Find Your <span className="text-green-500">Perfect</span> <br />
            Qurbani Animal
          </h1>

       
          <p className="mb-6 text-sm sm:text-base md:text-lg px-2 md:px-10">
            Browse certified, health-checked livestock from trusted farmers
            across Bangladesh. Authentic Qurbani animals at your fingertips.
          </p>

     
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mr-5 md:mr-1">
            <Link
              href="/animals"
              className="btn bg-green-500 text-white w-full sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="/pricing"
              className="btn btn-soft text-green-500 w-full sm:w-auto"
            >
              Pricing
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;