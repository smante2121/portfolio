"use client";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BackToTopButton from "@/components/BackToTopButton";
import Navbar from "@/components/Navbar";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const [showArrow, setShowArrow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const scrollEl = containerRef.current;
    const handleScroll = () => {
      if (!scrollEl) return;
      setShowArrow(scrollEl.scrollTop > window.innerHeight * 0.8);
    };

    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollEl) scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect if Hero is out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth bg-sky-950"
    >
      <Navbar show={showNavbar} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <BackToTopButton show={showArrow} scrollToTop={() => containerRef.current?.scrollTo({ top: 0, behavior: "smooth" })} />
    </div>
  );
}
