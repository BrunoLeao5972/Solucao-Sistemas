import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Database, UserCheck } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <div className="bg-noise absolute inset-0 z-[1] pointer-events-none" />
      <Navigation currentPage="/privacidade" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="blur-shape w-[700px] h-[700px] bg-primary/10 -top-40 -right-40" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold mb-8 tracking-[0.2em] uppercase"
          >
            <Shield className="w-4 h-4 fill-primary" />
            <span>Proteção de Dados</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6"
          >
            POLÍTICA DE <br />
            <span className="text-glow-primary">PRIVACIDADE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl font-medium"
          >
            Sua privacidade é nossa prioridade. Conheça como coletamos, usamos e protegemos suas informações.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative">
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Introdução */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">1. Introdução</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Solução Sistemas está comprometida em proteger a privacidade e a segurança dos dados de seus clientes, 
                parceiros e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </div>

            {/* Dados Coletados */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">2. Dados que Coletamos</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Dados de identificação:</strong> nome, CPF/CNPJ, endereço, telefone, e-mail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Dados empresariais:</strong> razão social, inscrições estadual e municipal, dados fiscais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Dados de uso:</strong> informações sobre como você utiliza nossos sistemas e serviços</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, logs de acesso</span>
                </li>
              </ul>
            </div>

            {/* Uso dos Dados */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">3. Como Usamos Seus Dados</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fornecer, operar e melhorar nossos produtos e serviços</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Processar transações e emitir documentos fiscais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Prestar suporte técnico e atendimento ao cliente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Enviar comunicações sobre atualizações, novidades e ofertas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Cumprir obrigações legais e regulatórias</span>
                </li>
              </ul>
            </div>

            {/* Segurança */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">4. Segurança dos Dados</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais robustas para proteger suas informações contra 
                acesso não autorizado, alteração, divulgação ou destruição. Nossos sistemas utilizam criptografia, 
                firewalls, controles de acesso e monitoramento contínuo. Realizamos backups regulares e testes 
                de segurança periódicos.
              </p>
            </div>

            {/* Seus Direitos */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">5. Seus Direitos</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Acessar seus dados pessoais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Corrigir dados incompletos, inexatos ou desatualizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Solicitar a exclusão dos dados (direito ao esquecimento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Revogar consentimento a qualquer momento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Solicitar portabilidade dos dados</span>
                </li>
              </ul>
            </div>

            {/* Contato DPO */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-primary/20 bg-primary/5">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Contato - Encarregado de Dados (DPO)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso DPO:
              </p>
              <div className="space-y-2 text-lg">
                <p><strong className="text-white">E-mail:</strong> <a href="mailto:tic@solucaosistemas.net" className="text-primary hover:underline">tic@solucaosistemas.net</a></p>
                <p><strong className="text-white">Telefone:</strong> (85) 3307-6262</p>
              </div>
            </div>

            {/* Data Atualização */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Última atualização: 13 de abril de 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
