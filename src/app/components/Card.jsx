import React from "react";

const Card = ({ src }) => {
  return (
    <>
      <div className="md:w-[25vw] text-center sm:w-[49vw] h-[full] md:my-8 sm:my-2 rounded-[25px] md:p-4 sm:p-2 overflow-hidden">
        <img
          className=" hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
          src={src}
        />

        <div className="mt-2">
          <p className="font-medium text-3xl text-slate-800">Classic Burger</p>
          <h4 className="font-bold text-2xl text-red-800">$ 1999</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
