import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#features", label: "لماذا نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Abu Adam ATL" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:0790588257"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            اتصل الآن
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0790588257"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-bold mt-2"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
