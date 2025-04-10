import { useEffect, useState, useRef } from "react";

interface StatCardProps {
  count: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export default function StatCard({ count, label, suffix = "", duration = 2000 }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * count));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [count, duration, isVisible]);

  return (
    <div ref={ref} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
      <div className="text-4xl font-bold text-[#0a2463] mb-2">
        {displayValue}{suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
