import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Utensils, GraduationCap, ShoppingBag, Truck, Wrench, Database, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "food-web",
    title: "Food Web",
    description: "Gestão inteligente para o setor de alimentação, com controle de mesas, comandas e estoque.",
    features: ["Controle de Mesas", "KDS Integrado", "Gestão de Estoque", "Relatórios Financeiros"],
    icon: Utensils,
    color: "from-blue-500/30 to-cyan-500/30"
  },
  {
    id: "varejo-web",
    title: "Varejo Web",
    description: "Automação comercial para lojas, com frente de caixa ágil e gestão de retaguarda completa.",
    features: ["Frente de Caixa (PDV)", "Módulo Fiscal", "Controle de Estoque", "Gestão de Vendas"],
    icon: ShoppingBag,
    color: "from-purple-500/30 to-pink-500/30"
  },
  {
    id: "educacao",
    title: "Educação",
    description: "Solução robusta para gestão escolar, desde o pedagógico até o financeiro.",
    features: ["Portal do Aluno", "Diário Eletrônico", "Gestão de Matrículas", "Módulo Financeiro"],
    icon: GraduationCap,
    color: "from-yellow-500/30 to-orange-500/30"
  },
  {
    id: "delivery",
    title: "Delivery",
    description: "Plataforma de entregas com integração total e monitoramento em tempo real.",
    features: ["App de Delivery", "Rastreamento", "Integração iFood", "Painel de Pedidos"],
    icon: Truck,
    color: "from-red-500/30 to-orange-500/30"
  },
  {
    id: "servicos",
    title: "Serviços",
    description: "Gestão de ordens de serviço e contratos para prestadores de serviços e oficinas.",
    features: ["Ordens de Serviço", "Controle de Peças", "Agenda Técnica", "Faturamento"],
    icon: Wrench,
    color: "from-green-500/30 to-emerald-500/30"
  },
  {
    id: "kds-vision",
    title: "KDS Vision",
    description: "Monitor de produção para cozinhas que elimina erros e aumenta a velocidade de entrega.",
    features: ["Display 100% Web", "Tempo de Preparo", "Priorização de Pedidos", "Sync em Tempo Real"],
    icon: Database,
    color: "from-emerald-500/30 to-teal-500/30"
  },
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <div className="bg-noise absolute inset-0 z-[1] pointer-events-none" />
      <Navigation currentPage="/produtos" />

      {/* Hero Section — Soluções WOW */}
      <section className="relative pt-52 pb-32 overflow-hidden">
        <div className="blur-shape w-[800px] h-[800px] bg-primary/10 -top-40 -right-40" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold mb-10 tracking-[0.2em] uppercase"
            >
              <Sparkles className="w-4 h-4 fill-primary" />
              <span>Portfólio de Soluções Inteligentes</span>
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-glow-white leading-none">
              TECNOLOGIA PARA <br />
              <span className="text-glow-primary">PROSPERAR.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
              Explore nosso ecossistema de softwares projetados para <span className="text-white font-bold">revolucionar a gestão</span> do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid — Design WOW */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -20, scale: 1.02 }}
                >
                  <Link href={`/produtos/${sol.id}`}>
                    <Card className="group p-12 rounded-[4rem] bg-card/30 border-white/5 hover:border-primary/40 transition-all duration-700 cursor-pointer h-full flex flex-col relative overflow-hidden backdrop-blur-3xl shadow-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                      
                      <div className="relative z-10">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="w-10 h-10" />
                        </div>
                        <h3 className="text-4xl font-black mb-6 text-white group-hover:text-primary transition-colors tracking-tighter">{sol.title}</h3>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed flex-grow group-hover:text-foreground transition-colors font-medium">{sol.description}</p>
                        
                        <div className="mb-12 space-y-5">
                          {sol.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-4 text-lg text-muted-foreground group-hover:text-white transition-colors">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              </div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 text-primary font-black text-xl tracking-widest uppercase">
                          EXPLORAR <ArrowRight className="w-6 h-6 group-hover:translate-x-4 transition-transform duration-500" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section — Solução Sistemas */}
      <section className="py-40 relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-premium p-16 md:p-32 rounded-[5rem] text-center relative overflow-hidden border-primary/30"
          >
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-10 text-white tracking-tighter leading-none">GESTÃO <br /><span className="text-glow-primary">SIMPLIFICADA.</span></h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
                Faça parte do mundo de tecnologia Solução Sistemas e dê um grande passo para melhorar a eficiência e lucratividade do seu negócio agora mesmo.
              </p>
              <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
                <Button variant="premium" size="xl" className="rounded-2xl px-11 sm:px-12 shadow-[0_0_80px_rgba(34,197,94,0.4)] tracking-widest uppercase font-black">
                  FALAR COM CONSULTOR
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
