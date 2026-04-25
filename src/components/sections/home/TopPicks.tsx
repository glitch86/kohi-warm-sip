"use client";
import ProductCard from "@/components/cards/ProductCard";
import useAxiosPublic from "@/hooks/axiosHooks/useAxiosPublic";
import { Product } from "@/types/products";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopPicks = () => {
  const axiosPublic = useAxiosPublic();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosPublic.get("/api/products");
        setProducts(res.data.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [axiosPublic]);
  // console.log(products);

  return (
    <div className="container mx-auto">
      <div className="text-secondary flex justify-between items-center">
        <div>
          <p>Our Favourite</p>
          <h2 className="text-primary text-3xl">Top Pics</h2>
        </div>
        <Link href={"/menu"} className="flex items-center gap-1">
          <span>View Full Menu</span>
          <ArrowBigRight></ArrowBigRight>
        </Link>
      </div>


      {/* card container  */}
      <div className="flex gap-9 w-fit mx-auto my-4">
        {
          products.map( product => <ProductCard key={product.id} product={product}></ProductCard>)
        }
      </div>
    </div>
  );
};

export default TopPicks;
