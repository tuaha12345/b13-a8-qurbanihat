
import animals from '@/lib/data.json';
import Image from "next/image";
import Hero from "../component/home/Hero";
import FeaturedAnimal from '../component/home/FeaturedAnimal';
import Tips from '../component/home/Tips';
import TopBreeds from '../component/home/TopBreeds';
export default function Home() {
  
  // console.log(animals);
  return (
   <div>
    <Hero />
    <FeaturedAnimal animals={animals} />
    <Tips />
    <TopBreeds animals={animals} />
   </div>
  );
}
