import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 20,
    hours: 20,
    minutes: 20,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <div className="flex justify-center space-x-4 text-center">
    <div className="text-black">
      <div className="text-4xl md:text-6xl font-medieval">{timeLeft.days}D</div>
    </div>
    <div className="text-black">
      <div className="text-4xl md:text-6xl font-medieval">{timeLeft.hours}H</div>
    </div>
    <div className="text-black">
      <div className="text-4xl md:text-6xl font-medieval">{timeLeft.minutes}M</div>
    </div>
    <div className="text-black">
      <div className="text-4xl md:text-6xl font-medieval">{timeLeft.seconds}S</div>
    </div>
  </div>
);

};

const RecruitmentHero = () => {
  return (
   <section
  className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 31.12%), url('/src/assets/bg1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>


  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-navy/30"></div>

  <div className="relative z-10 space-y-8 px-4 flex flex-col items-center text-center pt-60">
  <h1
    className="font-bold tracking-wider"
    style={{
      fontFamily: "IndiKazka4F",
      fontWeight: 400,
      fontSize: "70px",
      lineHeight: "100%",
      color: "#000000",
    }}
  >
    RECRUITMENT
  </h1>

  <div className="space-y-4">
    <p
      className="text-2xl md:text-3xl font-medieval"
      style={{ color: "#000000" }}
    >
      CLOSES IN
    </p>
    <CountdownTimer />
  </div>

 <Button
  size="lg"
  className="px-12 py-4 rounded-full hover:scale-105 transition-transform duration-300"
  style={{
    backgroundColor: "#000000",
    color: "#ffffff",
    marginBottom: "300px",
    fontFamily: "'Metal Mania', cursive", // Make sure font is imported
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "32.97px",
    lineHeight: "100%",
    letterSpacing: "0"
  }}
>
  APPLY NOW
</Button>


 <div className="flex justify-center ">
  <img
    src="/src/assets/Onepiece.png"
    alt="One Piece"
    className="max-w-full h-auto object-contain"
    style={{ maxHeight: "300px", marginTop: "-400px" }} // keep it big but not overwhelming
     />
</div>
</div>

</section>

  );
};

export default RecruitmentHero;