// import React from 'react'
import Image from "next/image"

export  default function  Allsongs(){
  return (

    <div className="min-h-[90vh] lg:ml-80  rounded-lg mx-4 bg-background my-15 p-4">
        <h2 className="text-2xl text-white font-semibold mb-3">New Songs</h2>
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">  

        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-2.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>

        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-3.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-4.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-5.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-6.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>
        <div className="bg-background p-3 cursor-pointer rounded-md hover:bg-hover">
            <Image src= "/cover-7.jpeg" 
            alt="cover-image" 
            width={500} 
            height={500} className="w-full h-50 object-cover rouunded-md"/>
            <div className="mt-2">
                <p className="text-primary-text font-semibold">Rain on Marble Streets </p>
            <p className="text-secondary-text text-sm">By The Lanterns</p>
            </div>
        </div>

        
        </div>
        
    </div>
  )
}
