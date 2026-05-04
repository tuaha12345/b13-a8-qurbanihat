import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";


const TopBreeds = ({ animals }) => {
const externalImage="https://media1.tenor.com/m/TUydBiUclmEAAAAd/cow-walk.gif"

  return (
    <div className=" flex flex-col  my-10 py-8 rounded-xl w-11/12 mx-auto">
      <h1 className="text-center font-bold text-3xl mb-8">
      Top Breeds
      </h1>
    
      <div className="flex justify-center">
        <Image src={externalImage} className="border rounded-full" width={500} height={400}></Image>
      </div>


       <Marquee>
       
        {animals.map((animal, index) => (
          <div key={index} className="m-4">
            <h1 className="text-2xl font-bold">{animal.breed}</h1>
            <p key={index + 1}>{animal.description}</p>
            {/* <Image             width={40}
              height={30}
              src={animal.image}
              alt={animal.name}
            /> */}
          </div>
        ))}
</Marquee>
      
    </div>
  );
};

export default TopBreeds;