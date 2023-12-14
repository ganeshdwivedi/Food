import React from "react";

const Hero = () => {
  return (
    <div className="text-center relative">
      <div className="">
        <img
          className="object-cover w-[100%] relative"
          src="https://img.freepik.com/premium-photo/burger-flight-white-background_325774-4399.jpg"
        />
      </div>
      <div className="absolute text-left md:w-[30%] md:top-[15rem] sm:ml-[10vw]">
        <h1 className="md:text-5xl text-slate-900 sm:text-2xl text-5xl font-bold text-left">
          Perfect <span className="text-red-800">burgers</span>, perfect date
        </h1>
        <p className="md:text-2xl text-slate-700 sm:text-lg text-2xl font-medium text-left uppercase my-8">
          The best burger are shared with friends
        </p>
        <div className="flex pt-2 flex-row gap-4">
          <button className="bg-red-800 px-4 py-2 rounded-[25px] text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
