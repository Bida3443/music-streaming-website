
import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import Allsongs from "@/src/components/Allsongs";





export default function Home() {
  return <div className="min-h-screen">
    <Navbar/>
    <main>
      <Sidebar/>
      <Allsongs/>
    </main>
  </div>
};
