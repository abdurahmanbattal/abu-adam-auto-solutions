import { Shield, Award, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-bold text-lg">من نحن</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 mb-6">
                أبو ادم لتجارة السيارات
                <br />
                <span className="text-gradient">كاش وأقساط</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أبو ادم لتجارة السيارات كاش وأقساط يقدم أفضل الحلول التمويلية وخيارات الشراء المرنة،
                مع التزام كامل بالوضوح والمصداقية وخدمة العملاء،
                لتكون تجربتك سهلة وآمنة وخيارك الأفضل دائمًا.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">ضمان الثقة</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">+10</div>
                <div className="text-sm text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">عميل سعيد</div>
              </div>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3">
              {["ثقة", "مصداقية", "حلول واقعية", "احترافية", "سرعة"].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium border border-primary/20"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Logo/Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card border border-border rounded-3xl p-12 glow-effect">
                <img
                  src={logo}
                  alt="أبو ادم لتجارة السيارات"
                  className="w-full max-w-md mx-auto"
                />
                <div className="text-center mt-6">
                  <p className="text-xl font-bold text-primary">KARKORI A.T.L</p>
                  <p className="text-muted-foreground">خيارك الأفضل دائمًا وأبدًا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
