import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Mariana A.",
    text: "Atendimento humanizado do início ao fim. O resultado do Exion superou minhas expectativas — minha pele voltou a ter firmeza e luminosidade, tudo com naturalidade.",
    tag: "Exion · Facial",
  },
  {
    name: "Patrícia L.",
    text: "Fiz o Emsculpt Neo e em poucas sessões já sentia diferença no tônus. Ambiente seguro, equipe médica atenciosa e resultado visível sem cirurgia.",
    tag: "Emsculpt Neo · Corporal",
  },
  {
    name: "Carla R.",
    text: "A Emsella mudou minha qualidade de vida. Recuperei confiança em poucas sessões, sem dor e sem interromper minha rotina. Gratidão imensa à equipe Gorini.",
    tag: "Emsella · Saúde Íntima",
  },
  {
    name: "Juliana M.",
    text: "O Emtone resolveu minha celulite que teimava em não ir embora. Profissionais sérios, protocolo sério e resultado real. Recomendo de olhos fechados.",
    tag: "Emtone · Celulite",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = REVIEWS.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(t);
  }, [n]);

  const prev = () => setI((p) => (p - 1 + n) % n);
  const next = () => setI((p) => (p + 1) % n);

  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center reveal">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            Prova Social
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl text-onyx">
            Histórias reais de transformação
          </h2>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, k) => (
                <Star key={k} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">5,0 · Avaliações no Google</span>
          </div>
        </div>

        <div className="mt-12 reveal relative">
          <div className="glass rounded-3xl border border-teal/12 p-8 sm:p-12 text-center shadow-[0_10px_40px_rgba(60,119,121,0.06)]">
            <span className="inline-block text-[11px] uppercase tracking-[0.15em] text-teal bg-teal/8 rounded-full px-3 py-1 mb-5">
              {REVIEWS[i].tag}
            </span>
            <p className="font-heading text-2xl sm:text-3xl text-onyx leading-snug italic text-balance">
              “{REVIEWS[i].text}”
            </p>
            <p className="mt-6 text-sm font-semibold text-onyx">— {REVIEWS[i].name}</p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Depoimento anterior" className="p-2.5 rounded-full border border-teal/20 text-teal hover:bg-teal hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {REVIEWS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Ir para depoimento ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-teal" : "w-2 bg-teal/25"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Próximo depoimento" className="p-2.5 rounded-full border border-teal/20 text-teal hover:bg-teal hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}