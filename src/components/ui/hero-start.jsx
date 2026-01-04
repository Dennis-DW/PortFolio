import React from 'react';
import { Button2 } from './button';
import { ShieldUser } from 'lucide-react';
import Writer from './typewriter-demo';
import heroImage from '../../assets/dennis-wambua.png';


export function HeroStart({
  description = 'I build robust fullstack systems with React, Node.js, and CI/CD. I bridge the gap to analytics, using R and SQL to turn complex data into clear, strategic business solutions.',
  primaryButtonText = 'View My Work',
  primaryButtonIcon = <ShieldUser size={30} />,
  logoComponent,
}) {
  return (
    <div className="min-h-screen bg-transparent py-12 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-center sm:justify-between max-w-7xl mx-auto relative">

      {/* Left Side - Image */}
      <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] flex-shrink-0 mt-7 sm:mt-4 lg:mt-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
         alt="Dennis Wambua - Fullstack Developer (React, Node.js) & Data Analyst (R, SQL)"
          className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-primary"
        />
      </div>

      {/* Right Side */}
      <div className="space-y-4 max-w-full sm:max-w-2xl flex-1 w-full sm:w-auto">
        <div className="space-y-3 flex justify-center sm:justify-start mt-6 sm:mt-0 min-h-[100px] sm:min-h-[120px]">
          <Writer />
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal max-w-[90%] sm:max-w-lg mx-auto sm:mx-0 break-words">
          {description}
        </p>
        <div className="space-y-6 flex justify-center sm:justify-start">
          <Button2
            size="lg"
            variant="default"
            className="cursor-pointer text-base sm:text-lg font-semibold px-6 sm:px-8 py-4 sm:py-6 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={() => {
              const target = document.getElementById('work');
              if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; 
                let startTime = null;

                const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                const scroll = (currentTime) => {
                  if (!startTime) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const progress = Math.min(timeElapsed / duration, 1);
                  const easeProgress = easeInOutQuad(progress);

                  window.scrollTo(0, startPosition + distance * easeProgress);

                  if (progress < 1) {
                    requestAnimationFrame(scroll);
                  }
                };

                requestAnimationFrame(scroll);
              }
            }}
          >
            {primaryButtonText}
            {primaryButtonIcon}
          </Button2>
        </div>
      </div>

    </div>
  );
}