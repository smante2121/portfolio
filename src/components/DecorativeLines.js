export default function DecorativeLines() {
    return (
        <>
            <div className="absolute top-15 right-7 w-[2px] h-[110px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.7)]"></div>
            <div className="absolute top-15 right-7 h-[2px] w-[65vw] bg-white shadow-2xl shadow-slate-900"></div>
            <div className="absolute bottom-15 left-7 w-[2px] h-[110px] bg-white shadow-2xl shadow-slate-900"></div>
            <div className="absolute bottom-15 left-7 h-[2px] w-[65vw] bg-white shadow-2xl shadow-slate-900"></div>
        </>
    );
}