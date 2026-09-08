import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const NOTIFICATIONS = [
  { name: "Mariana A.", action: "agendou uma avaliação de Exion", time: "há 14 min" },
  { name: "Patrícia L.", action: "agendou uma avaliação de Emsculpt Neo", time: "há 23 min" },
  { name: "Carla R.", action: "solicitou diagnóstico de Saúde Íntima", time: "há 31 min" },
  { name: "Juliana M.", action: "agendou avaliação de Emtone", time: "há 42 min" },
  { name: "Fernanda S.", action: "agendou uma avaliação de Laser CO2", time: "há 1 h" },
];

export default function SocialProofToast() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % NOTIFICATIONS.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(cycle);
  }, [visible]);

  const n = NOTIFICATIONS[idx];

  return (
    <div
      className={`fixed bottom-24 left-4 sm:left-6 z-30 max-w-[280px] transition-all duration-500 ${
        visible ? "animate-toast-in" : "opacity-0 pointer-events-none translate-y-3"
      }`}
    >
      <div className="glass rounded-2xl border border-teal/15 shadow-lg p-3.5 flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center text-teal font-heading text-sm">
          {n.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-onyx leading-snug">
            <span className="font-semibold">{n.name}</span>{" "}
            <span className="text-onyx/70">{n.action}</span>
          </p>
          <p className="mt-0.5 text-[10px] text-muted-foreground">{n.time}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Fechar notificação"
          className="text-muted-foreground hover:text-onyx transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}