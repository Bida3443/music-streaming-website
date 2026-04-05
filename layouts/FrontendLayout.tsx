"use client"

import React, { useState } from "react";

import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
// import Allsongs from "@/src/components/Allsongs";
import MusicPlayer from "@/src/components/MusicPlayer";
import Queue from "@/src/components/Queue";
import { createContext } from "react";


type PlayerContextType = {
    isQueueModalOpen:boolean;
    setQueueModalOpen:React.Dispatch<React.SetStateAction<boolean>>
}
 
export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);


export default function FrontendLayout({
    
  children,
}: Readonly<{ children: React.ReactNode }>) {

    const [isQueueModalOpen, setQueueModalOpen] = useState(false);
  return (
    <PlayerContext.Provider value= {{
        isQueueModalOpen,
        setQueueModalOpen
    }
 
    }>
<div className="min-h-screen">
      <Navbar />
      <main>
        <Sidebar />
        <Queue />
        <MusicPlayer />
        {children}
      </main>
    </div>

    </PlayerContext.Provider>
  );
}
