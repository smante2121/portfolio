import picture from "../../public/me.jpeg";
import Image from "next/image";
import AboutLine from "./AboutLine";

export default function AboutSection() {
  return (
    <section id="about" className=" snap-start h-screen flex flex-col relative ">
      <AboutLine />
      <h2
        className="align-top text-left uppercase text-4xl lg:text-5xl font-bold ps-10 sm:ps-10 md:ps-15 lg:ps-20 pt-21  text-white md:text-4xl sm:text-3xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        About Me
      </h2>

      <div className="sm:mt-10 mt-8 w-full px-2 sm:px-10 md:px-12 lg:px-14 flex gap-0 sm:gap-3">
        <div className=" basis-2/5 sm:basis-1/4  flex flex-col items-center  gap-3 sm:gap-3 pt-5 sm:pt-10 px-1 sm:px-2 md:px-4 lg:px-8">
        {/* use aspect-ratio aspect-1/2 for photo */}
          <div className="w-[90%] lg:w-[99%] p-1  md:border-white shadow-xl shadow-slate-900 md:border ">
            <Image
              src={picture}
              alt="My Profile"
              className="  h-auto  object-cover items-start  border-1 md:border-2 border-white drop-shadow-2xl "
            />
          </div>
          <div className="mt-6 drop-shadow-lg drop-shadow-slate-900">
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                href="#projects"
                className="relative inline-block font-medium group py-1.25 px-6 lg:py-2 lg:px-10 cursor-pointer "
              >
                <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 md:translate-x-1.5 md:translate-y-1.5 translate-y-1 bg-[#345167] group-hover:-translate-x-0 group-hover:-translate-y-0 shadow-xl shadow-slate-900"></span>
                <span className="absolute  inset-0 w-full h-full bg-[#0b263e] border border-white group-hover:bg-sky-900"></span>
                <span
                  className="relative text-white sm:text-lg text-base"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Resume
                </span>
              </button>
            </a>
          </div>
          <div className="flex pt-3 ">
            <a
              href="https://github.com/smante2121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:bg-sky-900 flex items-center gap-2 px-2 py-4 text-white rounded ">
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="lg:w-10   w-8 "
                />
              </button>
            </a>
            <a
              href="www.linkedin.com/in/sophia-mantegari-152302236"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:bg-sky-900 flex items-center gap-2 sm:gap-2 px-2  py-4 text-white rounded">
                <img
                  src="/icons/linkedin.svg"
                  alt="linkedin"
                  className="lg:w-10  w-8"
                />
              </button>
            </a>
          </div>
        </div>
        <div className="collapse sm:visible w-px h-[100%] bg-white opacity-60 flex-shrink-0 "> </div>
        <div className="basis-3/5 sm:basis-3/4 text-white pe-1 sm:pe-6 flex items-start sm:items-center pt-5 sm:pt-0 sm:ps-3 ps-0.5">
          <p
            className="text-base md:text-lg leading-relaxed "
            style={{ fontFamily: "Work Sans, sans-serif" }}
          >
            Hello, my name is Sophia Mantegari. I am a student at the University
            of Miami, double majoring in Computer Science and Data Science &
            Artificial Intelligence, with an minor in Mathematics. Set to
            graduate in December 2025, I combine my technical studies with
            hands-on software development experience. I'm constantly seeking
            opportunities to expand my skills and tackle new challenges in the
            field.
          </p>
        </div>
      </div>

    </section>
  );
}
