import StarrySky from "@/components/BgStars";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/Home'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <StarrySky />
      <Navbar />
      <HomePage />
    </main>
  );
}