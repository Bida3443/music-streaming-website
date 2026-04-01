
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";

import Allsongs from "@/src/components/Allsongs";

import MusicPlayer from "@/src/components/MusicPlayer";
import Queue from "@/src/components/Queue";

import FrontendLayout from "@/layouts/FrontendLayout";



export default function Home() {
  return (
  <FrontendLayout>

    <div className="min-h-screen">
    
      <Allsongs/>
    
  </div>
  </FrontendLayout>
  )
};
