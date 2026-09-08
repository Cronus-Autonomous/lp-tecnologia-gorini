import { useEffect, useRef, useState } from "react";

const TECHS = ["BTL Aesthetics", "Exion", "Emsculpt Neo", "Emsella", "Emfemme 360", "Emtone", "Laser CO2"];

const STATS = [
  { value: 15, suffix: "+", label: "Anos de Tradição" },
  { value: 10000, suffix: "+", label: "Pacientes Atendidos" },
  { value: 100, suffix: "%", label: "Tecnologias Aprovadas FDA e Anvisa" },
];

function useCountUp(target, run) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return n;
}

function StatItem({ stat, run }) {
  const n = useCountUp(stat.value, run);
  const display = stat.value >= 1000 ? n.toLocaleString("pt-BR") : n;
  return (
    <div className="text-center">
      <p className="font-heading text-4xl sm:text-5xl text-teal">
        {display}
        <span className="text-gold">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.12em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}

export default function AuthorityBar() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setRun(true), io.disconnect()),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-white border-y border-teal/8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
          Tecnologias de referência internacional presentes na clínica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {TECHS.map((t) => (
            <span
              key={t}
              className="font-heading text-lg sm:text-xl text-onyx/55 hover:text-teal transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}