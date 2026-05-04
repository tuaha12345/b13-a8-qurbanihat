"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form"
  import { ToastContainer, toast } from 'react-toastify';
  import Link from "next/link";
  import { FaGoogle } from "react-icons/fa6";


const Page = () => {
    const router = useRouter();
    const [isOpen, setOpen] = React.useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit= async(RegData)=>{
        // const {name,email,password,photoUrl}=RegData
            const { data, error } = await authClient.signUp.email({
    name: RegData.name, // required
    email: RegData.email, // required
    password: RegData.password,
    image: RegData.photoURL,
});
if (error) {
    console.error(error);
    toast.error(error.message)
} else {
    console.log(data);
    
    // Logout after registration
    await authClient.signOut();
    
    toast.success("Registration successful! Please login");
     router.push("/login"); 
}
    }
            const LoginWithGoogle= async()=>{

                const { data, error } = await authClient.signIn.social({
                    provider: "google",
                    callbackURL: "/",
                });
                if (error) {
                    console.error(error);
                    toast.error(error.message)
                } else {
                    console.log(data);
                    toast.success("SignIn successful")
                }
            }

  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center bg-green-100 py-14 px-6 md:px-1">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Create Your Account
          </h2>

          <form className="space-y-4 relative" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("name",{required:"Name is required"})}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email",{required:"Email is required"})}
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                {...register("photoURL",{required:"Photo is required"})}
                placeholder="Paste your photo link"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              {/* <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              /> */}
                        <input type={isOpen ?"text":"password" } className="input w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Password" {...register("password",{required:"Password is required"})} />
           {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                     <span className="absolute bottom-30.5 right-8" onClick={()=>setOpen(!isOpen)}>
                       {isOpen ?<FaRegEyeSlash /> : <FaRegEye />}
                     </span>
            </div>
                        <div className="flex justify-center">
                          <button type="button" className="btn border-green-500 text-green-500  bg-white" onClick={LoginWithGoogle}>
                            <FaGoogle />
                            Login With Google
                          </button>
                        </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?
            <span className="text-green-500 font-semibold cursor-pointer ml-1">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
