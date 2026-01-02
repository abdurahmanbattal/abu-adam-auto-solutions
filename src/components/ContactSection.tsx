import { MessageCircle, Phone, Facebook, Instagram, Clock, CheckCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-8 md:p-12 mb-12">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                جاهز لامتلاك سيارة أحلامك؟
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                تواصل معنا الآن واحصل على أفضل العروض التمويلية
              </p>

              {/* Main CTA */}
              <a
                href="https://wa.me/962790588257"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-whatsapp px-10 py-5 rounded-2xl text-xl font-bold transition-transform hover:scale-105"
                style={{ boxShadow: "0 0 40px rgba(37, 211, 102, 0.4)" }}
              >
                <MessageCircle className="w-7 h-7" />
                تواصل معنا عبر واتساب
              </a>

              {/* Trust Points */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>نرد بسرعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>حلول فورية</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>ثقة حقيقية</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <a
              href="tel:0790588257"
              className="card-luxury text-center group hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">اتصل بنا</h3>
              <p className="text-2xl font-bold text-primary direction-ltr">0790588257</p>
              <p className="text-muted-foreground mt-1">أبو آدم</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/962790588257"
              target="_blank"
              rel="noopener noreferrer"
              className="card-luxury text-center group hover:border-whatsapp/50 transition-all"
            >
              <div className="w-16 h-16 bg-whatsapp/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-whatsapp/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-whatsapp" />
              </div>
              <h3 className="text-xl font-bold mb-2">واتساب</h3>
              <p className="text-2xl font-bold text-whatsapp direction-ltr">0790588257</p>
              <p className="text-muted-foreground mt-1">راسلنا الآن</p>
            </a>

            {/* Working Hours */}
            <div className="card-luxury text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">ساعات العمل</h3>
              <p className="text-muted-foreground">السبت - الخميس</p>
              <p className="text-lg font-bold mt-1">9:00 ص - 9:00 م</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mt-12">
            <a
              href="https://www.facebook.com/profile.php?id=100090133518993"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 transition-all group"
            >
              <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-blue-500" />
            </a>
            <a
              href="https://www.instagram.com/abu_adamatl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-pink-600/20 hover:border-pink-600/50 transition-all group"
            >
              <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
