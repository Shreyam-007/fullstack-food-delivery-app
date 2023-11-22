import { motion } from "framer-motion";
import React from "react";
import IMAGES from "../assets";
import { buttonClick, staggerFadeInOut } from "../animations/index";
import { randomData } from "../utils/styles";
import { Link } from "react-router-dom";
import FilterSection from "./FilterSection";

const Home = () => {
  return (
    <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col items-start justify-start gap-6">
        <div className="px-4 py-1 flex items-center justify-center gap-2 rounded-full bg-orange-100">
          <p className="text-lg font-semibold text-orange-500">Free Delivery</p>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
            <img
              src={IMAGES.Delivery}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[40px] text-headingColor md:text-[72px] font-extrabold font-sans tracking-wider">
          The Fastest Delivery in{" "}
          <span className="text-orange-600">Your City</span>
        </p>
        <p className="text-lg text-textColor">
          Welcome to <span className="font-bold">Eat Ease</span>  – where delicious meets convenient! Satisfy
          your cravings with a few clicks, as we bring a world of flavors
          straight to your door. From local favorites to international delights,
          our easy-to-use platform ensures a seamless ordering experience. Fast,
          reliable, and always tasty – <span className="font-bold">Eat Ease</span> is your shortcut to a
          hassle-free and delightful dining adventure. Ready to treat your taste
          buds? Let's get started!
        </p>
        <motion.button
          {...buttonClick}
          className="bg-gradient-to-bl from-orange-400 to-orange-600  text-black text-base font-semibold px-4 py-2 rounded-xl "
          // onClick={(e) => {
          //   <Link to= {<FilterSection />}/>
          // }}
        >
          Order Now
        </motion.button>
      </div>
      <div className="py-2 flex flex-1 items-center justify-center relative">
        <img
          src={IMAGES.HeroBg}
          alt=""
          className="absolute top-0 right-0 md:right-12 w-full h-420 md:w-auto md:h-650"
        />
        <div className="w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14">
          {randomData &&
            randomData.map((data, i) => (
              <motion.div
                key={i}
                {...staggerFadeInOut(i)}
                className="w-32 h-36 md:h-auto md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={data.imageURL}
                  alt=""
                  className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain"
                />
                <p className="text-sm lg:text-xl font-semibold text-headingColor">
                  {data.product_name.slice(0, 16)}
                </p>
                <p className="text-[12px] text-center md:text-base text-gray-600 font-semibold capitalize">
                  {data.product_category}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-md text-red-600">₹ </span>
                  {data.product_price}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
