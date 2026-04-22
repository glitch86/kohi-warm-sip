export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  sizeOptions?: string[];
  shortDescription: string;
  longDescription: string;
  img: string;
  inStock: boolean;
  rating: number;
  tags: string[];
  reviews: {
    name: string;
    date: string;
    review: string;
    helpful: number;
  }[];
};