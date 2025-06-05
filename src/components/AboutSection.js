export default function AboutSection() {
    return (
      <section
        id="about"
        className="min-h-screen w-full text-white flex flex-col snap-start items-center justify-center"
      >
        <h2 className="uppercase text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }} >About Me</h2>
        <p className="max-w-xl text-center text-lg text-slate-400 px-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          This is a placeholder for the About Me section.
        </p>
      </section>
    );
  }
  