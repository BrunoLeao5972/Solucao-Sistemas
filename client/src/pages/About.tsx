import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Zap, Users, Target, ShieldCheck, Sparkles, MapPin, Calendar, Activity, Receipt, BarChart3, Headphones, Lock } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-[1] pointer-events-none" />
      <Navigation currentPage="/sobre" />

      {/* Hero Section — Solução Sistemas */}
      <section className="relative pt-60 pb-40 overflow-hidden">
        <div className="blur-shape w-[900px] h-[900px] bg-primary/10 -top-60 -left-60" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold mb-10 tracking-[0.2em] uppercase"
          >
            <Sparkles className="w-4 h-4 fill-primary" />
            <span>Tecnologia inteligente para gestão e crescimento do seu negócio</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black mb-10 tracking-tighter text-glow-white leading-[0.85]"
          >
            MAIS QUE SOFTWARE <br />
            <span className="text-glow-primary">RESULTADOS!</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-medium"
          >
            A Solução Sistemas oferta soluções de automação para a prosperidade de empresas, conectando processos e simplificando a gestão de ponta a ponta.
          </motion.p>
        </div>
      </section>

      {/* Stats Section — Solução no Brasil */}
      <section className="py-32 relative bg-white/[0.02] border-y border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { number: "27", label: "ESTADOS ATENDIDOS", sub: "Presença Nacional", icon: MapPin },
              { number: "15k+", label: "CLIENTES ATIVOS", sub: "Sucesso Comprovado", icon: Users },
              { number: "35+", label: "ANOS DE MERCADO", sub: "Tradição & Inovação", icon: Calendar },
              { number: "2Mi+", label: "USUÁRIOS/DIA", sub: "Escalabilidade Real", icon: Activity },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <p className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-primary transition-colors">{stat.number}</p>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary/60 mb-1">{stat.label}</p>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais — Extraídos do Site */}
      <section className="py-40 relative">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "100% Web",
                desc: "Acesse e gerencie seu negócio de qualquer lugar com tecnologia de ponta em nuvem.",
                icon: Zap,
                color: "from-blue-500/30 to-cyan-500/30"
              },
              {
                title: "Conexão Total",
                desc: "Integramos todos os seus processos, do ponto de venda ao pós-venda, com eficiência absoluta.",
                icon: Target,
                color: "from-primary/30 to-emerald-500/30"
              },
              {
                title: "Suporte Qualificado",
                desc: "Atendimento estendido por múltiplos canais para garantir que sua empresa nunca pare.",
                icon: ShieldCheck,
                color: "from-purple-500/30 to-pink-500/30"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Card className="p-16 h-full rounded-[4rem] bg-card/40 border-white/5 hover:border-primary/40 transition-all duration-700 relative overflow-hidden group backdrop-blur-3xl shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-black mb-6 text-white group-hover:text-primary transition-colors tracking-tighter">{item.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-medium">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section — Solução Sistemas */}
      <section className="py-40 relative overflow-hidden">
        <div className="blur-shape w-[700px] h-[700px] bg-emerald-500/10 -bottom-40 -right-40" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-8xl font-black mb-16 text-white tracking-tighter leading-none">GESTÃO DE <br /><span className="text-glow-primary">SUCESSO!</span></h2>
              <div className="space-y-10">
                {[
                  { title: "Emissão de NFC-e integrada ao sistema", desc: "Sistemas totalmente integrados com as exigências fiscais brasileiras.", icon: Receipt },
                  { title: "Relatórios Gerenciais", desc: "Múltiplos dashboards com auditoria para tomada de decisão estratégica.", icon: BarChart3 },
                  { title: "Pós-Venda Ativo", desc: "Relacionamento contínuo para acompanhar o desempenho do seu negócio.", icon: Headphones },
                  { title: "Segurança de Dados", desc: "Proteção total das informações da sua empresa com tecnologia de ponta.", icon: Lock }
                ].map((skill, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500 border border-white/5 group-hover:border-primary/40 group-hover:scale-110">
                      <skill.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight">{skill.title}</h4>
                      <p className="text-xl text-muted-foreground font-medium leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square rounded-[5rem] bg-gradient-to-br from-primary/30 to-transparent border-2 border-white/10 p-12 flex items-center justify-center overflow-hidden glass-premium shadow-[0_0_100px_rgba(34,197,94,0.2)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-[20s]" />
                <div className="relative z-10 text-center">
                   <div className="text-9xl font-black text-primary/10 mb-6 tracking-tighter">SOLUÇÃO</div>
                   <div className="text-6xl font-black text-white tracking-tighter">SISTEMAS</div>
                   <div className="text-3xl font-black text-primary mt-6 tracking-[0.5em] uppercase">Tecnologia</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section — High Impact */}
      <section className="py-60 relative">
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-premium p-20 md:p-32 rounded-[5rem] border-primary/30 shadow-[0_0_120px_rgba(34,197,94,0.3)]"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-12 text-white tracking-tighter leading-none">PRONTO PARA <br /><span className="text-glow-primary">PROSPERAR?</span></h2>
            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <Link href="/produtos">
                <Button variant="premium" size="xl" className="rounded-2xl px-11 sm:px-12 shadow-[0_0_80px_rgba(34,197,94,0.4)] tracking-widest uppercase font-black">
                  VER SOLUÇÕES
                </Button>
              </Link>
              <a href="https://wa.me/558533076262" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="xl" className="rounded-2xl border-white/20 bg-white/5 backdrop-blur-3xl px-11 sm:px-12 font-black tracking-widest uppercase">
                  FALAR COM TIME
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
