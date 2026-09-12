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
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-3 sm:top-4 z-50 transition-all duration-700 px-3 sm:px-6 pointer-events-none"
    >
      <div className="mx-auto max-w-7xl pointer-events-auto">
        {/* Main Navbar Bar */}
        <div className="flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 bg-white/90 backdrop-blur-md border border-zinc-200/90 shadow-md relative rounded-2xl">
          <nav className="flex w-full items-center justify-between z-10">
            {/* Left Section: Identity & Comms */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              <a href="#home" className="flex items-center gap-2 group">
                <div className="relative w-8 h-8 rounded-lg border border-zinc-200 flex items-center justify-center overflow-hidden bg-[#d40000] shadow-sm group-hover:border-zinc-400 transition-all">
                  <img src="/img/sa-logo.jpg" alt="SA Logo" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10.5px] font-mono font-bold leading-none tracking-tight text-zinc-900">SAINATH</span>
                  <span className="text-[8px] font-mono text-zinc-400 leading-none mt-1 uppercase hidden sm:inline">FULL-STACK DEV</span>
                </div>
              </a>

              <div className="h-5 w-[1px] bg-zinc-200 hidden sm:block"></div>

              <a href="#contact" className="hidden sm:inline-block">
                <Button
                  id={"nav-btn"}
                  title="GET IN TOUCH"
                  rightIcon={<TiLocationArrow className="text-zinc-700" />}
                  containerClass="bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 font-mono text-[10px] text-zinc-800 px-3 py-1.5 transition-all rounded-lg"
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

            {/* Right Section: Audio & Mobile Menu Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-[11px] font-mono font-bold tracking-tight text-red-600">{currentTime}</span>
                <span className="text-[7.5px] font-mono text-zinc-400 uppercase tracking-widest">LOCAL TIME</span>
              </div>

              {/* Audio Signal Button */}
              <button
                onClick={toggleAudioIndicator}
                aria-label="Toggle background audio"
                className="flex items-center gap-1.5 sm:gap-2 group border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                <audio ref={audioElementRef} src="/audio/drumsofliberation.mp3" loop />
                <div className="hidden sm:flex flex-col items-end mr-0.5">
                  <span className="text-[7px] text-zinc-400 font-mono uppercase leading-none">AUDIO</span>
                  <span className={`text-[8.5px] font-mono font-bold leading-none mt-0.5 ${isIndicatorActive ? "text-emerald-600" : "text-zinc-500"}`}>
                    {isIndicatorActive ? "ON" : "OFF"}
                  </span>
                </div>
                <div className="flex items-end gap-[2px] h-3">
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

              {/* Mobile Hamburger Toggle Button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 border border-zinc-200 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                <div className={`h-[2px] w-4.5 bg-zinc-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></div>
                <div className={`h-[2px] w-4.5 bg-zinc-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></div>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Drawer (Framer Motion Animated) */}
        {isMenuOpen && (
          <div className="mt-2 w-full bg-white/95 backdrop-blur-2xl border border-zinc-200/90 shadow-2xl rounded-2xl p-4 md:hidden flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-zinc-100 text-[10px] font-mono text-zinc-400">
              <span className="uppercase tracking-widest">Navigation</span>
              <span className="text-zinc-500 font-bold">{currentTime}</span>
            </div>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLocaleLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider text-zinc-750 hover:text-zinc-950 hover:bg-zinc-100/80 transition-all"
              >
                <span>{item}</span>
                <span className="text-zinc-300 text-[11px]">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-white shadow-md transition-all"
              style={{ backgroundColor: "var(--theme-accent)" }}
            >
              <span>Get In Touch</span>
              <TiLocationArrow className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
