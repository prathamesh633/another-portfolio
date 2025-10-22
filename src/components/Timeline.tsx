import { useEffect, useRef } from "react";

interface TimelineItem {
  title: string;
  location?: string;
  date: string;
  description: string;
  side: "left" | "right";
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              item.classList.add("opacity-100", "translate-x-0", "translate-y-0");
              item.classList.remove("opacity-0", "-translate-x-12", "translate-x-12", "translate-y-4");
            }, index * 150);
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(item);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`relative flex items-center ${
              item.side === "right" ? "justify-start" : "justify-end"
            } opacity-0 transition-all duration-700 ${
              item.side === "right" ? "-translate-x-12" : "translate-x-12"
            } translate-y-4`}
          >
            <div
              className={`w-5/12 ${
                item.side === "right" ? "ml-auto pl-8" : "mr-auto pr-8"
              }`}
            >
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-1">
                <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                {item.location && (
                  <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                )}
                <p className="text-sm text-primary font-mono mb-3">{item.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background animate-pulse-subtle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
