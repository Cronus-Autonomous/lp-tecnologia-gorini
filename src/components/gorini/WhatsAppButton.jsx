import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHint(true), 5000);
    const t2 = setTimeout(() => setHint(false), 14000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const open = () =>
    window.open(
      `https://wa.me/5511999999999?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Clínica Gorini.")}`,
      "_blank"
    );

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-end gap-2">
      {hint && (
        <div className="hidden sm:flex items-center gap-2 mb-1 glass rounded-full border border-teal/15 shadow px-3.5 py-2 animate-toast-in">
          <span className="text-xs text-onyx/80">Fale agora com um especialista</span>
          <button onClick={() => setHint(false)} aria-label="Fechar" className="text-muted-foreground hover:text-onyx">
            <X size={13} />
          </button>
        </div>
      )}
      <button
        onClick={open}
        aria-label="Falar no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} fill="white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </button>
    </div>
  );
}