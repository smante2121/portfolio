
import picture from '../../public/me.jpeg';
import Image from 'next/image';
import AboutLine from './AboutLine';


  export default function AboutSection() {
    return (
      <section
        id="about" className=" snap-start h-screen flex flex-col relative">
          <AboutLine/>
          <h2 className="align-top text-left uppercase text-5xl font-bold ps-20 pt-20 text-white" 
          style={{ fontFamily: 'Playfair Display, serif' }} >
          About Me
          </h2>
          <div className="mt-10 ps-20 w-[90vw] flex gap-10 items-center">
            <div className="w-[30%] flex flex-col items-center gap-4">
              <Image src={picture}  alt="My Profile" className="w-64 h-64  object-cover items-start border border-white" />
                        <a href="#about" 
                        className="border border-white hover:bg-sky-900 text-white font-medium px-12 py-2 rounded" 
                        style={{ fontFamily: 'Playfair Display, serif' }}> 
                        Resume
                        </a>
                        <a href="https://github.com/smante2121" target="_blank" rel="noopener noreferrer">
                          <button className="hover:bg-sky-900 flex items-center gap-2 px-4 py-2 text-white rounded">
                            <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
                          </button>
                        </a>
                        <a href="www.linkedin.com/in/sophia-mantegari-152302236" target="_blank" rel="noopener noreferrer">
                          <button className="hover:bg-sky-900 flex items-center gap-2 px-4 py-2 text-white rounded">
                            <img src="/icons/linkedin.svg" alt="linkedin" className="w-10 h-10" />
                          </button>
                        </a>
            </div>
          </div>
      </section>
    );
  }