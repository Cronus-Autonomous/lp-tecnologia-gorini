import { useState } from "react";
import { ArrowRight, Check, Sparkles, RotateCcw, ChevronRight } from "lucide-react";

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
    <section id="protocolo" className="relative py-20 sm:py-28 bg-[#3c7779] overflow-hidden">
      {/* Luzes decorativas sutis de fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.22em] text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/20 font-semibold shadow-sm">
            <Sparkles size={13} className="text-[#d4af37]" /> Diagnóstico Personalizado
          </span>
          <h2 className="mt-5 font-heading text-3xl sm:text-5xl text-white tracking-tight text-balance leading-tight">
            Descubra o protocolo ideal para você{" "}
            <span className="italic font-serif text-[#e6ca65]">em 2 cliques.</span>
          </h2>
        </div>

        {/* Card Principal em Glassmorphism */}
        <div className="mt-12 reveal backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500">
          
          {/* Barra de Progresso em Dourado */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div className="relative w-full h-1.5 bg-black/20 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] transition-all duration-700 ease-out rounded-full ${
                      step >= s ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </div>
                <p className={`mt-2.5 text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${
                  step >= s ? "text-[#f3e5ab]" : "text-white/40"
                }`}>
                  {s === 1 ? "01. Área" : s === 2 ? "02. Objetivo" : "03. Resultado"}
                </p>
              </div>
            ))}
          </div>

          {/* Passo 1: Área */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h3 className="font-heading text-2xl text-white font-light tracking-wide mb-6">
                Qual área você gostaria de transformar?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {AREAS.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setArea(a.id);
                      setObjetivo(null);
                      setStep(2);
                    }}
                    className="group relative text-left rounded-2xl border border-white/15 bg-white/5 p-5 hover:border-[#d4af37]/60 hover:bg-white/15 hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 transition-all duration-300 min-h-[92px] flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-2xl">{a.icon}</span>
                      <ChevronRight size={16} className="text-white/30 group-hover:text-[#f3e5ab] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-medium text-white group-hover:text-[#f3e5ab] transition-colors">
                      {a.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Passo 2: Objetivo */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h3 className="font-heading text-2xl text-white font-light tracking-wide mb-6">
                Qual é o seu objetivo principal?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {OBJETIVOS[area].map((o) => (
                  <button
                    key={o.id}
                    onClick={() => {
                      setObjetivo(o.id);
                      setStep(3);
                    }}
                    className="group text-left rounded-2xl border border-white/15 bg-white/5 p-5 hover:border-[#d4af37]/60 hover:bg-white/15 hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 transition-all duration-300 min-h-[96px] flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Sparkles className="text-[#d4af37] group-hover:scale-110 transition-transform" size={18} />
                      <ChevronRight size={16} className="text-white/30 group-hover:text-[#f3e5ab] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="font-medium text-white group-hover:text-[#f3e5ab] transition-colors">
                      {o.label}
                    </p>
                  </button>
                ))}
              </div>
              <button 
                onClick={reset} 
                className="mt-8 text-xs uppercase tracking-[0.15em] text-white/60 hover:text-[#f3e5ab] transition-colors flex items-center gap-1.5"
              >
                ← Voltar às áreas
              </button>
            </div>
          )}

          {/* Passo 3: Resultado */}
          {step === 3 && resultado && (
            <div className="animate-fadeIn text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-[#f3e5ab] text-xs font-semibold uppercase tracking-[0.18em] bg-[#d4af37]/10 px-3.5 py-1.5 rounded-full border border-[#d4af37]/20">
                <Check size={14} className="text-[#d4af37]" /> Protocolo Selecionado
              </div>
              
              <h3 className="mt-4 font-heading text-3xl sm:text-4xl text-white font-light tracking-wide">
                {resultado.proto}
              </h3>
              
              <p className="mt-3 text-white/80 leading-relaxed max-w-xl mx-auto sm:mx-0 text-sm sm:text-base">
                {resultado.desc}
              </p>

              <div className="mt-8 max-w-md mx-auto sm:mx-0">
                <input
                  type="text"
                  placeholder="Seu nome completo (opcional)"
                  aria-label="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3.5 justify-center sm:justify-start">
                <button
                  onClick={sendWhatsApp}
                  className="group relative inline-flex items-center justify-center gap-2.5 text-slate-950 font-semibold uppercase tracking-[0.12em] text-xs rounded-xl px-7 py-4 bg-gradient-to-r from-[#d4af37] via-[#e6ca65] to-[#d4af37] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_10px_25px_rgba(212,175,55,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Agendar via WhatsApp 
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 text-white/80 border border-white/20 hover:border-white/40 rounded-xl px-6 py-4 text-xs uppercase tracking-[0.12em] font-medium hover:bg-white/5 transition-all"
                >
                  <RotateCcw size={14} /> Refazer
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}