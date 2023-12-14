"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const router = useRouter();
  const [product, setProduct] = useState([]);
  const slug = params.slug.replace(/-/g, " ");
  const getProduct = async () => {
    const response = await axios.get(`/api/product/${slug}`);
    console.log(response.data.product);
    setProduct(response.data.product);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/product/delete/${slug}`);

      console.log(response.data.message);
      router.push("/dashboard/admin/products");
    } catch (error) {
      console.log(error, "error while deleting product");
    }
  };

  return (
    <div className="pt-36 flex flex-row gap-20 items-center">
      <img className="w-[20vw]" src={product.thumbnail} alt={product.title} />
      <div>
        <p className="text-red-900 font-semibold">Title</p>
        <h3 className="font-bold">{product.title}</h3>
      </div>
      <div>
        <p className="text-red-900 font-semibold">Description</p>
        <h3 className="font-bold">{product.description}</h3>
      </div>
      <div>
        <p className="text-red-900 font-semibold">Category</p>
        <h3 className="font-bold">{product.category}</h3>
      </div>
      <div>
        <p className="text-red-900 font-semibold">Price</p>
        <h3 className="font-bold">{product.price}</h3>
      </div>
      <button className="px-4 py-2 bg-green-400" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default page;
