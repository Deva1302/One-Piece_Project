import oceanBg from "@/assets/ocean-bg.jpg";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import CodeNexHeader from "@/components/CodeNexHeader";

const TimelineSection = () => {
  const timelineItems = [
    {
      date: "08.09.25",
      title: "Interview",
      position: { top: "70%", left: "15%" }
    },
    {
      date: "01.09.25", 
      title: "Result",
      position: { top: "60%", left: "75%" }
    },
    {
      date: "06.09.25",
      title: "1st Submission",
      position: { top: "40%", left: "25%" }
    },
    {
      date: "29.08.25",
      title: "Application Close",
      position: { top: "30%", left: "70%" }
    },
    {
      date: "01.09.25",
      title: "Task Assignment", 
      position: { top: "50%", left: "50%" }
    },
    {
      date: "10.09.25",
      title: "Application Starts",
      position: { top: "20%", left: "60%" }
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${oceanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <CodeNexHeader />
      <div className="absolute inset-0 bg-navy/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-16">
          <h2 className="text-4xl md:text-6xl font-medieval font-bold text-white tracking-wider">
            TIMELINE
          </h2>
          
          {/* Desktop Timeline */}
          <div className="hidden md:block relative h-96 max-w-6xl mx-auto">
            {/* Connecting lines - simplified for now */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <path
                d="M 15% 70% Q 50% 50% 75% 60% Q 60% 40% 70% 30%"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 25% 40% Q 40% 35% 50% 50% Q 55% 45% 60% 20%"
                stroke="white"
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
            </svg>
            
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: item.position.top,
                  left: item.position.left,
                  zIndex: 2
                }}
              >
                {/* Timeline node */}
                <div className="relative group">
                  <div className="w-16 h-16 bg-navy border-4 border-gold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                  </div>
                  
                  {/* Date and title */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-navy/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-gold/30">
                      <p className="text-white font-bold text-sm">{item.date}</p>
                      <p className="text-gold text-xs font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-navy border-3 border-gold rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
                <div className="bg-navy/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-gold/30 flex-1">
                  <p className="text-white font-bold">{item.date}</p>
                  <p className="text-gold text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Character positioned on the left */}
      <div className="absolute bottom-0 left-0 md:left-10 w-48 md:w-64 h-48 md:h-64 opacity-90">
        {/* Placeholder for Luffy character */}
        <div className="w-full h-full bg-gradient-to-t from-transparent to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default TimelineSection;