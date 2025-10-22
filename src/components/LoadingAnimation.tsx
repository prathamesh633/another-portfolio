import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onComplete?: () => void;
  duration?: number;
}

const LoadingAnimation = ({ onComplete, duration = 3000 }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }, 300);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated brackets */}
        <div className="relative flex items-center gap-4">
          <span className="text-6xl font-mono text-code-cyan animate-bracket-pulse">
            {"<"}
          </span>
          
          {/* Center rotating circle */}
          <div className="relative">
            <div className="h-20 w-20 rounded-full border-4 border-muted" />
            <div
              className="absolute inset-0 h-20 w-20 rounded-full border-4 border-transparent border-t-primary animate-spin-slow"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${progress}%, 0 ${progress}%)`,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-code-cyan to-secondary animate-pulse-glow" />
            </div>
          </div>

          <span className="text-6xl font-mono text-code-cyan animate-bracket-pulse" style={{ animationDelay: "0.75s" }}>
            {"/>"}
          </span>
        </div>

        {/* Loading text and progress */}
        <div className="flex flex-col items-center gap-2 animate-fade-in">
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <span className="text-primary">$</span>
            <span>initializing</span>
            <span className="animate-pulse">...</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono">{progress}%</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-code-cyan via-secondary to-code-purple transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
