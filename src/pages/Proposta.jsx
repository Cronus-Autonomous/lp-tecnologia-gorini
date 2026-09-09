import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  UserCheck, 
  BadgeDollarSign, 
  Sparkles, 
  Repeat, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowDown, 
  Info,
  CheckCircle2,
  Zap,
  Target,
  BarChart3,
  Search,
  Sliders,
  Rocket
} from 'lucide-react';
import performImg from "@/assets/perfor-ado.png"; // Certifique-se de que a imagem está na pasta public/assets

// Componente utilitário de Tooltip (sem sintaxe de tipos TypeScript)
const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group/tooltip inline-block w-full">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block z-50 w-64 p-2 bg-slate-900 text-white text-xs rounded-md shadow-xl border border-slate-700 pointer-events-none text-center animate-in fade-in zoom-in-95 duration-150">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  );
};

export default function Proposta() {
  const [ticketMedio, setTicketMedio] = useState(500);

  // Mapeamento de Etapas da Demanda
  const etapasDemanda = [
    { id: 1, title: '1. Gerar Demanda', desc: 'Atração inicial e geração de tráfego/leads qualificados.', icon: Users },
    { id: 2, title: '2. Atender Demanda', desc: 'Primeiro contato rápido e humanizado para pré-qualificação.', icon: MessageSquare },
    { id: 3, title: '3. Virar Agendamento', desc: 'Conversão da conversa em horário reservado na agenda.', icon: Calendar },
    { id: 4, title: '4. Aparecer (Show-up)', desc: 'Garantia de presença no dia e horário marcados.', icon: UserCheck },
    { id: 5, title: '5. Vender para Ela', desc: 'Fechamento de pacotes, planos ou serviços premium.', icon: BadgeDollarSign },
    { id: 6, title: '6. Entregar Boa Experiência', desc: 'Padrão de excelência no atendimento e entrega de resultados.', icon: Sparkles },
    { id: 7, title: '7. Comprar Novamente', desc: 'Retenção, recompras contínuas e indicações.', icon: Repeat },
  ];

  // Cenários de Falha
  const cenariosFalha = [
    'Não consegue gerar pacientes/clientes suficientes para justificar o negócio.',
    'Não consegue manter fluxo constante e previsível de novos leads.',
    'Não consegue fazer pacientes agendados realmente aparecerem (Alto No-Show).',
    'Não consegue fechar vendas de pacotes ou planos recorrentes.',
    'Não consegue entregar uma experiência de alto nível de forma consistente.',
    'Não consegue reter clientes por muitos meses nem estimular recompras.'
  ];

  // Mecanismos para Evitar Falha
  const mecanismosFalha = [
    {
      problema: 'Oferta genérica e pouco atrativa.',
      solucao: 'Reempacotar em programas premium (pacotes de resultado, não só sessões soltas).'
    },
    {
      problema: 'Sem sistema previsível de geração de leads.',
      solucao: 'Campanhas + funil de captação automatizado e validados.'
    },
    {
      problema: 'Sem follow-up ou lembrete estruturado.',
      solucao: 'Automação de WhatsApp/e-mail para confirmação e nutrição até a chegada.'
    },
    {
      problema: 'Sem roteiro/prova social na venda.',
      solucao: 'Script de vendas estruturado + CRM para acompanhamento.'
    },
    {
      problema: 'Atendimento manual que não escala.',
      solucao: 'Playbook padronizado + workflows para experiência consistente.'
    },
    {
      problema: 'Sem estratégia de retenção e ascensão.',
      solucao: 'Programas de fidelidade + ofertas de upsell/cross-sell automatizadas.'
    }
  ];

  // Etapas de Construção
  const etapasConstrucao = [
    { num: '01', title: 'Escolher mercado certo ou consolidar ICP', icon: Target },
    { num: '02', title: 'Construir uma oferta fit real', icon: Sparkles },
    { num: '03', title: 'Atrair clientes qualificados', icon: Users },
    { num: '04', title: 'Conduzir leads por triagem, follow-up e lembretes', icon: MessageSquare },
    { num: '05', title: 'Chegar no SDR com prospect educado e pronto', icon: UserCheck },
    { num: '06', title: 'Fechar venda usando frameworks e scripts validados', icon: BadgeDollarSign },
    { num: '07', title: 'Entregar RESULTADO com padrão estruturado', icon: CheckCircle2 },
    { num: '08', title: 'Coletar feedback de performance', icon: Search },
    { num: '09', title: 'Identificar gargalos estruturais', icon: Sliders },
    { num: '10', title: 'Otimizar continuamente', icon: Zap },
    { num: '11', title: 'Escalar o negócio', icon: Rocket }
  ];

  // Simulação do Fluxo
  const sim = {
    leads: 200,
    tradicional: { atendidos: 80, agendados: 30, compareceram: 15, fecharam: 5 },
    infra: { atendidos: 180, agendados: 110, compareceram: 85, fecharam: 45 }
  };

  const faturamentoTradicional = sim.tradicional.fecharam * ticketMedio;
  const faturamentoInfra = sim.infra.fecharam * ticketMedio;
  const ganhoAdicional = faturamentoInfra - faturamentoTradicional;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* HEADER */}
        <div className="text-center space-y-4 border-b border-slate-800 pb-10">
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Proposta de Arquitetura de Vendas
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Jornada de Implantação Autonomous
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Mapeamento completo do processo de demanda, diagnóstico de falhas operacionais e a infraestrutura de otimização contínua.
          </p>
        </div>

        {/* 1. MAPEAMENTO DO PROCESSO DE DEMANDA */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 border-l-4 border-blue-500 pl-4">
            <h2 className="text-2xl font-bold text-white">1. Mapeamento do Processo de Geração de Demanda</h2>
          </div>
          <p className="text-slate-400 text-sm">O fluxo ideal que todo cliente percorre do primeiro contato à fidelização:</p>

          <div className="relative flex flex-col items-center space-y-4">
            {etapasDemanda.map((item, idx) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={item.id}>
                  <Tooltip text={item.desc}>
                    <div className="w-full bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 rounded-xl p-4 flex items-center justify-between shadow-lg cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-200 group-hover:text-white">{item.title}</h3>
                          <p className="text-xs text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                      <Info className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </Tooltip>
                  {idx < etapasDemanda.length - 1 && (
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-slate-700" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex justify-center"><ArrowDown className="text-slate-600 animate-bounce" /></div>

        {/* 2. CENÁRIOS DE FALHA */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 border-l-4 border-red-500 pl-4">
            <h2 className="text-2xl font-bold text-white">2. Mapeamento de Cenários de Falhas</h2>
          </div>
          <p className="text-slate-400 text-sm">Gargalos críticos que impedem a escala e minam a lucratividade das operações convencionais:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cenariosFalha.map((falha, index) => (
              <Tooltip key={index} text="Este obstáculo compromete diretamente a previsibilidade e o crescimento sustentável.">
                <div className="bg-red-950/20 border border-red-900/30 hover:border-red-500/50 rounded-xl p-4 flex items-start space-x-3 hover:bg-red-900/20 transition-all duration-300">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">{falha}</p>
                </div>
              </Tooltip>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex justify-center"><ArrowDown className="text-slate-600 animate-bounce" /></div>

        {/* 3. MECANISMOS PARA EVITAR FALHA */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 border-l-4 border-emerald-500 pl-4">
            <h2 className="text-2xl font-bold text-white">3. Mecanismos para Evitar Falhas (Fase 1: Mapeamento)</h2>
          </div>

          <div className="space-y-3">
            {mecanismosFalha.map((item, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-red-400/90 text-xs sm:text-sm">
                    <span className="font-semibold text-red-500">Problema:</span>
                    <span>{item.problema}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-400 text-xs sm:text-sm font-medium border-t md:border-t-0 md:border-l border-slate-800 pt-2 md:pt-0 md:pl-4">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span><strong className="text-emerald-500">Solução:</strong> {item.solucao}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex justify-center"><ArrowDown className="text-slate-600 animate-bounce" /></div>

        {/* 4. FASE DE CONSTRUÇÃO */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3 border-l-4 border-indigo-500 pl-4">
            <h2 className="text-2xl font-bold text-white">4. Fase 1: Construção & Implantação</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {etapasConstrucao.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Tooltip key={idx} text={`Etapa ${item.num}: essencial para consolidar a infraestrutura autônoma.`}>
                  <div className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/90 rounded-xl p-3.5 flex items-center space-x-3 transition-all duration-200">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">
                      {item.num}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item.title}</span>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex justify-center"><ArrowDown className="text-slate-600 animate-bounce" /></div>

        {/* 5. RESULTADOS DE PERFORMANCE (IMAGEM) */}
        <section className="space-y-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
          <div className="inline-flex items-center space-x-2 text-indigo-400 mb-2">
            <BarChart3 className="w-5 h-5" />
            <h3 className="font-semibold text-lg">Resultados Reais da Implantação</h3>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Impacto no Ticket Médio (+45% em 3 meses) e Elevação Sustentável do Volume de Agendamentos.
          </p>

          <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-2xl mx-auto bg-slate-950 p-2">
            <img 
              src={performImg} 
              alt="Evolução da Performance" 
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = 'block';
                }
              }}
            />
            <div className="hidden p-8 text-slate-500 text-sm border border-dashed border-slate-800 rounded-lg">
              [Imagem perfor-ado.png recarregada - certifique-se de que a imagem está na pasta public]
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="flex justify-center"><ArrowDown className="text-slate-600 animate-bounce" /></div>

        {/* 6. SIMULAÇÃO INTERATIVA DE FLUXO (ANTES VS DEPOIS) */}
        <section className="space-y-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold">
              Simulador Prático
            </span>
            <h2 className="text-2xl font-bold text-white">Fluxo de Geração de Demanda na Prática</h2>
            <p className="text-slate-400 text-sm">
              Veja a diferença de eficiência entre um modelo tradicional vs Infraestrutura Autonomous operando sobre 200 Leads.
            </p>
          </div>

          {/* CONTROLE DE TICKET MÉDIO */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <BadgeDollarSign className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Simular Ticket Médio do Serviço:</span>
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <input 
                type="range" 
                min="100" 
                max="3000" 
                step="50" 
                value={ticketMedio}
                onChange={(e) => setTicketMedio(Number(e.target.value))}
                className="w-full sm:w-48 accent-emerald-500 cursor-pointer"
              />
              <span className="text-lg font-bold text-emerald-400 font-mono w-24 text-right">
                R$ {ticketMedio.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>

          {/* FLUXO COMPARATIVO PASSO A PASSO */}
          <div className="space-y-4 pt-4">
            
            {/* ETAPA 1 */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Passo 1: Atração / Entrada</span>
                <span className="text-blue-400">200 Leads Entrada</span>
              </div>
              <p className="text-sm text-slate-300 font-medium">Captação inicial nas campanhas</p>
            </div>

            {/* ETAPA 2 */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passo 2: Atendimento Inicial</div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-700">
                  Tradicional: {sim.tradicional.atendidos} atendidos (Perda de 60%)
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  Autonomous Infra: {sim.infra.atendidos} atendidos (+125%)
                </span>
              </div>
            </div>

            {/* ETAPA 3 */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passo 3: Agendamentos Convertidos</div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-700">
                  Tradicional: {sim.tradicional.agendados} agendados
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  Autonomous Infra: {sim.infra.agendados} agendados (+266%)
                </span>
              </div>
            </div>

            {/* ETAPA 4 */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passo 4: Comparecimento (Show-up)</div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-700">
                  Tradicional: {sim.tradicional.compareceram} compareceram
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  Autonomous Infra: {sim.infra.compareceram} compareceram (+466%)
                </span>
              </div>
            </div>

            {/* ETAPA 5 */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Passo 5: Vendas Fechadas</div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-700">
                  Tradicional: {sim.tradicional.fecharam} clientes
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Zap className="w-3 h-3 text-emerald-400" />
                  Autonomous Infra: {sim.infra.fecharam} clientes (+800%)
                </span>
              </div>
            </div>

          </div>

          {/* RESUMO FINANCEIRO */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-xs text-slate-400 font-medium">Faturamento Tradicional</p>
              <p className="text-xl font-bold text-slate-300 mt-1 font-mono">
                R$ {faturamentoTradicional.toLocaleString('pt-BR')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50">
              <p className="text-xs text-emerald-400 font-medium">Faturamento com Autonomous</p>
              <p className="text-xl font-bold text-emerald-300 mt-1 font-mono">
                R$ {faturamentoInfra.toLocaleString('pt-BR')}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/40 to-emerald-900/40 border border-blue-500/30">
              <p className="text-xs text-blue-300 font-medium">Ganho Real Adicional</p>
              <p className="text-xl font-extrabold text-white mt-1 font-mono">
                + R$ {ganhoAdicional.toLocaleString('pt-BR')}
              </p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}