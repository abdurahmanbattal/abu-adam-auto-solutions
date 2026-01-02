import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold text-lg">موقعنا</span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
            زورونا في معرضنا
          </h2>
          <p className="text-muted-foreground text-lg">
            يسعدنا استقبالكم لتشاهدوا تشكيلتنا المميزة من السيارات
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.5!2d35.9!3d31.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzAwLjAiTiAzNcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sjo!4v1620000000000!5m2!1sen!2sjo"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أبو ادم لتجارة السيارات"
              className="grayscale contrast-125"
            />
          </div>

          {/* Location CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://maps.app.goo.gl/og8Bq3kB2gk1kZpV8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              افتح في خرائط جوجل
            </a>
            <a
              href="https://maps.app.goo.gl/og8Bq3kB2gk1kZpV8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground border border-border px-6 py-3 rounded-xl font-bold hover:bg-secondary/80 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              احصل على الاتجاهات
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
