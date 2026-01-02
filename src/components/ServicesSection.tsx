import { Banknote, CreditCard, ChartLine, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Banknote,
    title: "سيارات كاش",
    description: "اشترِ سيارتك نقدًا بأفضل الأسعار مع ضمان الجودة",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: CreditCard,
    title: "سيارات أقساط",
    description: "أقساط مريحة تناسب دخلك الشهري بدون تعقيدات",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: ChartLine,
    title: "حلول تمويلية",
    description: "برامج تمويل متنوعة من أفضل البنوك والمؤسسات المالية",
    color: "from-primary/20 to-primary/10",
  },
  {
    icon: MessageSquare,
    title: "استشارات شراء",
    description: "نساعدك في اختيار السيارة المناسبة لاحتياجاتك وميزانيتك",
    color: "from-purple-500/20 to-purple-600/10",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-lg">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
            خدمات متكاملة تلبي احتياجاتك
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم مجموعة شاملة من الخدمات لتسهيل امتلاك سيارة أحلامك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl border border-border p-8 bg-gradient-to-br ${service.color} hover:border-primary/50 transition-all duration-300 group`}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-background/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
