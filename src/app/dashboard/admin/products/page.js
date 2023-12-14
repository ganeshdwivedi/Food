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

  const GetAllProducts = product.map((item, index) => {
    let slug = item.title.replace(/ /g, "-");
    console.log(slug);
    return (
      <Link key={item._id} href={`/dashboard/admin/products/${slug}`}>
        <div className="flex m-10 flex-row gap-20 justify-around items-center border-2 hover:bg-red-200 rounded-lg">
          <div className="w-[200px] h-[100px] object-cover">
            <img
              className="object-cover"
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <p className="w-64">{item.title}</p>
          <p>{item.price}</p>
        </div>
      </Link>
    );
  });
  return (
    <div className="pt-32">
      <h1 className="text-center text-3xl">
        Here are all the products added by admin
      </h1>
      <Link
        href={"/dashboard/admin/addProduct"}
        className="px-4 py-2 rounded-[25px] bg-red-700 text-white"
      >
        Add Product
      </Link>
      {GetAllProducts}
    </div>
  );
};

export default page;
