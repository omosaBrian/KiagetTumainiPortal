import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export function CarouselCustom({
  children,
  autoSlide = true,
  autoSlideInterval = 6000,
  showControls = true,
  showIndicators = true,
  className,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = React.Children.count(children);

  const prev = useCallback(() => {
    setCurrentSlide((curr) => (curr === 0 ? slidesCount - 1 : curr - 1));
  }, [slidesCount]);

  const next = useCallback(() => {
    setCurrentSlide((curr) => (curr === slidesCount - 1 ? 0 : curr + 1));
  }, [slidesCount]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {children}
      </div>
      
      {showControls && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              onClick={prev}
              size="icon"
              variant="ghost"
              className="rounded-full bg-white/30 text-white backdrop-blur-sm hover:bg-white/50"
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              onClick={next}
              size="icon"
              variant="ghost"
              className="rounded-full bg-white/30 text-white backdrop-blur-sm hover:bg-white/50"
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </>
      )}
      
      {showIndicators && (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={cn(
                "h-3 rounded-full bg-white opacity-50 transition-all duration-300 hover:opacity-100",
                currentSlide === i ? "w-8 opacity-70" : "w-3"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("min-w-full shrink-0 grow-0", className)}>
      {children}
    </div>
  );
}
