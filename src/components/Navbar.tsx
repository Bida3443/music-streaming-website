import Image from "next/image";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { MdHomeFilled } from "react-icons/md";



export default function Navbar () {
    return(
        <nav className="h-15 flex justify-between items-center px-6 fixed top-0 left-0 w-full bg-black z-100">
      <div className="flex items-center justify-between gap-6">
        
        <div className="flex gap-6 items-center justify-center">
          <Image 
          src="/logo.png" 
          alt="logo image" 
          width={500} 
          height={500} 
          className="w-9 h-9"
          />
          <Link href="/" className="bg-background w-11 h-11 grid place-items-center text-white text-3xl rounded-full">
          <MdHomeFilled/>
          </Link>
        </div>
        <div className="bg-background lg:flex items-center h-11 w-90 px-3 gap-3 hidden text-primary-text rounded-full">
          <GoSearch className="text-primary-text shrink-0"/>
          <input type="text" className="h-full w-full outline-0 placeholder:text-primary-text" placeholder="what do you want to play" />
        </div>

      </div>
        <div className="flex items-center gap-8">
          <div className="lg:flex hidden gap-2 text-secondary-text font-bold border-r-2 border-primary-text p-2">
            <a href="#" className="hover:text-primary-text">Premium</a>
            <a href="#" className="hover:text-primary-text">Support</a>
            <a href="#" className="hover:text-primary-text">Download</a>
          </div>
          <div className="rounded-full h-11 text-gray-950 bg-primary-text font-bold hover:bg-secondary-text grid px-8 place-items-center">
            <Link href="/Login">Login</Link>
          </div>
        </div>
        
    </nav>
    )
}