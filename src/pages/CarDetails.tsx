import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Car,
  Calendar,
  Fuel,
  Gauge,
  Users,
  Palette,
  Settings,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cars } from "@/data/carsData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id || "0"));
  const [activeImage, setActiveImage] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">
            السيارة غير موجودة
          </h1>
          <Link to="/#gallery">
            <Button className="mt-4">العودة للمعرض</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const handleWhatsAppInquiry = () => {
    const message = `مرحباً، أريد الاستفسار عن سيارة ${car.name} موديل ${car.year}
السعر: ${car.price.toLocaleString()} دينار`;
    window.open(
      `https://wa.me/962790588257?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <ArrowRight className="w-4 h-4 rotate-180" />
            <Link to="/#gallery" className="hover:text-primary transition-colors">
              المعرض
            </Link>
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span className="text-foreground">{car.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={car.images[activeImage]}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background p-2 rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background p-2 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Payment Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                    {car.paymentType}
                  </Badge>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 justify-center">
                {car.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === index
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${car.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="space-y-6">
              {/* Title & Price */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {car.type}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {car.year}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {car.name}
                </h1>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {car.price.toLocaleString()}
                  </span>
                  <span className="text-xl text-muted-foreground">دينار</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  المواصفات الأساسية
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Gauge className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">المحرك</p>
                      <p className="font-medium text-foreground">{car.specs.engine}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Settings className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">ناقل الحركة</p>
                      <p className="font-medium text-foreground text-sm">{car.specs.transmission}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Fuel className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">الوقود</p>
                      <p className="font-medium text-foreground">{car.specs.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Car className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">المسافة المقطوعة</p>
                      <p className="font-medium text-foreground">{car.specs.mileage}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Palette className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">اللون</p>
                      <p className="font-medium text-foreground">{car.specs.color}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">المقاعد</p>
                      <p className="font-medium text-foreground">{car.specs.seats} مقاعد</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  المميزات
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 text-lg py-6"
                  onClick={handleWhatsAppInquiry}
                >
                  <MessageCircle className="w-5 h-5" />
                  استفسار عبر واتساب
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 gap-2 text-lg py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open("tel:+962790588257")}
                >
                  <Phone className="w-5 h-5" />
                  اتصل الآن
                </Button>
              </div>

              {/* Financing CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-5 border border-primary/20">
                <p className="text-foreground mb-3">
                  تريد شراء هذه السيارة بالأقساط؟
                </p>
                <Link to="/#financing">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    احسب قسطك الشهري
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default CarDetails;
