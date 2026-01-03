export interface CarItem {
  id: number;
  name: string;
  type: string;
  price: number;
  year: number;
  images: string[];
  paymentType: "كاش" | "أقساط" | "كاش وأقساط";
  specs: {
    engine: string;
    transmission: string;
    fuel: string;
    mileage: string;
    color: string;
    seats: number;
  };
  features: string[];
}

export const cars: CarItem[] = [
  {
    id: 1,
    name: "مرسيدس E-Class",
    type: "سيدان",
    price: 45000,
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&h=600&fit=crop",
    ],
    paymentType: "كاش وأقساط",
    specs: {
      engine: "2.0L توربو",
      transmission: "أوتوماتيك 9 سرعات",
      fuel: "بنزين",
      mileage: "25,000 كم",
      color: "أسود ميتاليك",
      seats: 5,
    },
    features: ["شاشة لمس", "كاميرا خلفية", "مقاعد جلد", "فتحة سقف", "نظام ملاحة", "حساسات أمامية وخلفية"],
  },
  {
    id: 2,
    name: "بي ام دبليو X5",
    type: "SUV",
    price: 55000,
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&h=600&fit=crop",
    ],
    paymentType: "أقساط",
    specs: {
      engine: "3.0L 6 سلندر",
      transmission: "أوتوماتيك 8 سرعات",
      fuel: "بنزين",
      mileage: "10,000 كم",
      color: "أبيض لؤلؤي",
      seats: 7,
    },
    features: ["دفع رباعي", "شاشة مزدوجة", "مقاعد مدفأة", "نظام صوت Harman Kardon", "مساعد ركن ذكي"],
  },
  {
    id: 3,
    name: "أودي A6",
    type: "سيدان",
    price: 42000,
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop",
    ],
    paymentType: "كاش",
    specs: {
      engine: "2.0L TFSI",
      transmission: "أوتوماتيك 7 سرعات S-tronic",
      fuel: "بنزين",
      mileage: "30,000 كم",
      color: "رمادي داكن",
      seats: 5,
    },
    features: ["نظام Quattro", "شاشة MMI", "إضاءة LED", "نظام صوت Bang & Olufsen", "مقاعد رياضية"],
  },
  {
    id: 4,
    name: "رينج روفر سبورت",
    type: "SUV",
    price: 75000,
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    paymentType: "كاش وأقساط",
    specs: {
      engine: "3.0L V6 Supercharged",
      transmission: "أوتوماتيك 8 سرعات",
      fuel: "بنزين",
      mileage: "15,000 كم",
      color: "أخضر بريطاني",
      seats: 5,
    },
    features: ["نظام Terrain Response", "شاشة Pivi Pro", "مقاعد مساج", "كاميرا 360", "تعليق هوائي"],
  },
  {
    id: 5,
    name: "تويوتا كامري",
    type: "سيدان",
    price: 28000,
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&h=600&fit=crop",
    ],
    paymentType: "أقساط",
    specs: {
      engine: "2.5L 4 سلندر",
      transmission: "أوتوماتيك 8 سرعات",
      fuel: "هايبرد",
      mileage: "20,000 كم",
      color: "فضي",
      seats: 5,
    },
    features: ["Toyota Safety Sense", "شاشة 9 انش", "Apple CarPlay", "مثبت سرعة تكيفي", "مقاعد جلد"],
  },
  {
    id: 6,
    name: "لكزس RX",
    type: "SUV",
    price: 62000,
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    paymentType: "كاش وأقساط",
    specs: {
      engine: "3.5L V6 هايبرد",
      transmission: "CVT",
      fuel: "هايبرد",
      mileage: "5,000 كم",
      color: "أبيض لؤلؤي",
      seats: 5,
    },
    features: ["Lexus Safety System+", "شاشة 14 انش", "نظام Mark Levinson", "مقاعد مبردة ومدفأة"],
  },
  {
    id: 7,
    name: "هوندا أكورد",
    type: "سيدان",
    price: 32000,
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    paymentType: "كاش",
    specs: {
      engine: "1.5L توربو",
      transmission: "أوتوماتيك CVT",
      fuel: "بنزين",
      mileage: "35,000 كم",
      color: "أزرق داكن",
      seats: 5,
    },
    features: ["Honda Sensing", "شاشة لمس 8 انش", "Apple CarPlay", "Android Auto", "كاميرا خلفية"],
  },
  {
    id: 8,
    name: "بورش كايين",
    type: "SUV",
    price: 95000,
    year: 2024,
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    ],
    paymentType: "أقساط",
    specs: {
      engine: "4.0L V8 توين توربو",
      transmission: "Tiptronic S 8 سرعات",
      fuel: "بنزين",
      mileage: "8,000 كم",
      color: "أسود",
      seats: 5,
    },
    features: ["Sport Chrono Package", "PASM", "شاشة PCM", "نظام Bose", "مقاعد رياضية 18 وضعية"],
  },
];

export const carTypes = ["الكل", "سيدان", "SUV"];

export const priceRanges = [
  { label: "الكل", min: 0, max: Infinity },
  { label: "أقل من 35,000 دينار", min: 0, max: 35000 },
  { label: "35,000 - 50,000 دينار", min: 35000, max: 50000 },
  { label: "50,000 - 75,000 دينار", min: 50000, max: 75000 },
  { label: "أكثر من 75,000 دينار", min: 75000, max: Infinity },
];
