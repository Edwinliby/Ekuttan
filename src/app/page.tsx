import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/Home'

export default function Home() {
  return (
    <main className="w-full h-full md:h-screen">
      <Particles
        className="fixed inset-0 -z-10 h-screen"
        quantity={300}
        ease={80}
        color={"#C9C9C9"}
        refresh
      />
      <Navbar />
      <HomePage />
    </main>
  );
}