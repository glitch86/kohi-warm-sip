"use client";
import React from "react";
import { useEffect, useState } from "react";
import useAxiosPublic from "@/hooks/axiosHooks/useAxiosPublic";
import { Product } from "@/types/products";
import ProductCard from "@/components/cards/ProductCard";

const CardContainer = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState<Product[]>([]);
  const [popular, setPopular] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosPublic.get("/api/products");
        setProducts(res.data);
        const highestRated = [...res.data].sort(
          (a, b) => b.rating - a.rating,
        )[0];
        setPopular(highestRated);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [axiosPublic]);

  console.log(popular)
  return (
    <div>

        {/* <ProductCard product={popular}></ProductCard> */}

      <div className="grid grid-cols-4 gap-9 w-fit mx-auto my-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
