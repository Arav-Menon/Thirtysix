import {useRef} from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";


function App() {
  const lenisRef = useRef(null);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      smooth: true,  // Enable smooth scrolling
      duration: 1.2, // Scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      direction: "vertical", // Could also be 'horizontal'
    });

    lenisRef.current = lenis;

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  //Animation
  const animateBox = useRef();

  return (
    <>
    <div className='bg-gradient-to-t from-red-500 to-pink-500 h-screen w-screen flex items-center justify-center ' >
      <button className='bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-r from-green-700 to-blue-700 text-white font-bold py-2 px-4 rounded-lg active:scale-y-50 transition-all duration-300 ease-in-out'>Add me</button>
    </div>
    
    </>
  )
}

export default App