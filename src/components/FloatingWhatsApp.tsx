import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/962790588257"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 btn-whatsapp px-5 py-4 rounded-full shadow-2xl transition-transform hover:scale-110 animate-pulse-slow"
      style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)" }}
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="hidden sm:inline font-bold">واتساب</span>
    </a>
  );
};

export default FloatingWhatsApp;
