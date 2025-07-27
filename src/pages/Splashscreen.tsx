import { useEffect, useRef } from "react";

const InovactSplashScreen = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Start progress bar animation immediately
    if (progressRef.current) {
      progressRef.current.style.width = "0%";

      // Animate progress bar over 1.2 seconds
      setTimeout(() => {
        progressRef.current!.style.transition = "width 1.2s ease-out";
        progressRef.current!.style.width = "100%";
      }, 100);
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-blue-600 flex flex-col items-center justify-center px-4 sm:px-8">
      {/* App Name */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide ">
          Inovact
        </h1>
      </div>

      {/* Progress Bar Container */}
      <div className="w-48 sm:w-64 md:w-80 h-1 bg-blue-800 rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full bg-white rounded-full w-0" />
      </div>
    </div>
  );
};

export default InovactSplashScreen;
