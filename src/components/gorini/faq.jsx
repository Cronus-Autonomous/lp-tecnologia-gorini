import { useState } from "react";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";

const FAQS = [
  {
    q: "Quanto tempo leva a recuperação dos procedimentos?",
    a: "A maioria das tecnologias de ponta (Exion, Emsculpt Neo, Emsella, Emtone) não exige recuperação — você retorna à rotina imediatamente após a sessão. Protocolos como Laser CO2 podem ter uma recuperação de poucos dias, sempre orientada pelo nosso corpo médico.",
  },
  {
    q: "Os procedimentos doem?",
    a: "As tecnologias de ponta foram projetadas para conforto. A maioria é descrita como aquecimento agradável ou contrações suaves. Quando há qualquer desconforto potencial, o protocolo é ajustado individualmente para garantir sua tolerância.",
  },
  {
    q: "Qual tecnologia é a indicada para mim?",
    a: "A indicação parte de uma avaliação médica individual. Você pode usar nosso diagnóstico online acima para ter uma prévia, mas o protocolo definitivo é definido pelo médico após avaliação presencial do seu caso.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Varia conforme tecnologia e resposta individual. Protocolos como Emsculpt Neo costumam ter 4 sessões; Exion, de 3 a 4. O plano completo é apresentado na sua avaliação, sem compromisso.",
  },
  {
    q: "Como faço a avaliação inicial?",
    a: "Basta preencher o formulário abaixo ou clicar em qualquer botão de agendamento. Nossa equipe retorna em até 1 hora útil para agendar sua avaliação com o especialista da área de seu interesse.",
  },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-teal/12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left min-h-[44px]"
        aria-expanded={open}
      >
        <span className="font-heading text-xl text-onyx">{item.q}</span>
        <ChevronDown size={20} className={`text-teal shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="pb-5 text-onyx/65 leading-relaxed max-w-2xl">{item.a}</p>
      )}
    </div>
  );
}

export default function Faq() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    window.open(
      `https://wa.me/5511999999999?text=${encodeURIComponent(`Olá! Sou ${form.name}. Gostaria de agendar uma avaliação na Clínica Gorini.`)}`,
      "_blank"
    );
  };

  return (
    <section id="faq" className="bg-silk py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="reveal">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl text-onyx text-balance">
            Tudo o que você precisa saber antes de começar
          </h2>
          <div className="mt-8">
            {FAQS.map((f) => (
              <FaqItem key={f.q} item={f} />
            ))}
          </div>
        </div>

        {/* Final capture */}
        <div className="reveal lg:sticky lg:top-28 self-start">
          <div className="rounded-3xl bg-teal text-white p-8 sm:p-10 shadow-[0_20px_50px_rgba(60,119,121,0.25)]">
            <h3 className="font-heading text-3xl">Pronta para começar?</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Agende sua avaliação com um especialista. Resposta em até 1 hora útil, com sigilo absoluto.
            </p>
            <form onSubmit={submit} className="mt-7 space-y-3">
              <input
                type="text"
                placeholder="Seu nome"
                aria-label="Nome"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl bg-white/95 px-4 py-3 text-sm text-onyx placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                placeholder="Seu WhatsApp"
                aria-label="WhatsApp"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl bg-white/95 px-4 py-3 text-sm text-onyx placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-onyx font-semibold uppercase tracking-[0.1em] text-sm rounded-xl px-6 py-3.5 min-h-[44px] hover:bg-gold-light transition-colors"
              >
                Agendar Avaliação <ArrowRight size={16} />
              </button>
            </form>
            <p className="mt-4 text-xs text-white/60 flex items-center gap-1.5">
              <ShieldCheck size={12} /> Sigilo absoluto · Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}