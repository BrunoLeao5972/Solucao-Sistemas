import { Link } from "wouter";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="bg-noise absolute inset-0 z-0 opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo-solucao-sistemas.webp"
                alt="Solução Sistemas"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xs font-medium">
              A Solução Sistemas oferta soluções de automação para a prosperidade de empresas em todo o território nacional.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com/solucaosistemas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/solucaosistemas" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest uppercase text-sm mb-10">Soluções</h4>
            <ul className="space-y-6">
              {[
                { label: "Food Web", href: "/produtos" },
                { label: "Varejo Web", href: "/produtos" },
                { label: "Educação", href: "/produtos" },
                { label: "KDS Vision", href: "/produtos" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary flex items-center gap-3 transition-colors group text-lg font-medium">
                    {item.label} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest uppercase text-sm mb-10">Navegação</h4>
            <ul className="space-y-6">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Seja Parceiro", href: "/sobre" },
                { label: "Área Privativa", href: "/cliente" },
                { label: "Suporte Técnico", href: "https://wa.me/558533076262" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-lg font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black tracking-widest uppercase text-sm mb-10">Contato</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 text-muted-foreground">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-medium leading-relaxed">Rua Tibúrcio Cavalcante, 2569 – Dionísio Torres<br />Fortaleza/CE</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-medium">(85) 3307-6262</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span className="text-lg font-medium">contato@solucaosistemas.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-sm font-bold tracking-widest uppercase">
            &copy; {currentYear} SOLUÇÃO SISTEMAS. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-12 text-sm font-bold tracking-widest uppercase text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
