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
            <h2 className="text-2xl font-bold text-white mb-3">Upload to Sportify</h2>
            <form>
                <input type="text" placeholder="Title " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
                <input type="text" placeholder="Artist " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />

                <label htmlFor="audio" className="block py-2 text-secondary-text">Audio</label>
                <input id="audio" type="file" placeholder="Artist " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />
                <label htmlFor="cover" className="block py-2 text-secondary-text">Cover Image</label>
                <input id="cover" type="file" placeholder="Artist " className="outline-none border border-neutral-600 p-2 w-full rounded-md text-primary-text placeholder-neutral-600 mb-6 focus:text-secondary-text" />

                

                <button className=" w-full font-bold bg-primary text-black py-3 cursor-pointer rounded-full">Add Song</button>

                

            </form>
        </div>
    </div>
  )
}
