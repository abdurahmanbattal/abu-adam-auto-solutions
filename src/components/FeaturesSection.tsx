import { Car, Wallet, FileText, Handshake, Zap } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "سيارات مختارة بعناية",
    description: "نختار لك أفضل السيارات بجودة عالية وفحص شامل",
  },
  {
    icon: Wallet,
    title: "أفضل العروض التمويلية",
    description: "حلول تمويلية تناسب ميزانيتك واحتياجاتك",
  },
  {
    icon: FileText,
    title: "أقساط مريحة وواضحة",
    description: "شفافية كاملة في الأسعار والأقساط الشهرية",
  },
  {
    icon: Handshake,
    title: "تعامل صادق واحترافي",
    description: "نبني علاقات طويلة المدى مع عملائنا",
  },
  {
    icon: Zap,
    title: "سرعة في الإنجاز",
    description: "إجراءات سريعة وتسليم فوري للسيارة",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-lg">لماذا تختار أبو آدم؟</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
            خبرة وثقة لا تُضاهى
          </h2>
          <p className="text-muted-foreground text-lg">
            نقدم لك تجربة شراء سيارة مميزة مع ضمان الجودة والمصداقية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-luxury group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
