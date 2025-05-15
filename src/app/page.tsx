import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/Home'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={300}
        ease={80}
        color={"#B7B7B7"}
        refresh
      />
      <Navbar />
      <HomePage />
    </main>
  );
}