import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { motion } from "framer-motion";
import { FileText, Scale, CheckCircle, AlertTriangle, Handshake, RefreshCw } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <div className="bg-noise absolute inset-0 z-[1] pointer-events-none" />
      <Navigation currentPage="/termos" />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="blur-shape w-[700px] h-[700px] bg-primary/10 -top-40 -right-40" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-primary/20 text-primary text-sm font-bold mb-8 tracking-[0.2em] uppercase"
          >
            <Scale className="w-4 h-4 fill-primary" />
            <span>Condições de Uso</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] mb-6"
          >
            TERMOS DE <br />
            <span className="text-glow-primary">USO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl font-medium"
          >
            Ao utilizar nossos sistemas e serviços, você concorda com estes termos. Leia atentamente.
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
            {/* Aceitação */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">1. Aceitação dos Termos</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao acessar e utilizar os sistemas, serviços e website da Solução Sistemas, você concorda em 
                cumprir e ficar vinculado a estes Termos de Uso. Se não concordar com qualquer parte destes termos, 
                não deverá utilizar nossos serviços. Estes termos constituem um contrato legalmente vinculante 
                entre você e a Solução Sistemas.
              </p>
            </div>

            {/* Licença de Uso */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">2. Licença de Uso</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A Solução Sistemas concede uma licença limitada, não exclusiva e intransferível para usar 
                nossos sistemas, sujeita às seguintes condições:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>A licença é válida apenas durante o período de contrato vigente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Não é permitida a sublicenciamento, venda ou transferência do sistema</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>O uso é restrito à empresa contratante e seus funcionários autorizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>É proibida a engenharia reversa, descompilação ou tentativa de acesso ao código-fonte</span>
                </li>
              </ul>
            </div>

            {/* Obrigações */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">3. Obrigações do Usuário</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                O usuário se compromete a:
              </p>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fornecer informações verdadeiras, precisas e atualizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Manter a confidencialidade de suas credenciais de acesso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Não utilizar os sistemas para fins ilegais ou não autorizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Não interferir na segurança ou funcionamento dos sistemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Efetuar o pagamento das mensalidades conforme contratado</span>
                </li>
              </ul>
            </div>

            {/* Limitação */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">4. Limitação de Responsabilidade</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Solução Sistemas não se responsabiliza por danos indiretos, incidentais, especiais ou 
                consequenciais decorrentes do uso ou impossibilidade de uso dos sistemas. Nossa responsabilidade 
                máxima está limitada ao valor pago pelo serviço no período de 12 meses anteriores ao evento. 
                Não garantimos que o sistema estará livre de erros ou que o acesso será ininterrupto.
              </p>
            </div>

            {/* Alterações */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">5. Alterações nos Termos</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações 
                significativas serão comunicadas com 30 dias de antecedência via e-mail ou notificação no sistema. 
                O uso continuado dos serviços após as alterações constitui aceitação dos novos termos. 
                Recomendamos revisar periodicamente esta página.
              </p>
            </div>

            {/* Disposições */}
            <div className="glass-premium p-8 md:p-12 rounded-[2rem] border-white/5">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">6. Disposições Gerais</h2>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Foro:</strong> Fica eleito o foro de Fortaleza/CE para resolver quaisquer disputas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Legislação:</strong> Estes termos são regidos pelas leis da República Federativa do Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Integralidade:</strong> Se qualquer cláusula for considerada inválida, as demais permanecem em vigor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Contato:</strong> Dúvidas sobre estes termos devem ser enviadas para contato@solucaosistemas.net</span>
                </li>
              </ul>
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
