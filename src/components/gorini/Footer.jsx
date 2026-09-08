import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-onyx text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <p className="font-heading text-2xl text-white">Gorini</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
              Medicina estética de alta performance. Resultados reais e naturais, com respaldo médico e tecnologias de referência internacional.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold mb-4">Navegação</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#tecnologias" className="hover:text-white transition-colors">Tecnologias</a></li>
              <li><a href="#protocolo" className="hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#corpo-medico" className="hover:text-white transition-colors">Corpo Médico</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold mb-4">Contato</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone size={15} className="mt-0.5 text-teal" /> (11) 99999-9999</li>
              <li className="flex items-start gap-2"><Mail size={15} className="mt-0.5 text-teal" /> contato@clinicagorini.com.br</li>
              <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 text-teal" /> São Paulo · SP</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-gold mb-4">Atendimento</p>
            <p className="text-sm text-white/60 leading-relaxed">
              Seg a Sáb · 9h às 19h<br />
              Avaliação com hora marcada
            </p>
            <a
              href="#agendar"
              className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-onyx bg-gold rounded-full px-5 py-2.5 hover:bg-gold-light transition-colors"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Clínica Gorini · Todos os direitos reservados</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white/70 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}