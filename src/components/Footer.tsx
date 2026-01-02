import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img src={logo} alt="Abu Adam ATL" className="h-16 w-auto" />
          
          {/* Tagline */}
          <p className="text-center text-muted-foreground max-w-md">
            أبو ادم كاركوري A.T.L
            <br />
            <span className="text-primary font-bold">خيارك الأفضل دائمًا وأبدًا</span>
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">الرئيسية</a>
            <a href="#features" className="hover:text-primary transition-colors">لماذا نحن</a>
            <a href="#services" className="hover:text-primary transition-colors">خدماتنا</a>
            <a href="#about" className="hover:text-primary transition-colors">من نحن</a>
            <a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border w-full text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} أبو ادم لتجارة السيارات - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
