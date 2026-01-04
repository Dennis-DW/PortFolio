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
          'build scalable full-stack applications',
          'build interactive R Shiny dashboards',
          'develop scalable React & Node.js apps',
          'engineer automated ETL pipelines',
          'and craft custom WordPress solutions',
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