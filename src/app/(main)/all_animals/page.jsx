import React from 'react';
import animals from '@/lib/data.json';
import Image from "next/image";

const page = () => {
    return (
        <div className='my-7 container mx-auto w-11/12'>
            <h1 className='text-center font-bold text-green-500 text-3xl my-5'>All Animals</h1>
                  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                    {animals.map((animal) => (
                      <div key={animal.id} className="card bg-base-100  shadow-sm transition duration-300 transform hover:-translate-y-1 ">
                        <figure className="w-full  md:h-[220px] overflow-hidden bg-green-100">
                          <Image
                            width={400}
                            height={300}
                            src={animal.image}
                            alt={animal.name}
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">{animal.name}</h2>
                          <p>{animal.description}</p>
                          <div className="font-bold">
                            Breed:{" "}
                            <span className="font-semibold text-gray-600">
                              {animal.breed}
                            </span>
                          </div>
                          <div className="font-bold">
                            Price:{" "}
                            <span className="font-semibold text-gray-600">
                              {animal.price.toLocaleString()} টাকা{" "}
                            </span>
                          </div>
                          <div className="card-actions justify-end">
                            <button className="btn bg-green-500 text-white">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
        </div>
    );
};

export default page;