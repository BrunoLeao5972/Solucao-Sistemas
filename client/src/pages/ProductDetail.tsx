import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, CheckCircle2, Image as ImageIcon, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { useState } from "react";

const productDetails: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  targetAudience: string;
  screenshots: { src: string; alt: string; title: string }[];
  cases: { client: string; segment: string; result: string; quote?: string }[];
}> = {
  "food-web": {
    title: "Food Web",
    description: "Gestão inteligente para restaurantes, bares e delivery com controle de mesas, comandas e estoque.",
    fullDescription: "O Food Web é a solução completa para o setor de alimentação. Com controle de mesas, comandas digitais, gestão de estoque e integração com delivery, você otimiza toda a operação do seu restaurante ou bar. Sistema 100% web, acessível de qualquer dispositivo.",
    features: [
      "Controle de Mesas e Comandas",
      "KDS Integrado (Cozinha)",
      "Gestão de Estoque em Tempo Real",
      "Integração com iFood e Delivery",
      "Relatórios Financeiros Detalhados",
      "Fiscal Integrado (NFC-e)",
      "App para Garçons",
      "Painel de Acompanhamento",
    ],
    benefits: [
      "Redução de 40% no tempo de atendimento",
      "Diminuição de 60% em erros de pedidos",
      "Aumento de 25% no ticket médio",
      "Controle total do estoque",
      "Gestão simplificada do delivery",
    ],
    targetAudience: "Restaurantes, bares, lanchonetes, food trucks e serviços de alimentação",
    screenshots: [
      { src: "/images/foodweb/mesas.png", alt: "Controle de Mesas", title: "Mapa de Mesas Interativo" },
      { src: "/images/foodweb/comandas.png", alt: "Gestão de Comandas", title: "Comandas Digitais" },
      { src: "/images/foodweb/estoque.png", alt: "Controle de Estoque", title: "Gestão de Estoque" },
      { src: "/images/foodweb/relatorios.png", alt: "Relatórios", title: "Relatórios Financeiros" },
    ],
    cases: [
      { client: "Restaurante Sabor & Arte", segment: "Restaurante à la carte", result: "Aumento de 35% na rotatividade de mesas", quote: "O Food Web transformou nossa operação. Conseguimos atender mais clientes com a mesma equipe." },
      { client: "Bar do Zé", segment: "Bar e petiscaria", result: "Redução de 50% no tempo de fechamento de caixa", quote: "Antes demorávamos 1 hora para fechar o caixa. Agora é questão de minutos." },
      { client: "Pizzaria Napoli", segment: "Pizzaria delivery", result: "Integração perfeita delivery/balcão", quote: "Finalmente temos controle total dos pedidos, seja no salão ou delivery." },
    ],
  },
  "varejo-web": {
    title: "Varejo Web",
    description: "Automação comercial completa com PDV, controle de estoque e gestão de vendas.",
    fullDescription: "O Varejo Web é o sistema de gestão completo para lojas de qualquer porte. Com frente de caixa ágil, controle de estoque inteligente, módulo fiscal integrado e relatórios gerenciais, você tem o controle total do seu negócio em uma plataforma 100% web.",
    features: [
      "Frente de Caixa (PDV) Rápido",
      "Módulo Fiscal Completo",
      "Controle de Estoque Inteligente",
      "Gestão de Clientes (CRM)",
      "Relatórios Gerenciais",
      "Multi-loja e Multi-caixa",
      "Importação de XML de Fornecedores",
      "Etiquetas e Código de Barras",
    ],
    benefits: [
      "Fechamento de caixa 3x mais rápido",
      "Controle preciso do estoque",
      "Redução de 30% em perdas",
      "Gestão eficiente multi-loja",
      "Conformidade fiscal total",
    ],
    targetAudience: "Lojas de varejo, atacado, boutiques, mercados e comércios em geral",
    screenshots: [
      { src: "/images/varejo/pdv.png", alt: "PDV - Frente de Caixa", title: "PDV Rápido e Intuitivo" },
      { src: "/images/varejo/estoque.png", alt: "Controle de Estoque", title: "Gestão de Estoque" },
      { src: "/images/varejo/vendas.png", alt: "Relatório de Vendas", title: "Relatórios de Vendas" },
      { src: "/images/varejo/clientes.png", alt: "Cadastro de Clientes", title: "Gestão de Clientes" },
    ],
    cases: [
      { client: "Moda Fashion", segment: "Loja de roupas", result: "Controle total de 3 lojas em único sistema", quote: "Consigo ver o estoque de todas as lojas em tempo real." },
      { client: "Supermercado Central", segment: "Mini mercado", result: "Redução de 45% em quebras de estoque", quote: "O controle de estoque nos mostrou onde estávamos perdendo dinheiro." },
      { client: "Loja do Eletrônico", segment: "Loja de eletrônicos", result: "Gestão eficiente de garantias", quote: "O controle de garantias é perfeito para nossa operação." },
    ],
  },
  "educacao": {
    title: "Educação",
    description: "Gestão escolar completa: alunos, professores, notas, financeiro e comunicação.",
    fullDescription: "Sistema integrado para gestão de instituições de ensino. Desde o controle pedagógico (diário, notas, frequência) até a gestão administrativa e financeira. Comunicação direta com pais e alunos via portal e aplicativo.",
    features: [
      "Portal do Aluno e Responsável",
      "Diário Eletrônico e Notas",
      "Gestão de Matrículas",
      "Módulo Financeiro Escolar",
      "Controle de Frequência",
      "Comunicação Institucional",
      "Relatórios de Desempenho",
      "Gestão de Documentos",
    ],
    benefits: [
      "Redução de 70% em papelada",
      "Comunicação instantânea com pais",
      "Controle financeiro simplificado",
      "Acompanhamento pedagógico eficiente",
      "Transparência institucional",
    ],
    targetAudience: "Escolas, colégios, cursos livres, universidades e instituições educacionais",
    screenshots: [
      { src: "/images/educacao/diario.png", alt: "Diário Eletrônico", title: "Diário Eletrônico" },
      { src: "/images/educacao/notas.png", alt: "Lançamento de Notas", title: "Gestão de Notas" },
      { src: "/images/educacao/financeiro.png", alt: "Financeiro Escolar", title: "Mensalidades e Financeiro" },
      { src: "/images/educacao/portal.png", alt: "Portal do Aluno", title: "Portal do Aluno" },
    ],
    cases: [
      { client: "Colégio Futuro", segment: "Colégio particular", result: "Comunicação 100% digital com pais", quote: "Os pais adoram receber informações em tempo real pelo app." },
      { client: "Curso de Inglês Speak", segment: "Curso de idiomas", result: "Controle de turmas e professores otimizado", quote: "Organizamos 50 turmas sem nenhuma confusão de horário." },
      { client: "Escola Técnica Pro", segment: "Escola técnica", result: "Gestão de estágios integrada", quote: "O controle de estágios ficou muito mais profissional." },
    ],
  },
  "delivery": {
    title: "Delivery",
    description: "Plataforma completa para delivery com app próprio, rastreamento e integrações.",
    fullDescription: "Sistema completo para operação de delivery. Com aplicativo próprio para clientes, painel administrativo, app para entregadores e integração com iFood. Controle total da operação desde o pedido até a entrega.",
    features: [
      "Aplicativo Próprio (Android/iOS)",
      "Painel de Pedidos em Tempo Real",
      "Rastreamento de Entregas",
      "Integração iFood",
      "App para Entregadores",
      "Gestão de Taxas de Entrega",
      "Relatórios de Desempenho",
      "Cupons e Promoções",
    ],
    benefits: [
      "Propriedade sobre dados dos clientes",
      "Redução de taxas de marketplaces",
      "Entregas mais rápidas e eficientes",
      "Fidelização de clientes",
      "Operação 100% integrada",
    ],
    targetAudience: "Restaurantes, lanchonetes, pizzarias, açaiterias e negócios de delivery",
    screenshots: [
      { src: "/images/delivery/app.png", alt: "App de Delivery", title: "App do Cliente" },
      { src: "/images/delivery/painel.png", alt: "Painel de Pedidos", title: "Painel de Pedidos" },
      { src: "/images/delivery/motoboy.png", alt: "App do Entregador", title: "App do Entregador" },
      { src: "/images/delivery/integracao.png", alt: "Integração iFood", title: "Integração com iFood" },
    ],
    cases: [
      { client: "Burger House", segment: "Hamburgueria", result: "App próprio com 5.000 downloads", quote: "Temos nosso próprio app, os clientes pedem direto sem taxas." },
      { client: "Pizzaria Bella", segment: "Pizzaria", result: "Tempo médio de entrega reduzido 20%", quote: "O rastreamento nos ajudou a otimizar as rotas de entrega." },
      { client: "Açaí Mania", segment: "Açaiteria", result: "Pedidos via app superam iFood", quote: "Hoje 60% dos pedidos vêm pelo nosso app próprio." },
    ],
  },
  "servicos": {
    title: "Serviços",
    description: "Gestão de ordens de serviço, orçamentos e controle para prestadores de serviços.",
    fullDescription: "Sistema especializado para empresas de prestação de serviços. Controle de ordens de serviço, orçamentos, agenda técnica, estoque de peças e faturamento. Ideal para oficinas, assistências técnicas e prestadores de serviços.",
    features: [
      "Ordens de Serviço (OS)",
      "Orçamentos Aprovados",
      "Agenda Técnica",
      "Controle de Peças e Estoque",
      "Faturamento e Notas",
      "Histórico do Cliente",
      "Garantia de Serviços",
      "App para Técnicos",
    ],
    benefits: [
      "Redução de 50% em OS perdidas",
      "Agenda otimizada",
      "Controle de garantias eficiente",
      "Histórico completo de atendimentos",
      "Faturamento simplificado",
    ],
    targetAudience: "Oficinas, assistências técnicas, prestadores de serviços e manutenção",
    screenshots: [
      { src: "/images/servicos/os.png", alt: "Ordem de Serviço", title: "Ordens de Serviço" },
      { src: "/images/servicos/agenda.png", alt: "Agenda Técnica", title: "Agenda de Técnicos" },
      { src: "/images/servicos/pecas.png", alt: "Controle de Peças", title: "Gestão de Peças" },
      { src: "/images/servicos/faturamento.png", alt: "Faturamento", title: "Faturamento" },
    ],
    cases: [
      { client: "Tech Assistência", segment: "Assistência técnica", result: "Controle de 200 OS/mês", quote: "Antes usávamos papel. Agora tudo está no sistema, nada se perde." },
      { client: "Oficina AutoPeças", segment: "Oficina mecânica", result: "Agenda técnica 100% otimizada", quote: "Conseguimos atender 30% mais carros por dia." },
      { client: "Conserto Express", segment: "Assistência eletro", result: "Controle de garantias perfeito", quote: "Nunca mais tivemos problema com controle de garantia." },
    ],
  },
  "kds-vision": {
    title: "KDS Vision",
    description: "Display de produção para cozinhas que elimina erros e aumenta a velocidade de entrega.",
    fullDescription: "O KDS Vision é um sistema moderno de gerenciamento de cozinha que substitui as comandas de papel. Com interface 100% web, atualização em tempo real e painel de priorização, otimiza o fluxo de produção e elimina erros de comunicação entre salão e cozinha.",
    features: [
      "Display 100% Web (sem instalação)",
      "Recebimento de Pedidos em Tempo Real",
      "Priorização Inteligente de Pedidos",
      "Controle de Status (Fila/Preparo/Pronto)",
      "Notificações Visuais e Sonoras",
      "Tempo Médio de Preparo",
      "Integração com Food Web",
      "Dashboard de Desempenho",
    ],
    benefits: [
      "Redução de 70% em erros de pedidos",
      "Aumento de 40% na velocidade de entrega",
      "Eliminação de comandas de papel",
      "Melhor comunicação cozinha-salão",
      "Otimização do tempo de preparo",
    ],
    targetAudience: "Restaurantes, bares, lanchonetes, cozinhas comerciais e delivery",
    screenshots: [
      { src: "/images/kds/kds-admin.png", alt: "Painel Administrativo", title: "Painel Administrativo" },
      { src: "/images/kds/kds-cozinha.png", alt: "Tela da Cozinha", title: "Display da Cozinha" },
      { src: "/images/kds/kds-painel.png", alt: "Painel de Acompanhamento", title: "Painel de Pedidos" },
      { src: "/images/kds/kds-relatorios.png", alt: "Relatórios", title: "Relatórios de Desempenho" },
    ],
    cases: [
      { client: "Restaurante Fogo & Brasa", segment: "Churrascaria", result: "Erros de pedido zerados", quote: "Depois do KDS, não tivemos mais nenhum pedido errado na cozinha." },
      { client: "Lanchonete Speed", segment: "Lanchonete", result: "Tempo de preparo reduzido 35%", quote: "A priorização automática nos ajudou a organizar a produção." },
      { client: "Café Central", segment: "Cafeteria", result: "Integração perfeita com o caixa", quote: "O garçom lança, a cozinha vê instantaneamente. Perfeito!" },
    ],
  },
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = productDetails[productId];

  // Estado da galeria de imagens
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Imagens do produto (do objeto product)
  const productImages = product?.screenshots || [];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    setZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoomed(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    setZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
    setZoomed(false);
  };

  const toggleZoom = () => {
    setZoomed((prev) => !prev);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <Link href="/produtos">
              <Button>Voltar aos Produtos</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-12 md:pt-40 md:pb-20 bg-gradient-to-br from-accent/10 via-transparent to-transparent">
        <div className="container">
          <Link href="/produtos" className="relative z-50 inline-flex items-center gap-2 text-accent hover:text-accent/80 mt-4 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Produtos
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{product.fullDescription}</p>
        </div>
      </section>

      {/* Product Screenshots */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Visualize o Produto</h2>
          
          {/* Screenshots do Produto - Galeria clicável */}
          <div className="grid md:grid-cols-2 gap-6">
            {productImages.map((image, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-lg cursor-pointer group relative"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium text-sm">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Galeria Simples - Tamanho Natural */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-screen h-screen max-w-none max-h-none p-0 bg-black border-none rounded-none">
          <DialogTitle className="sr-only">
            {productImages[currentImageIndex]?.title || "Visualização da imagem"}
          </DialogTitle>
          
          {/* Header */}
          <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-black/80">
            <div className="text-white flex items-center gap-3">
              <span className="text-sm">
                {currentImageIndex + 1} / {productImages.length}
              </span>
              <span className="font-semibold">{productImages[currentImageIndex]?.title}</span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full hover:bg-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Imagem Expandida - Tela Cheia sem Corte */}
          <div className="absolute inset-0 pt-14 pb-0 bg-black flex items-center justify-center">
            <img
              src={productImages[currentImageIndex]?.src}
              alt={productImages[currentImageIndex]?.alt}
              className="max-w-full max-h-full object-contain"
              style={{ 
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 56px)'
              }}
              onError={(e) => { 
                (e.target as HTMLImageElement).style.display = 'none'; 
              }}
            />
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevImage}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="fixed right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </DialogContent>
      </Dialog>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Funcionalidades Principais</h2>
              <ul className="space-y-4">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Benefícios</h2>
              <ul className="space-y-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      {product.cases && product.cases.length > 0 && (
        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Cases de Sucesso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {product.cases.map((caseItem, i) => (
                <Card key={i} className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {caseItem.segment}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{caseItem.client}</h3>
                  <p className="text-accent font-semibold mb-3">{caseItem.result}</p>
                  {caseItem.quote && (
                    <blockquote className="text-muted-foreground italic text-sm border-l-2 border-primary pl-4">
                      "{caseItem.quote}"
                    </blockquote>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target Audience */}
      <section className="py-20">
        <div className="container">
          <Card className="p-8 bg-accent text-accent-foreground">
            <h3 className="text-2xl font-bold mb-4">Para Quem é Ideal?</h3>
            <p className="text-lg opacity-90">{product.targetAudience}</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma demonstração gratuita e descubra como o {product.title} pode transformar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                Solicitar Demonstração
              </Button>
            </a>
            <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Fale com Especialista
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
   );
}
