import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  highlightClassName?: string;
  as?: React.ElementType;
}

export function AnimatedHeading({ 
  text, 
  className, 
  highlightClassName = "text-brand-primary",
  as: Component = "h2"
}: AnimatedHeadingProps) {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!container.current) return;
    const words = container.current.querySelectorAll('.word-inner');
    
    gsap.fromTo(words,
      { y: '120%', opacity: 0, rotateX: -20 },
      {
        y: '0%',
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.04,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        }
      }
    );
  }, { scope: container });

  let isHighlight = false;
  const parsedWords = text.split(' ').map((word) => {
    let cleanWord = word;
    
    if (cleanWord.startsWith('*')) {
      isHighlight = true;
      cleanWord = cleanWord.substring(1);
    }
    
    const highlightThisWord = isHighlight;
    
    if (cleanWord.endsWith('*')) {
      isHighlight = false;
      cleanWord = cleanWord.substring(0, cleanWord.length - 1);
    }
    
    return { text: cleanWord, highlight: highlightThisWord };
  });

  return (
    <Component ref={container} className={cn("tracking-tight flex flex-wrap", className)}>
      {parsedWords.map((wordObj, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] pb-[0.1em]">
          <span 
            className={cn(
              "inline-block word-inner origin-bottom transform-gpu", 
              wordObj.highlight && highlightClassName
            )}
          >
            {wordObj.text}
          </span>
        </span>
      ))}
    </Component>
  );
}
