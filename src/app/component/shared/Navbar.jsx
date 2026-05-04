// "use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import Logout from "./Logout";


const Navbar = async () => {
      const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log("session", session.user.name);
    return (

            <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
<Image 
  src="/navbarImg.jpg" 
  alt="QurbaniHat Logo"
  width={40}
  height={40}
  className='rounded-full border border-green-500'
/>
      <Link href="/" className="btn btn-ghost text-xl text-green-500 font-bold">QurbaniHat</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/" className='font-bold'>Home</Link></li>
        <li><Link href="/animals" className='font-bold'>All Animals</Link></li>
        <li><Link href="/profile" className='font-bold'>Profile</Link></li>
      </ul>
    </div>
    <div className="navbar-end">
      {!session ?(      <ul className="menu menu-horizontal px-1">
        <li><Link href="/login" className='font-bold hidden md:block'>Login</Link></li>
        <li><Link href="/register" className='font-bold hidden md:block'>Register</Link></li>
      </ul>):(      <ul className="flex gap-2 justify-center px-1">
        <Image src={session.user.image} width={30} height={35} className='rounded-full' alt={session.user.name}></Image>
        <li className='px-3 font-bold hidden md:block'>{session.user.name}</li>
          <Logout></Logout>
      </ul>)}

    </div>
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">

      <li>
        <ul>
        <li><Link href="/" className='font-bold'>Home</Link></li>
        <li><Link href="/animals" className='font-bold'>All Animals</Link></li>
        <li><Link href="/profile" className='font-bold'>Profile</Link></li>
                <li><Link href="/login" className='font-bold'>Login</Link></li>
        <li><Link href="/register" className='font-bold'>Register</Link></li>

        </ul>
      </li>

    </ul>
  </div>
</div>

    );
};

export default Navbar;
