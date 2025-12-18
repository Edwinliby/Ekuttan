"use client";

import { Particles } from "@/components/magicui/particles";
import Navbar from "@/components/Navbar";
import HomePage from '@/components/Home'
import CloudLayer from "@/components/CloudLayer";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Small timeout to ensure transition is smooth and not flickering if load is instant
      setTimeout(() => setIsLoading(false), 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <main className="w-full min-h-screen relative overflow-x-hidden">
          <CloudLayer src="/cloud-transparent-1.png" speed={1.2} depth={20} className="fixed left-0 md:left-[25%] top-[35%] w-[22rem] h-[14rem] -z-10" />
          <CloudLayer src="/cloud-transparent-2.png" speed={0.8} depth={10} className="fixed -right-[15%] md:right-[10%] top-[10%] w-[25rem] h-[16rem] -z-10" />
          <CloudLayer src="/cloud-transparent-1.png" speed={1.5} depth={30} className="fixed left-[5%] bottom-[5%] w-[18rem] h-[10rem] -z-10" />
          <CloudLayer src="/cloud-transparent-2.png" speed={1.0} depth={15} className="fixed -left-[20%] md:-left-[5%] top-[5%] w-[20rem] h-[12rem] -z-10" />
          <CloudLayer src="/cloud-transparent-1.png" speed={0.9} depth={25} className="fixed -right-[5%] bottom-[4rem] w-[24rem] h-[16rem] -z-10" />
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
      )}
    </>
  );
}