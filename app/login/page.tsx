// import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function Page  (){
  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
        <div className="bg-background flex flex-col items-center px-0 lg:px-12 py-6 rounded-md max-w-100 w-[90%]">
            <Image
            src="/logo.png"
            alt="image"
            width={500}
            height={500}
            className="h-11 w-11"/>
            <h2 className="text-2xl font-bold text-white mb-3">Log In To Sportify</h2>
            <form>
                <input type="text" placeholder="Your Email " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />

                <input type="text" placeholder="Your Password " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />

                <button className=" w-full font-bold bg-primary text-black py-3 cursor-pointer rounded-full">Continue</button>

                <div className="text-secondary-text text-center my-6">
                    <span >don't have an Account?</span>
                    <Link className="ml-2 text-white underline hover:text-primary" href="/signup"> Sign up Now</Link>
                </div>

            </form>
        </div>
    </div>
  )
}
