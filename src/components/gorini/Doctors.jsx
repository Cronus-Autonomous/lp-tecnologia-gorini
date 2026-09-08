import { Quote } from "lucide-react";

const DOCTORS = [
  {
    name: "Dr. [Nome do Sócio]",
    role: "Cirurgião Plástico · Membro SBCP",
    bio: "Formação acadêmica de excelência, com títulos de especialista e participação em congressos internacionais. Filosofia de trabalho baseada no respeito à identidade visual do paciente — resultados naturais, sem exageros.",
    initials: "DG",
  },
  {
    name: "Dra. [Nome da Sócia]",
    role: "Medicina Estética · Membro SBCD",
    bio: "Referência em tecnologias de ponta e protocolos individualizados. Conduz cada avaliação com rigor clínico e cuidado humanizado, sempre preservando a naturalidade da sua expressão.",
    initials: "DG",
  },
];

function DoctorCard({ doc }) {
  return (
    <div className="grid md:grid-cols-5 gap-6 items-center">
      {/* Portrait placeholder skeleton */}
      <div className="md:col-span-2">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-teal/10 to-gold/10 border border-teal/15">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-7xl text-teal/30">{doc.initials}</span>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-teal/15 to-transparent" />
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.15em] text-muted-foreground bg-white/70 backdrop-blur-sm rounded-full px-3 py-1">
            Foto do Dr.(a)
          </span>
        </div>
      </div>
      <div className="md:col-span-3 relative">
        <Quote className="absolute -top-6 -left-2 text-gold/20" size={56} />
        <h3 className="font-heading text-3xl text-onyx">{doc.name}</h3>
        <p className="mt-1 text-sm uppercase tracking-[0.12em] text-teal">{doc.role}</p>
        <p className="mt-5 text-onyx/70 leading-relaxed text-lg">{doc.bio}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Formação de Excelência", "Congressos Internacionais", "Resultados Naturais"].map((b) => (
            <span key={b} className="text-xs text-onyx/60 border border-teal/15 rounded-full px-3 py-1.5">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Doctors() {
  return (
    <section id="corpo-medico" className="bg-silk py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
            Corpo Médico
          </span>
          <h2 className="mt-4 font-heading text-3xl sm:text-5xl text-onyx text-balance">
            A Medicina por Trás da Sua Transformação
          </h2>
          <p className="mt-4 text-onyx/65">
            Tecnologia sem mãos experientes é apenas aparelho. Na Gorini, cada protocolo é
            assinado por médicos que respeitam a sua identidade.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {DOCTORS.map((d, i) => (
            <div key={i} className="reveal">
              <DoctorCard doc={d} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}