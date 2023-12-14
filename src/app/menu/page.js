"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    const response = await axios.get("/api/product/all");
    setProduct(response.data.products);
  };
  console.log(product);
  useEffect(() => {
    getProduct();
  }, []);
  let slug;
  const GetAllProducts = product.map((item) => {
    slug = item.title.replace(/\s/g, "-");
    return (
      <Link key={item._id} href={`/menu/${slug}`}>
        <div className="md:w-[25vw] text-center sm:w-[49vw] h-[full] md:my-8 sm:my-2 rounded-[25px] md:p-4 sm:p-2 overflow-hidden">
          <img
            className=" hover:scale-[1.03] hover:transition-all hover:delay-[120ms] md:w-full md:h-[40vh] sm:h-[25vh] sm:w-full "
            src={item.thumbnail}
          />
          <div className="mt-2">
            <p className="font-medium text-3xl text-slate-800">{item.title}</p>
            <h4 className="font-bold text-2xl text-red-800">$ {item.price}</h4>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="flex justify-center sm:py-[4.5rem] py-10">
      {
        <div className="grid md:grid-cols-2 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-0 md:gap-x-10">
          {GetAllProducts}
        </div>
      }
    </div>
  );
};

export default page;
