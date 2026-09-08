import { useState } from "react";
import { ArrowRight, Check, Sparkles, RotateCcw } from "lucide-react";

const AREAS = [
  { id: "papada", label: "Papada / Contorno", icon: "🧖‍♀️" },
  { id: "flacidez", label: "Flacidez Corporal", icon: "✨" },
  { id: "intima", label: "Saúde Íntima", icon: "🌸" },
  { id: "celulite", label: "Celulite", icon: "💧" },
  { id: "facial", label: "Rejuvenescimento Facial", icon: "💆‍♀️" },
];

const OBJETIVOS = {
  papada: [
    { id: "firmeza", label: "Firmeza sem cirurgia", proto: "Exion", desc: "Radiofrequência + ultrassom que estimulam seu próprio colágeno e ácido hialurônico." },
    { id: "definicao", label: "Definição do contorno", proto: "Exion + Laser CO2", desc: "Combinação de firmeza e renovação profunda da pele." },
  ],
  flacidez: [
    { id: "firmeza", label: "Firmeza sem cirurgia", proto: "Exion + Emsculpt Neo", desc: "Tonificação muscular e estímulo de colágeno em 30 minutos." },
    { id: "definicao", label: "Definição muscular", proto: "Emsculpt Neo", desc: "Queima de gordura (-30%) e tonificação muscular (+25%)." },
  ],
  intima: [
    { id: "firmeza", label: "Recuperar qualidade de vida", proto: "Emsella", desc: "Fortalecimento do assoalho pélvico em 28 minutos, sem dor." },
    { id: "definicao", label: "Rejuvenescimento íntimo", proto: "Emfemme 360", desc: "Saúde íntima e rejuvenescimento sem cirurgia e sem dor." },
  ],
  celulite: [
    { id: "firmeza", label: "Tratar celulite na raiz", proto: "Emtone", desc: "Elimina a 'casca de laranja' tratando celulite e flacidez simultaneamente." },
    { id: "definicao", label: "Firmeza + definição", proto: "Emtone + Emsculpt Neo", desc: "Combate à celulite com tonificação muscular associada." },
  ],
  facial: [
    { id: "firmeza", label: "Renovar minha pele", proto: "Laser CO2 Fracionado", desc: "O padrão-ouro do rejuvenescimento facial profundo." },
    { id: "definicao", label: "Estimular colágeno", proto: "Exion", desc: "A única tecnologia que une RF e ultrassom para ácido hialurônico próprio." },
  ],
};

export default function ProtocolWidget() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(null);
  const [objetivo, setObjetivo] = useState(null);
  const [nome, setNome] = useState("");

  const resultado = area && objetivo ? OBJETIVOS[area].find((o) => o.id === objetivo) : null;

  const reset = () => {
    setStep(1);
    setArea(null);
    setObjetivo(null);
    setNome("");
  };

  const sendWhatsApp = () => {
    const msg = `Olá! Fiz o diagnóstico online da Clínica Gorini.\nÁrea: ${AREAS.find((a) => a.id === area)?.label}\nObjetivo: ${resultado?.label}\nProtocolo recomendado: ${resultado?.proto}${nome ? `\nNome: ${nome}` : ""}\nGostaria de agendar minha avaliação.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="protocolo" className="bg-silk py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-center reveal">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            Diagnóstico Personalizado
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl text-onyx text-balance">
            Descubra qual tecnologia ou protocolo é o ideal para você{" "}
            <span className="italic text-teal">em 2 cliques.</span>
          </h2>
        </div>

        <div className="mt-12 reveal glass rounded-3xl border border-teal/10 p-6 sm:p-10 shadow-[0_10px_40px_rgba(60,119,121,0.08)]">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    step >= s ? "bg-teal" : "bg-teal/15"
                  }`}
                />
                <p className={`mt-2 text-[10px] uppercase tracking-[0.15em] ${step >= s ? "text-teal" : "text-muted-foreground"}`}>
                  {s === 1 ? "Área" : s === 2 ? "Objetivo" : "Resultado"}
                </p>
              </div>
            ))}
          </div>

          {/* Step 1: Area */}
          {step === 1 && (
            <div>
              <h3 className="font-heading text-2xl text-onyx mb-6">Qual área deseja tratar?</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {AREAS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setArea(a.id);
                      setObjetivo(null);
                      setStep(2);
                    }}
                    className="group text-left rounded-2xl border border-teal/15 bg-white/60 p-5 hover:border-teal hover:bg-white transition-all min-h-[88px]"
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <p className="mt-2 font-medium text-onyx group-hover:text-teal transition-colors">
                      {a.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Objective */}
          {step === 2 && (
            <div>
              <h3 className="font-heading text-2xl text-onyx mb-6">
                Qual é o seu principal objetivo?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {OBJETIVOS[area].map((o) => (
                  <button
                    key={o.id}
                    onClick={() => {
                      setObjetivo(o.id);
                      setStep(3);
                    }}
                    className="group text-left rounded-2xl border border-teal/15 bg-white/60 p-5 hover:border-teal hover:bg-white transition-all min-h-[88px]"
                  >
                    <Sparkles className="text-gold mb-2" size={18} />
                    <p className="font-medium text-onyx group-hover:text-teal transition-colors">
                      {o.label}
                    </p>
                  </button>
                ))}
              </div>
              <button onClick={reset} className="mt-6 text-sm text-muted-foreground hover:text-teal transition-colors">
                ← Voltar
              </button>
            </div>
          )}

          {/* Step 3: Result */}
          {step === 3 && resultado && (
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-teal text-sm font-semibold uppercase tracking-[0.12em]">
                <Check size={16} /> Seu protocolo recomendado
              </div>
              <h3 className="mt-3 font-heading text-3xl sm:text-4xl text-onyx">
                {resultado.proto}
              </h3>
              <p className="mt-3 text-onyx/70 max-w-xl mx-auto sm:mx-0">{resultado.desc}</p>

              <div className="mt-6 max-w-md mx-auto sm:mx-0">
                <input
                  type="text"
                  placeholder="Seu nome (opcional)"
                  aria-label="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl border border-teal/15 bg-white/70 px-4 py-3 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                <button
                  onClick={sendWhatsApp}
                  className="shimmer-cta inline-flex items-center justify-center gap-2 text-white font-semibold uppercase tracking-[0.1em] text-sm rounded-xl px-6 py-3 min-h-[44px] hover:scale-[1.02] transition-transform"
                >
                  Enviar para o WhatsApp <ArrowRight size={16} />
                </button>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 text-teal border border-teal/25 rounded-xl px-6 py-3 min-h-[44px] text-sm font-medium hover:bg-teal/5 transition-colors"
                >
                  <RotateCcw size={15} /> Refazer diagnóstico
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}