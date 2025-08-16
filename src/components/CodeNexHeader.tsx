import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const CodeNexHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", to: "/about" },
    { name: "Domains", to: "/domains" },
    { name: "Timeline", to: "/timeline" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="bg-navy/90 backdrop-blur-md rounded-2xl border border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
               
              <img 
                  src={logo} 
                  alt="CodeNex Logo" 
                  className="h-12 w-auto object-contain" 
                />
                
                              
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              </div>
            </div>

            <div className="hidden md:block">
              <Button variant="ocean" size="sm" className="rounded-full">
                Register Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <Button variant="ocean" size="sm" className="w-full rounded-full">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default CodeNexHeader;