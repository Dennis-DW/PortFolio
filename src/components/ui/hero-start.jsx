import React from 'react';
import { Button2 } from './button';
import { ArrowRight, Search } from 'lucide-react';
import Writer from './typewriter-demo';


export function HeroStart({
  description = 'Full Stack Developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, blockchain technologies, and IT Support. Certified in Solidity Smart Contracts, Web3 Development, and Secure Coding Practices.',
  primaryButtonText = 'View My Work',
  primaryButtonIcon = <ArrowRight size={20} />,
  showMockups = true,
  logoComponent,
}) {
 

  return (
    <div className="min-h-screen bg-transparent py-12 sm:p-6 lg:p-8 flex flex-col-reverse lg:flex-row gap-6 lg:gap-12 items-center justify-center sm:justify-between max-w-7xl mx-auto">
      {/* Left Side */}
      <div className="space-y-4 max-w-full sm:max-w-2xl flex-1 w-full sm:w-auto">
        <div className="space-y-6 flex justify-center sm:justify-start mt-16 sm:mt-0 min-h-[100px] sm:min-h-[120px]">
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
            >
              {primaryButtonText}
              {primaryButtonIcon}
            </Button2>        
        </div>
      </div>

      {/* Right Side - Mockups */}
      {showMockups && (
        <div className="relative w-[320px] sm:w-[400px] lg:w-[450px] flex-shrink-0 mt-8 sm:mt-12 lg:mt-0 hidden md:block">
          <div className="relative bg-background rounded-2xl shadow-2xl border overflow-hidden transform rotate-2 hover:rotate-1 transition-transform duration-300">
            <div className="bg-muted/50 px-4 sm:px-6 py-3 sm:py-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                      <path d="M10 19l-7-7m0 0l7-7m-7 7h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none">
                      <path d="m14 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 max-w-xs sm:max-w-md mx-4 sm:mx-6">
                  <div className="bg-background rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground border">
                    <Search size={12} className="inline mr-1" /> Javascript
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-xs">⭐</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-background min-h-[280px] sm:min-h-[320px]">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                {logoComponent || (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-base sm:text-lg">DW</span>
                  </div>
                )}
                <span className="font-semibold text-foreground text-base sm:text-lg">Dennis</span>
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3">
                  <h3 className="text-muted-foreground font-medium text-sm sm:text-base">Quick Actions</h3>
                  <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
                  {[
                    { name: 'Creative', color: 'bg-green-500', icon: '🌐' },
                    { name: 'Supportive', color: 'bg-blue-500', icon: '🛠️' },
                    { name: 'Analytical', color: 'bg-purple-500', icon: '🔒' },
                    { name: 'Adaptable', color: 'bg-orange-500', icon: '⚛️' },
                    { name: 'Driven', color: 'bg-red-500', icon: '🖥️' },
                    { name: 'Organized', color: 'bg-indigo-500', icon: '🗄️' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-1 sm:space-y-2 group cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
                      >
                        <span className="text-white font-bold text-xs sm:text-sm">{item.icon}</span>
                      </div>
                      <span className="text-xs text-muted-foreground text-center font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl transform rotate-6 -z-10"></div>
          <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-full h-full bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl shadow-xl transform rotate-12 -z-20"></div>
          <div className="absolute -bottom-4 -right-16 sm:-bottom-8 sm:-right-10 w-40 sm:w-44 h-[24rem] sm:h-80 bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-200">
            <div className="w-full h-full bg-background rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden border">
              <div className="bg-muted/30 px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center text-xs border-b">
                <span className="font-semibold text-foreground">9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground font-medium">100%</span>
                </div>
              </div>
              <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-xl shadow-md"></div>
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Dennis</span>
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-muted rounded-xl hover:bg-muted/80 transition-colors cursor-pointer"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}