import { useState } from "react";
import { Car, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarItem {
  id: number;
  name: string;
  type: string;
  price: number;
  year: number;
  image: string;
  paymentType: "كاش" | "أقساط" | "كاش وأقساط";
}

const cars: CarItem[] = [
  {
    id: 1,
    name: "مرسيدس E-Class",
    type: "سيدان",
    price: 45000,
    year: 2023,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    paymentType: "كاش وأقساط",
  },
  {
    id: 2,
    name: "بي ام دبليو X5",
    type: "SUV",
    price: 55000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    paymentType: "أقساط",
  },
  {
    id: 3,
    name: "أودي A6",
    type: "سيدان",
    price: 42000,
    year: 2023,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    paymentType: "كاش",
  },
  {
    id: 4,
    name: "رينج روفر سبورت",
    type: "SUV",
    price: 75000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop",
    paymentType: "كاش وأقساط",
  },
  {
    id: 5,
    name: "تويوتا كامري",
    type: "سيدان",
    price: 28000,
    year: 2023,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    paymentType: "أقساط",
  },
  {
    id: 6,
    name: "لكزس RX",
    type: "SUV",
    price: 62000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop",
    paymentType: "كاش وأقساط",
  },
  {
    id: 7,
    name: "هوندا أكورد",
    type: "سيدان",
    price: 32000,
    year: 2023,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop",
    paymentType: "كاش",
  },
  {
    id: 8,
    name: "بورش كايين",
    type: "SUV",
    price: 95000,
    year: 2024,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    paymentType: "أقساط",
  },
];

const carTypes = ["الكل", "سيدان", "SUV"];
const priceRanges = [
  { label: "الكل", min: 0, max: Infinity },
  { label: "أقل من 35,000 دينار", min: 0, max: 35000 },
  { label: "35,000 - 50,000 دينار", min: 35000, max: 50000 },
  { label: "50,000 - 75,000 دينار", min: 50000, max: 75000 },
  { label: "أكثر من 75,000 دينار", min: 75000, max: Infinity },
];

const CarGallerySection = () => {
  const [selectedType, setSelectedType] = useState("الكل");
  const [selectedPriceRange, setSelectedPriceRange] = useState("الكل");

  const filteredCars = cars.filter((car) => {
    const typeMatch = selectedType === "الكل" || car.type === selectedType;
    const priceRange = priceRanges.find((r) => r.label === selectedPriceRange);
    const priceMatch = priceRange
      ? car.price >= priceRange.min && car.price < priceRange.max
      : true;
    return typeMatch && priceMatch;
  });

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Car className="w-4 h-4" />
            <span>معرض السيارات</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            سياراتنا المتوفرة حالياً
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختر سيارتك من مجموعة مختارة بعناية من أفضل السيارات
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-5 h-5" />
            <span className="font-medium">تصفية:</span>
          </div>
          
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px] bg-background border-border">
              <SelectValue placeholder="نوع السيارة" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              {carTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
            <SelectTrigger className="w-[220px] bg-background border-border">
              <SelectValue placeholder="نطاق السعر" />
            </SelectTrigger>
            <SelectContent className="bg-background border-border">
              {priceRanges.map((range) => (
                <SelectItem key={range.label} value={range.label}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(selectedType !== "الكل" || selectedPriceRange !== "الكل") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedType("الكل");
                setSelectedPriceRange("الكل");
              }}
              className="text-primary hover:text-primary/80"
            >
              إعادة تعيين
            </Button>
          )}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Car Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {car.paymentType}
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {car.year}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {car.name}
                  </h3>
                  <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded">
                    {car.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-bold text-xl">
                    {car.price.toLocaleString()} <span className="text-sm">دينار</span>
                  </p>
                  <Button
                    size="sm"
                    className="bg-whatsapp hover:bg-whatsapp/90 text-white"
                    onClick={() => {
                      const message = `مرحباً، أريد الاستفسار عن سيارة ${car.name} موديل ${car.year}`;
                      window.open(
                        `https://wa.me/962790588257?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                  >
                    استفسار
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              لا توجد سيارات تطابق معايير البحث
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSelectedType("الكل");
                setSelectedPriceRange("الكل");
              }}
            >
              عرض جميع السيارات
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            لا تجد ما تبحث عنه؟ تواصل معنا وسنساعدك
          </p>
          <Button
            size="lg"
            className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2"
            onClick={() =>
              window.open(
                "https://wa.me/962790588257?text=مرحباً، أبحث عن سيارة معينة",
                "_blank"
              )
            }
          >
            تواصل عبر واتساب
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarGallerySection;
