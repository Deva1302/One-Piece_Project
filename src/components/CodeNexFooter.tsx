import { Instagram, Twitter, Phone, Mail, MessageCircle } from "lucide-react";
import oceanBg from "@/assets/ocean-bg.jpg";

const CodeNexFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Mail, href: "#", label: "Email" },
    { icon: Phone, href: "#", label: "Phone" }
  ];

  return (
    <footer 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${oceanBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-16">
          {/* Connect with us section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-medieval font-bold text-gold tracking-wider">
              CONNECT WITH US
            </h2>
            
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                >
                  <social.icon className="w-8 h-8 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Large CODENEX branding */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/20 tracking-wider font-medieval">
              CODENEX
            </h1>
            <p className="text-white/80 text-lg">
              @recruitment'25
            </p>
          </div>
        </div>
      </div>

      {/* Character positioned at bottom right */}
      <div className="absolute bottom-0 right-0 md:right-10 w-48 md:w-64 h-48 md:h-64 opacity-90">
        {/* Placeholder for Luffy character */}
        <div className="w-full h-full bg-gradient-to-t from-transparent to-transparent rounded-full"></div>
      </div>
    </footer>
  );
};

export default CodeNexFooter;