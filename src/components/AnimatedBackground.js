// components/AnimatedBackground.js
export default function AnimatedBackground({ children }) {
    return (
      <div className="animated-bg text-white h-screen w-full flex items-center justify-center flex-col text-center">
        {children}
      </div>
    );
  }
  