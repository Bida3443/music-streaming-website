// import React from 'react'
"use client";
import signUpUser from "@/lib/auth/signUpUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Page() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e : React.FormEvent) => {

    e.preventDefault();  


    if (!name.trim() || !email.trim () || !Password.trim()) {
      setMessage("All fileds are required");
      return;
    }
const result = await signUpUser (name,email,Password);
 
if(result?.error){
  setMessage(result.error);
}else{
  setMessage("Signup succeeful");
  setTimeout(() => {
    router.push("/");
  }, 3000);

  }

  } 


  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex flex-col items-center px-0 lg:px-12 py-6 rounded-md max-w-100 w-[90%]">
        <Image
          src="/logo.png"
          alt="image"
          width={500}
          height={500}
          className="h-11 w-11"
        />
        <h2 className="text-2xl font-bold text-white mb-3">
          Sign up to Sportify
        </h2>  
        <form onSubmit={handleSignup} >

          {message && <p className="bg-primary font-semibold text-center mb-4 py-1">{message}</p>}
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Your Name"
            className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Your Email "
            className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            type="text" 
            placeholder="Your Password "
            className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" 
          />
     
          <button className=" w-full font-bold bg-primary text-black py-3 cursor-pointer rounded-full">
            Continue
          </button>

          <div className="text-secondary-text text-center my-6">
            <span>Already have an Account?</span>
            <Link
              className="ml-2 text-white underline hover:text-primary"
              href="/login"
            >
              {" "}
              Sign in Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
