
import picture from '../../public/me.jpeg';
import Image from 'next/image';
import AboutLine from './AboutLine';


  export default function AboutSection() {
    return (
      <section
        id="about" className=" snap-start h-screen flex flex-col relative">
          <AboutLine/>
          <h2 className="align-top text-left uppercase text-5xl font-bold ps-20 pt-20 text-white " 
          style={{ fontFamily: 'Playfair Display, serif' }} >
          About Me
          </h2>
          <div className="mt-10 ps-20 w-[90vw] flex gap-10 items-center">
            <div className="flex-[30%] flex flex-col items-center gap-4">
              <div className="p-1 border-1 border-white shadow-xl shadow-slate-900">
              <Image src={picture}  alt="My Profile" className="w-64 h-64  object-cover items-start border-2 border-white drop-shadow-2xl " />
              </div>
              <div className='mt-6 drop-shadow-lg drop-shadow-slate-900'>
                <a href="/documents/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button href="#projects" className="relative inline-block font-medium group py-2 px-10 cursor-pointer ">
                    <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1.5 translate-y-1.5 bg-[#345167] group-hover:-translate-x-0 group-hover:-translate-y-0 shadow-xl shadow-slate-900"></span>
                    <span className="absolute  inset-0 w-full h-full bg-[#0b263e] border border-white group-hover:bg-sky-900"></span>
                    <span className="relative text-white text-lg" 
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                      Resume
                    </span> 
                  </button>  
                </a>
              </div>
                <div className="flex pt-3 ">
                  <a href="https://github.com/smante2121" target="_blank" rel="noopener noreferrer">
                    <button className="hover:bg-sky-900 flex items-center gap-2 px-3 py-4 text-white rounded ">
                      <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
                    </button>
                  </a>
                  <a href="www.linkedin.com/in/sophia-mantegari-152302236" target="_blank" rel="noopener noreferrer">
                    <button className="hover:bg-sky-900 flex items-center gap-2 px-3 py-4 text-white rounded">
                      <img src="/icons/linkedin.svg" alt="linkedin" className="w-10 h-10" />
                    </button>
                  </a>
              </div>
            </div>
           <div className="w-px h-[80%] bg-white opacity-60 flex-shrink-0"> </div>
            <div className="flex-[70%] text-white">
              <p className="text-lg leading-relaxed" style={{ fontFamily: "Work Sans, sans-serif"  }}>
                Hello, my name is Sophia Mantegari. I am a student at the University of Miami, double majoring in Computer Science and Data Science & Artificial Intelligence, with an minor in Mathematics. Set to graduate in December 2025, I combine my technical studies with hands-on software development experience. I'm constantly seeking opportunities to expand my skills and tackle new challenges in the field.
              </p>
            </div>
            
            </div>


      </section>
    );
  }