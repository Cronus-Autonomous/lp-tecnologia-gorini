import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";

const TECH_IMG =
  "https://media.base44.com/images/public/6a9b364e8be02771ae4dcfb6/c04a8ad46_generated_2bf1cecf.jpg";

const TABS = [
  "Tecnologias de Ponta",
  "Estética & Injetáveis",
  "Facial & Sobrancelhas",
  "Corporal & Saúde Íntima",
  "Soroterapia",
];

const ITEMS = {
  "Tecnologias de Ponta": [
    {
      name: "Exion",
      tag: "The Collagen Architect",
      headline: "A única tecnologia que une radiofrequência e ultrassom para estimular seu próprio ácido hialurônico e colágeno.",
      cta: "Quero estimular meu colágeno",
    },
    {
      name: "Emsculpt Neo",
      tag: "The Body Sculptor",
      headline: "Queima de gordura (-30%) e tonificação muscular (+25%) em 30 minutos.",
      cta: "Quero potencializar meus resultados",
    },
    {
      name: "Emsella",
      tag: "The Pelvic Renewal",
      headline: "Fortalecimento de assoalho pélvico e tratamento de incontinência em 28 minutos.",
      cta: "Recuperar minha qualidade de vida",
    },
    {
      name: "Emfemme 360",
      tag: "The Intimate Care",
      headline: "Saúde íntima e rejuvenescimento sem cirurgia e sem dor.",
      cta: "Cuidar da minha saúde íntima",
    },
    {
      name: "Emtone",
      tag: "The Cellulite Cure",
      headline: "Trata celulite e flacidez na raiz, eliminando a 'casca de laranja'.",
      cta: "Tratar a celulite na causa",
    },
    {
      name: "Laser CO2 Fracionado",
      tag: "The Deep Renewal",
      headline: "O padrão-ouro do rejuvenescimento facial profundo.",
      cta: "Renovar minha pele",
    },
  ],
  "Estética & Injetáveis": [
    { name: "Bioestimuladores de Colágeno", tag: "Firmeza de dentro para fora", headline: "Estímulo do próprio colágeno para firmeza gradual e natural.", cta: "Quero saber mais" },
    { name: "Skinbooster", tag: "Hidratação profunda", headline: "Microinjeções de ácido hialurônico para pele hidratada e luminosa.", cta: "Quero hidratar minha pele" },
    { name: "Toxina Botulínica", tag: "Expressão suavizada", headline: "Suavização de rugas de expressão com naturalidade preservada.", cta: "Suavizar expressões" },
  ],
  "Facial & Sobrancelhas": [
    { name: "Design de Sobrancelhas", tag: "Harmonia do olhar", headline: "Design personalizado que valoriza a identidade do seu rosto.", cta: "Agendar design" },
    { name: "Lifting de Sobrancelhas", tag: "Olhar rejuvenescido", headline: "Técnicas que elevam e definem o olhar sem cirurgia.", cta: "Rejuvenescer o olhar" },
  ],
  "Corporal & Saúde Íntima": [
    { name: "Protocolo Anti-Flacidez", tag: "Tônus restaurado", headline: "Combinação de tecnologias para firmeza corporal sem cirurgia.", cta: "Recuperar firmeza" },
    { name: "Protocolo Íntimo Feminino", tag: "Bem-estar íntimo", headline: "Reabilitação e rejuvenescimento da saúde íntima feminina.", cta: "Cuidar da saúde íntima" },
  ],
  "Soroterapia": [
    { name: "Soroterapia Personalizada", tag: "Vitalidade endovenosa", headline: "Blend de vitaminas e minerais individualizado para energia e imunidade.", cta: "Quero minha fórmula" },
  ],
};

function Card({ item }) {
  const [open, setOpen] = useState(false);
  const wa = () =>
    window.open(
      `https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Tenho interesse em ${item.name} (${item.cta}). Gostaria de agendar uma avaliação.`)}`,
      "_blank"
    );

  return (
    <div className="group rounded-2xl border border-teal/12 bg-white overflow-hidden hover:border-teal/40 transition-all hover:shadow-[0_14px_40px_rgba(60,119,121,0.1)]">
      <div className="relative h-44 overflow-hidden">
        <Image
          src={TECH_IMG}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/10 to-transparent" />
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] text-gold-light bg-onyx/40 backdrop-blur-sm rounded-full px-3 py-1">
          {item.tag}
        </span>
        <h3 className="absolute bottom-3 left-4 right-4 font-heading text-2xl text-white">{item.name}</h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-onyx/70 leading-relaxed">{item.headline}</p>
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.1em] text-teal"
        >
          Ver mais detalhes <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <p className="mt-3 text-sm text-onyx/60 leading-relaxed border-t border-teal/10 pt-3">
            Protocolo conduzido por médicos especialistas, com avaliação individual e plano de
            sessões adaptado à sua resposta clínica. Agende uma avaliação para o protocolo completo.
          </p>
        )}
        <button
          onClick={wa}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-teal border border-teal/25 rounded-xl py-2.5 min-h-[44px] hover:bg-teal hover:text-white transition-colors"
        >
          {item.cta} <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

export default function Technologies() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <section id="tecnologias" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            Tecnologia de Ponta
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl text-onyx text-balance">
            Engenharia de precisão a serviço da sua beleza
          </h2>
          <p className="mt-4 text-onyx/65">
            Cada tecnologia é uma promessa. Conduzida por médicos, individualizada para você.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 reveal">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full border transition-all min-h-[40px] ${
                tab === t
                  ? "bg-teal text-white border-teal"
                  : "bg-transparent text-onyx/70 border-teal/20 hover:border-teal/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(ITEMS[tab] || []).map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}