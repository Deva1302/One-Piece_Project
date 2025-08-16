import oceanBg from "@/assets/ocean-bg.jpg";
import parchmentBg from "@/assets/parchment.png";

const DomainsSection = () => {
  const domains = [
    {
      title: "CREATIVES",
      description: "Design, Art, and Visual Storytelling"
    },
    {
      title: "TECHNICAL", 
      description: "Programming, Development, and Engineering"
    },
    {
      title: "NON-TECH",
      description: "Management, Marketing, and Operations"
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
      <div className="absolute inset-0 bg-navy/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-16">
          <h2 className="text-4xl md:text-6xl font-medieval font-bold text-white tracking-wider">
            OUR DOMAINS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {domains.map((domain, index) => (
              <div 
                key={index}
                className="relative group hover:scale-105 transition-transform duration-300"
              >
                {/* Parchment-style card */}
                <div 
                  className="aspect-[3/4] rounded-lg shadow-card flex items-center justify-center p-8 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${parchmentBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Parchment overlay for better styling */}
                  <div className="absolute inset-0 bg-gradient-parchment opacity-90"></div>
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-2xl md:text-3xl font-medieval font-bold text-navy mb-4">
                      {domain.title}
                    </h3>
                    <p className="text-navy/80 font-medium hidden md:block">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Character positioned on the right */}
      <div className="absolute bottom-0 right-0 md:right-10 w-48 md:w-64 h-48 md:h-64 opacity-90">
        {/* Placeholder for Luffy character */}
        <div className="w-full h-full bg-gradient-to-t from-transparent to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default DomainsSection;