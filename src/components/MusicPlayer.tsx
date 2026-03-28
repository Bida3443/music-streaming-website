
import Image from "next/image"
import { IoMdPlay, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io"
export default function MusicPlayer () {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 shadow-md z-50">
        <div className="max-w-8xl w-[90%] mx-auto flex items-center justify-center">
            <div className="flex gap-4 items-center ">
                <Image 
                src="/cover-2.jpeg" 
                alt="image" 
                width={500} 
                height={500} className="w-13 h-13 object-cover rounded-md"/>
                <div className="text-sm">
                    <p className="text-white">Bicycle</p>
                    <p className="text-secondary-text font-normal">Emmanuel</p>
                </div>

            </div>
            {/* Song Controls */}
            <div className="max-w-[400px] w-full flex items-center flex-col gap-3">
                <div className="flex gap-4">
                    <button className="">
                        <IoMdSkipBackward/>
                    </button>
                    <button className="cursor-pointer hover:bg-primary-text rounded-full p-3 hover:text-black transition-all duration-300">
                        <IoMdPlay/>
                    </button>
                    <button>
                        <IoMdSkipForward/>
                    </button>

                </div>

            </div>
        </div>

    </div>
  )
}
