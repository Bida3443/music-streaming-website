
"use client"
import Link from "next/link";
import { LuPlus } from "react-icons/lu";
import Image from "next/image";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { useState } from "react";



 export default function Sidebar() {

    
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <aside className={`fixed left-2  top-15 bg-background w-75 rounded-lg h-[90vh] p-2 overflow-y-auto ${isOpen ?"translate-x-0" : "-translate-x-full"} `} >
            <div className="flex justify-between text-primary-text items-center p-2 mb-4 ">
                <h2 className="font-bold">You Library</h2>
                <Link href="upload-song">
                <LuPlus size="20"/>
                </Link>
            </div>
            <div>
                <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                    <Image 
                    src="/cover-1.jpeg"
                    alt= "cover-image"
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded-md"
                     />
                     <div>
                        <p className="text-primary-text font-semibold">Midnigth Echoes</p>
                        <p className="text-secondary-text text-sm">By Neon Skyline</p>
                     </div>

                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                    <Image 
                    src="/cover-1.jpeg"
                    alt= "cover-image"
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded-md"
                     />
                     <div>
                        <p className="text-primary-text font-semibold">Midnigth Echoes</p>
                        <p className="text-secondary-text text-sm">By Neon Skyline</p>
                     </div>

                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                    <Image 
                    src="/cover-1.jpeg"
                    alt= "cover-image"
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded-md"
                     />
                     <div>
                        <p className="text-primary-text font-semibold">Midnigth Echoes</p>
                        <p className="text-secondary-text text-sm">By Neon Skyline</p>
                     </div>

                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                    <Image 
                    src="/cover-1.jpeg"
                    alt= "cover-image"
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded-md"
                     />
                     <div>
                        <p className="text-primary-text font-semibold">Midnigth Echoes</p>
                        <p className="text-secondary-text text-sm">By Neon Skyline</p>
                     </div>

                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center cursor-pointer mb-4 p-2 rounded-lg hover:bg-hover">
                    <Image 
                    src="/cover-1.jpeg"
                    alt= "cover-image"
                    width={300}
                    height={300}
                    className="w-10 h-10 object-cover rounded-md"
                     />
                     <div>
                        <p className="text-primary-text font-semibold">Midnigth Echoes</p>
                        <p className="text-secondary-text text-sm">By Neon Skyline</p>
                     </div>

                </div>
            </div>
            
        </aside>

        <button 
        onClick={() => setIsOpen(!isOpen)}
        
        className="fixed bottom-5 bg-background w-12 h-12 grid place-items-center text-white rounded-full z-50 cursor-pointer left-5 lg:hidden">
            <MdOutlineLibraryMusic/>
        </button>
    </div>
  )
}

 