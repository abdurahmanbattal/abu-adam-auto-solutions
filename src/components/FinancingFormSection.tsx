import { useState } from "react";
import { Calculator, Send, DollarSign, Calendar, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const FinancingFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carPrice: 40000,
    downPayment: 10000,
    months: 36,
  });

  const interestRate = 0.05; // 5% annual interest rate
  const loanAmount = formData.carPrice - formData.downPayment;
  const monthlyInterest = interestRate / 12;
  const monthlyPayment =
    loanAmount > 0
      ? (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, formData.months)) /
        (Math.pow(1 + monthlyInterest, formData.months) - 1)
      : 0;
  const totalPayment = monthlyPayment * formData.months;
  const totalInterest = totalPayment - loanAmount;

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("يرجى إدخال الاسم ورقم الهاتف");
      return;
    }

    const message = `طلب تمويل جديد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
سعر السيارة: ${formData.carPrice.toLocaleString()} دينار
الدفعة الأولى: ${formData.downPayment.toLocaleString()} دينار
مدة التمويل: ${formData.months} شهر
القسط الشهري التقديري: ${Math.round(monthlyPayment).toLocaleString()} دينار`;

    window.open(
      `https://wa.me/962790588257?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="financing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>حاسبة التمويل</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            احسب قسطك الشهري
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            استخدم حاسبة الأقساط لمعرفة القسط الشهري التقديري وقدم طلب التمويل مباشرة
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              حاسبة الأقساط التقديرية
            </h3>

            <div className="space-y-6">
              {/* Car Price */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    سعر السيارة
                  </Label>
                  <span className="text-primary font-bold text-lg">
                    {formData.carPrice.toLocaleString()} دينار
                  </span>
                </div>
                <Slider
                  value={[formData.carPrice]}
                  onValueChange={(value) =>
                    setFormData({ ...formData, carPrice: value[0] })
                  }
                  min={10000}
                  max={150000}
                  step={1000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10,000</span>
                  <span>150,000</span>
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-foreground flex items-center gap-2">
                    <Percent className="w-4 h-4 text-primary" />
                    الدفعة الأولى
                  </Label>
                  <span className="text-primary font-bold text-lg">
                    {formData.downPayment.toLocaleString()} دينار
                  </span>
                </div>
                <Slider
                  value={[formData.downPayment]}
                  onValueChange={(value) =>
                    setFormData({ ...formData, downPayment: value[0] })
                  }
                  min={0}
                  max={formData.carPrice * 0.5}
                  step={500}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>{(formData.carPrice * 0.5).toLocaleString()}</span>
                </div>
              </div>

              {/* Months */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    مدة التمويل
                  </Label>
                  <span className="text-primary font-bold text-lg">
                    {formData.months} شهر
                  </span>
                </div>
                <Select
                  value={formData.months.toString()}
                  onValueChange={(value) =>
                    setFormData({ ...formData, months: parseInt(value) })
                  }
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border">
                    <SelectItem value="12">12 شهر (سنة)</SelectItem>
                    <SelectItem value="24">24 شهر (سنتين)</SelectItem>
                    <SelectItem value="36">36 شهر (3 سنوات)</SelectItem>
                    <SelectItem value="48">48 شهر (4 سنوات)</SelectItem>
                    <SelectItem value="60">60 شهر (5 سنوات)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results */}
              <div className="bg-secondary/50 rounded-xl p-5 mt-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">مبلغ التمويل</span>
                  <span className="text-foreground font-bold">
                    {loanAmount.toLocaleString()} دينار
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">إجمالي الفوائد</span>
                  <span className="text-foreground font-bold">
                    {Math.round(totalInterest).toLocaleString()} دينار
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-border/50">
                  <span className="text-muted-foreground">إجمالي المبلغ</span>
                  <span className="text-foreground font-bold">
                    {Math.round(totalPayment).toLocaleString()} دينار
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-bold text-foreground">القسط الشهري</span>
                  <span className="text-2xl font-bold text-primary">
                    {Math.round(monthlyPayment).toLocaleString()} دينار
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                * هذه الأرقام تقديرية وقد تختلف حسب شروط التمويل الفعلية
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              قدم طلب التمويل الآن
            </h3>

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  الاسم الكامل
                </Label>
                <Input
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  رقم الهاتف
                </Label>
                <Input
                  id="phone"
                  placeholder="07xxxxxxxx"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-background border-border"
                  dir="ltr"
                />
              </div>

              <div className="bg-card/50 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-foreground">ملخص الطلب</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">سعر السيارة:</span>
                    <p className="font-bold text-foreground">
                      {formData.carPrice.toLocaleString()} دينار
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">الدفعة الأولى:</span>
                    <p className="font-bold text-foreground">
                      {formData.downPayment.toLocaleString()} دينار
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">المدة:</span>
                    <p className="font-bold text-foreground">{formData.months} شهر</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">القسط الشهري:</span>
                    <p className="font-bold text-primary">
                      {Math.round(monthlyPayment).toLocaleString()} دينار
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 text-lg py-6"
                onClick={handleSubmit}
              >
                <Send className="w-5 h-5" />
                إرسال طلب التمويل عبر واتساب
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                سيتم التواصل معك خلال ساعات العمل للرد على استفساراتك
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingFormSection;
