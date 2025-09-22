import { useEffect, useState } from 'react';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Database, 
  Server, 
  Wifi, 
  Zap, 
  Binary,
  CircuitBoard,
  Braces,
  Hash,
  GitBranch
} from 'lucide-react';

const techIcons = [
  Code, Terminal, Cpu, Database, Server, Wifi, Zap, Binary,
  CircuitBoard, Braces, Hash, GitBranch
];

interface FloatingIcon {
  id: number;
  Icon: typeof Code;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export const TechDecorations = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const generateIcons = () => {
      const icons: FloatingIcon[] = [];
      for (let i = 0; i < 15; i++) {
        icons.push({
          id: i,
          Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 16 + Math.random() * 8,
          opacity: 0.1 + Math.random() * 0.2,
        });
      }
      setFloatingIcons(icons);
    };

    generateIcons();
  }, []);

  return (
    <>
      {/* Floating Tech Icons */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {floatingIcons.map((icon) => {
          const IconComponent = icon.Icon;
          return (
            <div
              key={icon.id}
              className="absolute animate-float"
              style={{
                left: `${icon.x}%`,
                top: `${icon.y}%`,
                animationDelay: `${icon.delay}s`,
                animationDuration: `${icon.duration}s`,
              }}
            >
              <IconComponent
                size={icon.size}
                className="text-primary"
                style={{ opacity: icon.opacity }}
              />
            </div>
          );
        })}
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10 10 L90 10 L90 90 L10 90 Z M30 30 L70 30 L70 70 L30 70 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
          </svg>
        </div>
        
        <div className="absolute top-32 right-20 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20 20 L80 20 M20 40 L80 40 M20 60 L80 60 M20 80 L80 80"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-20 w-28 h-28 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 80,30 80,70 50,90 20,70 20,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent"
            />
          </svg>
        </div>
      </div>

      {/* Binary Code Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 font-mono text-xs space-y-1 text-foreground">
          <div>01001000 01100101 01101100</div>
          <div>01101100 01101111 00100000</div>
          <div>01010111 01101111 01110010</div>
        </div>
        
        <div className="absolute bottom-32 right-1/4 font-mono text-xs space-y-1 text-foreground">
          <div>function() &#123;</div>
          <div>&nbsp;&nbsp;return true;</div>
          <div>&#125;</div>
        </div>
        
        <div className="absolute top-1/2 left-10 font-mono text-xs space-y-1 text-foreground">
          <div>&lt;html&gt;</div>
          <div>&nbsp;&lt;body&gt;</div>
          <div>&nbsp;&lt;/body&gt;</div>
          <div>&lt;/html&gt;</div>
        </div>
      </div>

      {/* Animated Dots */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
    </>
  );
};