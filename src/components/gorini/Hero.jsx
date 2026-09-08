import { useState } from "react";
import { ArrowRight, ShieldCheck, Stethoscope, Award } from "lucide-react";
import doctorHeroImg from "@/assets/doctor-hero.jpg";

const HERO_IMG =
  "https://media.base44.com/images/public/6a9b364e8be02771ae4dcfb6/450e10b3e_generated_7458cf29.jpg";

const INTERESTS = ["Tecnologias de Ponta", "Harmonização", "Corporal", "Estética Facial"];

export default function Hero() {
  const [form, setForm] = useState({ name: "", phone: "", interest: INTERESTS[0] });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    const msg = `Olá! Sou ${form.name}. Gostaria de agendar uma avaliação — Interesse: ${form.interest}.`;
    setSent(true);
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="topo" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-silk bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${doctorHeroImg})` }}>
      {/* <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-teal/5 rounded-bl-[200px] -z-0" /> */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        {/* Left: copy + form */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal bg-teal/8 border border-teal/15 rounded-full px-4 py-2">
            <ShieldCheck size={14} /> Respaldo Médico & Tecnologias de Referência Internacional
          </span>

          <h1 className="mt-7 font-heading text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[4.2rem] text-onyx tracking-tight text-balance">
            Resultados Reais e Naturais Sem Interromper Sua Rotina:{" "}
            <span className="text-teal italic">O Futuro da Medicina Estética</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-onyx/70">
            Protocolos médico-científicos individualizados que combinam as tecnologias mais
            avançadas do mundo ao cuidado exclusivo da Clínica Gorini.
          </p>

          {/* Floating inline capture form */}
          <form
            id="agendar"
            onSubmit={handleSubmit}
            className="mt-9 glass rounded-2xl border border-teal/10 p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                aria-label="Nome"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-teal/15 bg-white/70 px-4 py-3 text-sm text-onyx placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                aria-label="WhatsApp"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-teal/15 bg-white/70 px-4 py-3 text-sm text-onyx placeholder:text-muted-foreground focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              />
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <select
                aria-label="Área de interesse"
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="flex-1 rounded-xl border border-teal/15 bg-white/70 px-4 py-3 text-sm text-onyx focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
              >
                {INTERESTS.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
              <button
                type="submit"
                className="shimmer-cta group inline-flex items-center justify-center gap-2 text-white font-semibold uppercase tracking-[0.1em] text-sm rounded-xl px-6 py-3 min-h-[44px] transition-transform hover:scale-[1.02]"
              >
                {sent ? "Abrindo WhatsApp…" : "Agendar Avaliação"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
              <ShieldCheck size={12} /> Resposta em até 1 hora útil · Sigilo absoluto
            </p>
          </form>
        </div>

        {/* Right: doctor card */}
        <div className="reveal relative">
          {/* <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(60,119,121,0.18)]">
            <Image
              src={HERO_IMG}
              alt="Interior da Clínica Gorini"
              className="w-full h-[420px] sm:h-[560px] object-cover"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent" />
          </div> */}

          {/* Floating authority badges */}
          <div className="absolute -left-3 sm:-left-6 glass rounded-2xl border border-gold/20 px-5 py-4 shadow-lg flex items-center gap-3" style={{ top: "calc(50% + 285px)" }}>
            <Award className="text-gold" size={26} />
            <div>
              <p className="font-heading text-2xl text-onyx leading-none">+10 mil</p>
              <p className="text-xs text-muted-foreground mt-1">procedimentos realizados</p>
            </div>
          </div>
          <div className="absolute -left-3 sm:left-60 glass rounded-2xl border border-gold/20 px-5 py-4 shadow-lg flex items-center gap-3" style={{ top: "calc(50% + 285px)" }}>
            <Stethoscope className="text-teal" size={26} />
            <div>
              <p className="font-heading text-xl text-onyx leading-none">Membros SBCP</p>
              <p className="text-xs text-muted-foreground mt-1">Sociedade Brasileira de Cirurgia Plástica</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}