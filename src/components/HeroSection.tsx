import { MessageCircle, Phone } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="سيارة فاخرة"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-2 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
            <span className="font-medium">خيارك الأفضل دائمًا</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-slide-up">
            أفضل الحلول التمويلية
            <br />
            <span className="text-gradient">لامتلاك سيارتك بكل راحة</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            كاش أو أقساط مريحة تناسب جميع الاحتياجات
          </p>

          {/* Supporting Text */}
          <p className="text-lg text-silver animate-fade-in" style={{ animationDelay: "0.4s" }}>
            عروض تمويلية مرنة وخيارات متعددة بين يديك
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://wa.me/962790588257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 btn-whatsapp px-8 py-4 rounded-xl text-lg font-bold transition-transform hover:scale-105 glow-effect w-full sm:w-auto justify-center"
              style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.4)" }}
            >
              <MessageCircle className="w-6 h-6" />
              تواصل معنا عبر واتساب
            </a>

            <a
              href="tel:0790588257"
              className="flex items-center gap-3 bg-secondary text-secondary-foreground border border-border px-8 py-4 rounded-xl text-lg font-bold transition-all hover:bg-secondary/80 hover:border-primary/50 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              اتصل بنا الآن
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">+500</span>
              <span>عميل سعيد</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">+10</span>
              <span>سنوات خبرة</span>
            </div>
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">100%</span>
              <span>مصداقية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
