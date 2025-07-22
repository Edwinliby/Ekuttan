import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/Home'

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      <div className="bg-gradient-to-b from-[#65E8FF] to-[#ffffff] absolute left-0 top-0 w-full h-full -z-10" />
      <img src="/cloud.svg" alt="cloud" className="absolute left-0 md:left-[30%] top-[40%] w-[15rem] h-[8rem] -z-10" />
      <img src="/cloud.svg" alt="cloud" className="absolute -right-[25%] md:right-[15%] top-[10%] w-[15rem] h-[8rem] -z-10" />
      <img src="/cloud.svg" alt="cloud" className="absolute left-[5%] bottom-[10%] w-[15rem] h-[8rem] -z-10" />
      <img src="/cloud.svg" alt="cloud" className="absolute -left-[30%] md:-left-[5%] top-[8%] w-[15rem] h-[8rem] -z-10" />
      <img src="/cloud.svg" alt="cloud" className="absolute -right-[3%] bottom-[4rem] w-[15rem] h-[8rem] -z-10" />
      <Particles
        className="fixed inset-0 -z-10 h-screen"
        quantity={400}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Navbar />
      <HomePage />
    </main>
  );
}