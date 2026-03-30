
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Allsongs from "@/src/components/Allsongs";
import MusicPlayer from "@/src/components/MusicPlayer";



export default function Home() {
  return <div className="min-h-screen">
    <Navbar/>
    <main>
      <Sidebar/>
      <MusicPlayer/>
      <Allsongs/>
    </main>
  </div>
};
