

  export default function Footer() {
    return (
      <section 
      id="footer" 
      className="flex flex-col justify-center  snap-start h-[20%] w-full relative bg-slate-800  ">
        <div className=" items-center text-right  ">
            <a href="mailto:sophiamantegari@gmail.com" 
            className="p-8  text-white font-medium uppercase text-base hover:underline" 
            style={{ fontFamily: 'Lora, san-serif' }}>
                sophiamantegari@gmail.com</a>
        </div>
      </section>
    );
  }