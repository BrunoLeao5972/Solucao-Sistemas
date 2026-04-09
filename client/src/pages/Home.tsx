import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Utensils, GraduationCap, ShoppingBag, Truck, Wrench, Database, Zap, Shield, Globe, Sparkles, LayoutGrid } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const solutions = [
  {
    id: "Bares e Restaurantes",
    title: "Bares e Restaurantes",
    description: "Gestão completa para restaurantes, bares e cafeterias com controle total de mesas e pedidos.",
    icon: Utensils,
    color: "from-emerald-400/20 to-cyan-400/20"
  },
  {
    id: "Comércio e Varejo",
    title: "Comércio e Varejo",
    description: "Automação comercial inteligente para lojas e comércios com frente de caixa ágil.",
    icon: ShoppingBag,
    color: "from-blue-400/20 to-indigo-400/20"
  },
  {
    id: "Educação",
    title: "Educação",
    description: "Sistema integrado para gestão escolar, acadêmica e financeira de instituições de ensino.",
    icon: GraduationCap,
    color: "from-purple-400/20 to-pink-400/20"
  },
  {
    id: "Delivery & Logística",
    title: "Delivery & Logística",
    description: "Plataforma de entregas otimizada para máxima velocidade e satisfação do cliente.",
    icon: Truck,
    color: "from-red-400/20 to-orange-400/20"
  },
  {
    id: "serviços-de-ti",
    title: "Serviços de TI",
    description: "Controle de ordens de serviço, contratos e prestação de serviços com precisão.",
    icon: Wrench,
    color: "from-yellow-400/20 to-amber-400/20"
  },
  {
    id: "Flow KDS",
    title: "Flow KDS",
    description: "O KDS (Kitchen Display System), um sistema de gestão de cozinha que sincroniza pedidos em tempo real com tecnologia 100% web.",
    icon: Database,
    color: "from-primary/20 to-emerald-400/20"
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-background relative selection:bg-primary/40">
      <div className="bg-noise absolute inset-0 z-[1] pointer-events-none" />
      
      <Navigation currentPage="/" />

      {/* Hero Section — Solução Sistemas WOW */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Parallax */}
        <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 brightness-[0.3]"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dynamic Glows — Solução Green */}
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-emerald-600/10 blur-[180px] rounded-full animate-pulse delay-700" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="container relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold mb-10 tracking-[0.2em] uppercase"
          >
            <Sparkles className="w-4 h-4 fill-primary" />
            <span>O Futuro da Automação</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[8.5rem] font-black mb-8 tracking-tighter leading-[0.85] text-glow-white"
          >
            MAIS CONTROLE, <br />
            <span className="text-glow-primary">MENOS PREJUÍZO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Sua solução completa de tecnologia para <span className="text-white font-bold">controle total e lucratividade máxima.</span> Automação inteligente para quem não aceita menos que a perfeição.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <Link href="/produtos">
              <Button size="xl" className="btn-wow bg-primary text-primary-foreground font-black tracking-wider text-lg sm:text-xl px-8 sm:px-9 rounded-2xl group">
                CONHECER SOLUÇÕES <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
              <Button
                size="xl"
                variant="outline"
                className="btn-wow border-white/10 bg-white/5 backdrop-blur-3xl hover:bg-white/10 text-lg sm:text-xl font-bold rounded-2xl px-8 sm:px-9"
              >
                FALAR COM CONSULTOR
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/60 font-bold">Explore o Ecossistema</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Diferenciais Section — Solução Sistemas */}
      <section className="py-40 relative">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Tecnologia 100% Web",
                description: "Acesse sua empresa de qualquer lugar, a qualquer momento. Gestão em nuvem com disponibilidade total.",
                icon: Globe,
              },
              {
                title: "Compromisso com Resultados",
                description: "Nossos sistemas são desenhados para aumentar sua margem de lucro e reduzir desperdícios operacionais.",
                icon: Zap,
              },
              {
                title: "Suporte Especializado",
                description: "Atendimento qualificado e estendido para garantir que sua operação nunca pare. Estamos com você.",
                icon: Shield,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                transition={{ delay: i * 0.2 }}
                className="group p-12 rounded-[3.5rem] glass-premium border-white/5 hover:border-primary/40 transition-all duration-700 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 border border-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-black mb-6 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções Section — Grid WOW */}
      <section className="py-40 bg-white/[0.02] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">QUAL O SEU <br /><span className="text-glow-primary">SEGMENTO?</span></h2>
              <p className="text-2xl text-muted-foreground font-medium">Soluções verticais desenhadas para a realidade do seu mercado.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/produtos">
                <Button variant="outline" size="lg" className="btn-wow border-primary/30 text-primary rounded-2xl font-bold tracking-widest uppercase">Ver Todas as Soluções</Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <Link key={sol.id} href={`/produtos/${sol.id}`} className="block h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -20, scale: 1.02 }}
                    className="group relative h-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                    <Card className="p-12 rounded-[3.5rem] bg-card/40 border-white/5 group-hover:border-primary/40 transition-all duration-500 cursor-pointer h-full backdrop-blur-3xl relative z-10 overflow-hidden shadow-2xl flex flex-col">
                      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                         <Icon className="w-32 h-32 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 border border-primary/20">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black mb-4 text-white group-hover:text-primary transition-colors tracking-tight">{sol.title}</h3>
                      <p className="text-xl text-muted-foreground mb-10 leading-relaxed group-hover:text-foreground transition-colors font-medium">{sol.description}</p>
                      <div className="flex items-center gap-3 text-primary font-black text-lg tracking-widest uppercase mt-auto">
                        Explorar <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                      </div>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section — Solução no Brasil */}
      <section className="py-40 relative">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {[
              { number: "27", label: "ESTADOS ATENDIDOS", sub: "Presença Nacional" },
              { number: "15k+", label: "CLIENTES ATIVOS", sub: "Sucesso Comprovado" },
              { number: "25y+", label: "DE MERCADO", sub: "Tradição & Inovação" },
              { number: "1M+", label: "USUÁRIOS/DIA", sub: "Escalabilidade Real" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <p className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter group-hover:text-primary transition-colors">{stat.number}</p>
                <p className="text-xs font-black uppercase tracking-[0.4em] text-primary/60 mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final High-Impact CTA */}
      <section className="py-60 relative overflow-hidden">
        <div className="blur-shape w-[700px] h-[700px] bg-primary/20 -top-20 -left-20" />
        <div className="blur-shape w-[700px] h-[700px] bg-emerald-500/10 -bottom-20 -right-20 delay-1000" />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-premium p-16 md:p-32 rounded-[5rem] text-center border-primary/30 shadow-[0_0_120px_rgba(34,197,94,0.3)]"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black mb-12 text-white tracking-tighter leading-none"
            >
              SUA EMPRESA EM <br /><span className="text-glow-primary">OUTRO NÍVEL.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto font-medium"
            >
              Faça parte do mundo de tecnologia Solução Sistemas agora mesmo e simplifique sua gestão para sempre.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-8 justify-center"
            >
              <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
                <Button size="xl" className="btn-wow bg-primary text-primary-foreground font-black tracking-widest px-11 sm:px-12 rounded-2xl text-lg sm:text-xl shadow-[0_0_60px_rgba(34,197,94,0.4)]">
                  FALAR COM VENDAS
                </Button>
              </a>
              <Link href="/produtos">
                <Button size="xl" variant="outline" className="btn-wow border-white/20 bg-white/5 backdrop-blur-3xl px-11 sm:px-12 rounded-2xl text-lg sm:text-xl font-bold">
                  VER SOLUÇÕES
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
