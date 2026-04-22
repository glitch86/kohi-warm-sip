import React from "react";
import { Product } from "../../types/products";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  product: Product;
};
const ProductCard = ({ product }: Props) => {
  return (
    <Card className="w-64 h-96 flex flex-col overflow-hidden bg-accent pt-0">
      
      {/* Image */}
      <div className="relative w-full h-56 ">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4">
        
        <div>
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm font-semibold">
              {product.name}
            </CardTitle>
            <span className="text-sm font-medium">
              ${product.price}
            </span>
          </div>

          <CardDescription className="text-xs mt-2 line-clamp-2">
            {product.shortDescription}
          </CardDescription>
        </div>

        <CardAction className="mt-3">
          <Button className="w-full">Add to cart</Button>
        </CardAction>

      </div>
    </Card>
  );
};
export default ProductCard;
