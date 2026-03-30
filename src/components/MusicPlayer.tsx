"use client"
import Image from "next/image"
import { useRef, useState } from "react";
import { IoMdPause, IoMdPlay, IoMdSkipBackward, IoMdSkipForward, IoMdVolumeHigh } from "react-icons/io"
import { LuRepeat1 } from "react-icons/lu"
import { MdOutlineQueueMusic } from "react-icons/md"



export default function MusicPlayer () {
    const audioRef = useRef<HTMLAudioElement | null> (null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(50);
    const [currentTime, setCurrentTime] = useState (0);
    const [duration, setDuration] = useState(); 
    

    const togglePlayBotton  = ()=> {
        if(!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();

        }else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    }
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-3 shadow-md z-50">

        <audio src="/audio/juice_WRLD.mp3" controls ref={audioRef}></audio>
        <div className="max-w-8xl gap-10 w-[90%] mx-auto flex items-center justify-between">
            <div className="flex gap-4 items-center">
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
            <div className="max-w-100 w-full flex items-center flex-col gap-3">
                <div className="flex gap-4">
                    <button className="text-xl text-secondary-text">
                        <IoMdSkipBackward/>
                    </button>
                    <button onClick={togglePlayBotton} className="cursor-pointer hover:bg-primary-text rounded-full p-3 hover:text-black transition-all duration-300">
                        
                        {isPlaying ? <IoMdPause/> : <IoMdPlay/>}
                    </button>
                    <button className="text-xl text-secondary-text">
                        <IoMdSkipForward/>
                    </button>

                </div>

            <div className="w-full flex justify-center items-center gap-2">
                <span className="text-secondary-text text-sm font-normal">
                    1:45
                </span>
                <div className="w-full" >
                    <input type="range" min="" className="w-full outline-0 h-1 bg-zinc-700 rounded-md  
                        
                    appearance-none accent-white" />

                </div>
                <span className="text-secondary-text text-sm font-normal" >
                    3:45
                </span>

            </div>

            

            </div>

            {/* volume control */}

            <div className="flex gap-2 items-center">
                <button>
                    <LuRepeat1/>
                    </button> 
                    <button className="text-secondary-text text-xl cursor-pointer"> 
                    <MdOutlineQueueMusic/>
                    </button>
                    <button className="text-secondary-text text-xl cursor-pointer">
                        <IoMdVolumeHigh/>
                    </button>
                    <input type="Range" min="0" max="100" className="w-[100px] outline-none h-1 bg-zinc-700 accent-white appearance-none" />
            </div>

        </div>

    </div>
  )
}
