import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import {useWindowScroll} from 'react-use';

const navItems = ["Home", "About", "Skills", "Projects", ];

const Navbar = () => {
  const [isAudioplaying, setIsAudioplaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioplaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioplaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioplaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/image.png" className="w-10 rounded-4xl" alt="pirate" />
            <Button
              id={"product-button"}
              title={"Contact "}
              rightIcon={<TiLocationArrow />}
              containerClass={
                "bg-blue-50 flex items-center justify-center gap-1 px-7 py-3"
              }
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
                <a
                  className="nav-hover-btn "
                  key={item}
                  href={`#${item.toLocaleLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/drumsofliberation.mp3"
                loop
              />
             
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line  ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                ></div>
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
