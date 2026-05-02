"use client";
import React,{use} from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import { useForm, SubmitHandler } from "react-hook-form"
import "react-toastify/dist/ReactToastify.css";

const animalDetailsPage = ({ params }) => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { id } =use(params);
  const animal = data.find((animal) => animal.id == id);
  console.log(animal);
  console.log("id", id);
  const onSubmit=()=>{
    toast.success("Your form has been submitted successfully")
  }
  return (
    <div className="my-9 container mx-auto w-11/12">
      <h1 className="text-center font-bold text-green-500 text-3xl my-5">
        Animal Details Page
      </h1>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="animal-details">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="w-full h-[350px] overflow-hidden">
              <Image
                src={animal.image}
                alt={animal.name}
                width={400}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-green-600">
                {animal.name}
              </h2>
              <p className="text-xl font-semibold text-gray-800">
                ৳ {animal.price.toLocaleString()}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Type:</span> {animal.type}
                </p>
                <p>
                  <span className="font-semibold">Breed:</span> {animal.breed}
                </p>
                <p>
                  <span className="font-semibold">Weight:</span> {animal.weight}{" "}
                  kg
                </p>
                <p>
                  <span className="font-semibold">Age:</span> {animal.age} years
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {animal.location}
                </p>
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {animal.category}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Description:
                </h3>
                <p className="text-gray-600">{animal.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form flex flex-col justify-center items-center bg-green-100 rounded-2xl shadow-lg ">

          <form className="flex flex-col gap-1 bg-green-200 p-10 rounded-2xl shadow-lg
           shadow-green-400 transform hover:scale-105 transition duration-500"
            onSubmit={handleSubmit(onSubmit)}>
                      <h3 className="text-center font-bold text-2xl">Connect with us</h3>
            <div>
              <label htmlFor="name">Name:</label>
              <br></br>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-success " required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br></br>
              <input
                 type="email"
                 {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
                placeholder="Your Email"
                className="input input-success " required
              />
              {errors.mail && <p role="alert">{errors.mail.message}</p>}
            </div>
            <div>
              <label htmlFor="number">Phone:</label>
              <br></br>
              <input
              placeholder="Your Phone Number"
                 {...register("phone", {
                  required: "Phone is required",
                  minLength: { value: 11, message: "Must be 11 digits" },
                  maxLength: { value: 11, message: "Must be 11 digits" },
                })}
                className="input input-success " required
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="details">details:</label>
              <br></br>
              <textarea
               
                placeholder="Please write your details"
                className="input input-success"
              />
              <br></br>

            </div>
            
                          <div className="my-3">
                <button className="btn btn-success">Submit</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default animalDetailsPage;
