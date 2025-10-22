import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isLight, setIsLight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    document.documentElement.classList.toggle("light", newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="container max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            &gt;_ Prathamesh Bhujade
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {["about", "skills", "projects", "journey", "education", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-accent/10 hover:rotate-180 transition-all duration-500"
          >
            {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
