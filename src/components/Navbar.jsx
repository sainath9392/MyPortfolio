import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const navItems = ["Home", "About", "Skills", "Experience", "Projects"];

const Navbar = () => {
  const [isAudioplaying, setIsAudioplaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  // Tactical Clock Update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioplaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioplaying) {
      audioElementRef.current.play().catch(() => {
        // Handle potential autoplay block
        setIsAudioplaying(false);
        setIsIndicatorActive(false);
      });
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioplaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 transition-all duration-700 sm:inset-x-6"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 bg-white/85 backdrop-blur-md border border-zinc-200/80 shadow-md relative overflow-hidden group rounded-xl">
        <nav className="flex w-full items-center justify-between z-10">
          {/* Left Section: Identity & Comms */}
          <div className="flex items-center gap-3 md:gap-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center overflow-hidden bg-[#d40000] shadow-sm group-hover:border-zinc-400 transition-all">
                <img src="/img/sa-logo.jpg" alt="SA Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[10px] font-mono font-bold leading-none tracking-tight text-zinc-900">SAINATH_v1.0</span>
                <span className="text-[8px] font-mono text-zinc-400 leading-none mt-1 uppercase">SYNC_CONNECTED</span>
              </div>
            </a>

            <div className="h-6 w-[1px] bg-zinc-200 hidden md:block"></div>

            <a href="#contact">
              <Button
                id={"nav-btn"}
                title={isMenuOpen ? "CLOSE" : "INIT"}
                rightIcon={<TiLocationArrow className="hidden md:block text-zinc-700" />}
                containerClass="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 font-mono text-[9px] md:text-[10px] text-zinc-800 px-3 md:px-4 py-1.5 md:py-2 transition-all rounded-lg"
              />
            </a>
          </div>

          {/* Middle Section: Nav Links (Desktop Only) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLocaleLowerCase()}`}
                className="relative px-3 py-2 text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-[0.15em] hover:text-zinc-950 transition-colors group"
              >
                <span>{item}</span>
                <div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-full transition-all duration-300" 
                  style={{ backgroundColor: 'var(--theme-accent)' }}
                ></div>
              </a>
            ))}
          </div>

          {/* Right Section: Time, Menu & Audio */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[11px] font-mono font-bold tracking-tight text-red-600">{currentTime}</span>
              <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">TIMESTAMP</span>
            </div>

            {/* Mobile Shortcuts */}
            <div className="md:hidden flex items-center gap-2">
              <a href="#skills" className="text-[9px] font-mono font-bold text-zinc-700 border border-zinc-200 bg-zinc-100 px-2 py-1 rounded-md">SKILLS</a>
              <a href="#experience" className="text-[9px] font-mono font-bold text-zinc-700 border border-zinc-200 bg-zinc-100 px-2 py-1 rounded-md">EXP</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 border border-zinc-200 bg-zinc-100 rounded-lg"
            >
              <div className={`h-[1.5px] w-4 bg-zinc-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></div>
              <div className={`h-[1.5px] w-4 bg-zinc-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></div>
            </button>

            {/* Audio Signal */}
            <button
              onClick={toggleAudioIndicator}
              className="flex items-center gap-2 group border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg transition-all cursor-pointer"
            >
              <audio ref={audioElementRef} src="/audio/drumsofliberation.mp3" loop />
              <div className="hidden md:flex flex-col items-end mr-1">
                <span className="text-[7px] text-zinc-400 font-mono uppercase leading-none">SIGNAL</span>
                <span className={`text-[9px] font-mono font-bold leading-none mt-0.5 ${isIndicatorActive ? "text-emerald-600" : "text-zinc-500"}`}>
                  {isIndicatorActive ? "ON" : "OFF"}
                </span>
              </div>
              <div className="flex items-end gap-[2px] h-3.5">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <div
                    key={bar}
                    className={`w-[2px] rounded-full transition-all duration-300 ${isIndicatorActive ? "animate-audio-bar bg-red-600" : "h-[2px] bg-zinc-300"}`}
                    style={{ 
                      height: isIndicatorActive ? `${Math.random() * 100}%` : '2px',
                      animationDelay: `${bar * 0.1}s`
                    }}
                  ></div>
                ))}
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer Overlay */}
        <div 
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-zinc-200 shadow-xl transition-all duration-500 ease-in-out z-40 ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          <div className="p-6 flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLocaleLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between text-xs font-mono font-bold tracking-widest text-zinc-700 hover:text-zinc-950 transition-all group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{item}</span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[8px] text-zinc-400">CONNECTING...</span>
                  <TiLocationArrow className="text-red-600" />
                </div>
              </a>
            ))}
            <div className="mt-2 pt-3 border-t border-zinc-200 flex justify-between items-center text-zinc-400">
              <span className="text-[8px] font-mono uppercase tracking-[0.2em]">Sainath // System Identity Matrix</span>
              <span className="text-[8px] font-mono">{currentTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
