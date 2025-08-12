import React from 'react';
import Typewriter from '../fancy/text/typewriter';

export default function Writer() {
  return (
    <div className="w-[300px] sm:w-[400px] lg:w-[500px] flex flex-wrap items-center justify-center sm:justify-start text-foreground font-bold overflow-wrap break-word">
      <span className="mr-2 text-xl sm:text-2xl lg:text-3xl leading-[1.1] tracking-tight">
        I build 🌍 to
      </span>
      <Typewriter
        text={[
          'craft scalable web applications',
          'develop secure smart contracts',
          'design beautiful UIs',
          'integrate powerful APIs',
          'bring ideas to life through code',
        ]}
        speed={70}
        className="text-xl sm:text-2xl lg:text-3xl text-chart-4 text-pretty leading-[1.1] tracking-tight"
        waitTime={1500}
        deleteSpeed={40}
        cursorChar="_"
      />
    </div>
  );
}