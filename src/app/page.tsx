'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const carContainerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
      );

      if (statsRef.current) {
        const statItems = statsRef.current.children;
        tl.fromTo(statItems, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
          "-=0.6"
        );
      }

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, 
        }
      });

      scrollTl.fromTo(carContainerRef.current,
        { x: '-20vw' },
        { x: '100vw', ease: 'none' },
        0 
      );

      scrollTl.fromTo(trailRef.current,
        { width: '0vw', left: '-20vw' },
        { width: '120vw', left: '-20vw', ease: 'none' },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative w-full h-[300vh] bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-emerald-500/30">
      
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] bg-gradient-to-b from-neutral-900 to-[#0a0a0a]">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center mt-[-10vh]">
          
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[0.2em] md:tracking-[0.4em] lg:tracking-[0.5em] mb-12 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 leading-tight"
          >
            Welcome Itz Fizz
          </h1>
          
          <div ref={statsRef} className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 md:gap-24">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-emerald-400 mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">98%</span>
              <span className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em] font-medium">Efficiency</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-emerald-400 mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">15k+</span>
              <span className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em] font-medium">Global Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-emerald-400 mb-2 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">0.1s</span>
              <span className="text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em] font-medium">Avg Latency</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 md:bottom-40 w-full flex justify-center z-0 opacity-50">
           <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        </div>

        <div 
          ref={trailRef}
          className="absolute bottom-[calc(8rem+10px)] md:bottom-[calc(10rem+10px)] h-[2px] bg-emerald-400/80 shadow-[0_0_10px_#34d399] z-10"
        />

        <div 
          ref={carContainerRef} 
          className="absolute bottom-32 md:bottom-40 left-0 w-48 md:w-64 xl:w-80 z-20 pointer-events-none transform -translate-x-full"
        >
          <svg viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <path d="M 80,200 L 150,130 C 220,90 320,80 430,80 C 530,80 620,110 680,140 L 750,170 C 770,180 780,195 780,210 L 780,225 C 780,230 770,230 760,230 L 40,230 C 30,230 20,220 20,210 C 20,205 30,200 80,200 Z" fill="url(#carBodyGradient)"/>
            
            <path d="M 270,120 C 320,95 390,90 460,90 C 510,90 560,105 590,130 L 410,130 Z" fill="#050505"/>
            <path d="M 275,125 C 320,105 385,100 455,100 C 500,100 545,110 575,125 L 410,125 Z" fill="#111" opacity="0.6"/>
            
            <path d="M 460,95 C 480,95 520,100 550,110 L 460,110 Z" fill="#ffffff" opacity="0.1"/>

            <path d="M 50,180 L 120,150 L 130,155 L 60,185 Z" fill="#222"/>
            <path d="M 30,175 C 50,175 90,170 120,170 L 120,175 C 90,175 50,180 30,180 Z" fill="#111"/>

            <circle cx="210" cy="230" r="45" fill="#111" stroke="#34d399" strokeWidth="3"/>
            <circle cx="610" cy="230" r="45" fill="#111" stroke="#34d399" strokeWidth="3"/>
            
            <circle cx="210" cy="230" r="25" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
            <circle cx="610" cy="230" r="25" fill="#2a2a2a" stroke="#444" strokeWidth="2"/>
            
            <path d="M 210,185 L 210,275 M 165,230 L 255,230 M 180,200 L 240,260 M 180,260 L 240,200" stroke="#555" strokeWidth="3" />
            <path d="M 610,185 L 610,275 M 565,230 L 655,230 M 580,200 L 640,260 M 580,260 L 640,200" stroke="#555" strokeWidth="3" />

            <path d="M 740,185 L 770,185 L 760,195 L 735,195 Z" fill="#ffffff" className="drop-shadow-[0_0_12px_#ffffff]"/>
            <path d="M 770,185 C 830,185 920,200 980,220 L 770,220 Z" fill="url(#headlightBeam)" opacity="0.5"/>

            <path d="M 30,200 L 60,200 L 50,210 L 20,210 Z" fill="#ef4444" className="drop-shadow-[0_0_10px_#ef4444]"/>
            <path d="M 30,205 L -50,205 L -50,215 L 20,215 Z" fill="url(#taillightBeam)" opacity="0.4"/>

            <path d="M 350,190 C 400,190 450,170 450,170 L 370,210 Z" fill="#111" opacity="0.7"/>

            <defs>
              <linearGradient id="carBodyGradient" x1="20" y1="80" x2="780" y2="230" gradientUnits="userSpaceOnUse">
                <stop stopColor="#333333" />
                <stop offset="0.5" stopColor="#1a1a1a" />
                <stop offset="1" stopColor="#050505" />
              </linearGradient>
              <linearGradient id="headlightBeam" x1="770" y1="200" x2="980" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="1" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="taillightBeam" x1="30" y1="210" x2="-50" y2="210" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ef4444" stopOpacity="1" />
                <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
      
      <div className="absolute bottom-0 w-full h-[100vh] flex flex-col items-center justify-center text-neutral-500 pointer-events-none">
         <p className="text-xl tracking-widest uppercase opacity-30 mt-auto mb-20">End of track</p>
      </div>

    </main>
  );
}
