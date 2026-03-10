export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  link: string;
  category: string; 
  likes: number;
  isLiked?: boolean; 
}