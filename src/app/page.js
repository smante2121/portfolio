"use client";
import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      if (container) {
        setShowArrow(container.scrollTop > window.innerHeight * 0.8);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      >
        <section className="snap-start">
          <HeroSection />
        </section>
        <section id="about" className="snap-start">
          <AboutSection />
        </section>
        <section id="projects" className="snap-start">
          <ProjectsSection />
        </section>
      </div>
      <BackToTopButton show={showArrow} scrollToTop={scrollToTop} />
    </>
  );
}
