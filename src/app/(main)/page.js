
import animals from '@/lib/data.json';
import Image from "next/image";
import Hero from "../component/home/Hero";
import FeaturedAnimal from '../component/home/FeaturedAnimal';
import Tips from '../component/home/Tips';
export default function Home() {
  
  // console.log(animals);
  return (
   <div>
    <Hero />
    <FeaturedAnimal animals={animals} />
    <Tips />
   </div>
  );
}
