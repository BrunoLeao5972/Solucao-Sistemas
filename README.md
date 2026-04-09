# BrunoInfoMais - Site Institucional

Site institucional moderno e responsivo para a BrunoInfoMais, empresa especializada em desenvolvimento de softwares de gestão empresarial.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.2.1** - Biblioteca principal para construção da UI
- **TypeScript 5.9.3** - Tipagem estática para melhor desenvolvimento
- **Vite 7.1.7** - Build tool rápido e moderno
- **Tailwind CSS 4.1.14** - Framework CSS para estilização
- **Wouter 3.3.5** - Router leve para React
- **React Hook Form 7.64.0** - Gerenciamento de formulários
- **Framer Motion 12.23.22** - Animações e transições
- **Lucide React 0.453.0** - Biblioteca de ícones

### Backend
- **Node.js** - Runtime JavaScript
- **Express 4.21.2** - Framework web
- **tRPC 11.6.0** - API type-safe
- **Drizzle ORM 0.44.5** - ORM para banco de dados
- **MySQL2 3.15.0** - Driver MySQL
- **Jose 6.1.0** - Autenticação JWT

### Ferramentas
- **PNPM** - Gerenciador de pacotes
- **Vitest 2.1.4** - Framework de testes
- **Prettier 3.6.2** - Formatação de código
- **ESLint** - Linting

## 📁 Estrutura do Projeto

```
brunoinfomais/
├── client/                     # Frontend React
│   ├── public/                # Arquivos estáticos
│   │   └── images/           # Imagens do site
│   └── src/
│       ├── components/         # Componentes React
│       │   ├── ui/          # Componentes UI base
│       │   ├── Navigation.tsx
│       │   ├── Footer.tsx
│       │   └── FloatingContactButtons.tsx
│       ├── pages/           # Páginas do site
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── Products.tsx
│       │   ├── ProductDetail.tsx
│       │   └── NotFound.tsx
│       ├── lib/             # Utilitários e configurações
│       ├── hooks/           # Hooks personalizados
│       └── main.tsx         # Ponto de entrada
├── server/                  # Backend Node.js
│   └── _core/             # Lógica principal
├── shared/                  # Código compartilhado
├── drizzle/               # Schema e migrations do DB
├── attached_assets/        # Assets anexados
└── dist/                  # Build de produção
```

## 🌐 Páginas e Funcionalidades

### 1. Página Inicial (`/`)
- **Hero Section** com imagem de fundo e CTA
- **Preview de Produtos** com cards clicáveis
- **Funcionalidades** da empresa
- **Depoimentos** de clientes
- **Seção CTA** para contato

### 2. Sobre (`/sobre`)
- **Missão, Visão e Valores** da empresa
- **Expertise** em desenvolvimento
- **Tecnologias** utilizadas
- **Estatísticas** da empresa
- **CTA** para produtos

### 3. Produtos (`/produtos`)
- **Grid de produtos** com cards detalhados
- **Funcionalidades principais** de cada produto
- **Link para detalhes** de cada produto

### 4. Detalhes do Produto (`/produtos/{id}`)
- **Informações completas** do produto
- **Funcionalidades** detalhadas
- **Benefícios** para o cliente
- **Público-alvo** definido
- **CTA** para demonstração

## 📦 Produtos Disponíveis

### 1. Gestão Empresarial
- Sistema completo para controle de vendas, estoque e financeiro
- Funcionalidades: Controle de Vendas, Gestão de Estoque, Financeiro, Relatórios

### 2. Sistema de Leads
- Plataforma inteligente para gerenciamento de prospecção e vendas
- Funcionalidades: Gestão de Leads, Pipeline, Automação, Análise

### 3. Gestão Escolar
- Plataforma integrada para administração educacional
- Funcionalidades: Gestão de Alunos, Notas, Financeiro Escolar, Comunicação

### 4. Software para Oficinas
- Sistema especializado para controle de serviços e peças
- Funcionalidades: Agendamento, Controle de Peças, Gestão de Clientes, Orçamentos

### 5. Software para Personal Trainers
- Plataforma para gestão de clientes e treinos
- Funcionalidades: Gestão de Clientes, Planos de Treino, Acompanhamento, Agendamento

### 6. KDS - Kitchen Display System
- Sistema de gerenciamento para restaurantes
- Funcionalidades: Pedidos em Tempo Real, Interface Intuitiva, Controle de Status

## 🎨 Design e UI

### Sistema de Cores
- **Cores primárias**: Definidas via CSS variables
- **Cores de destaque**: Para CTAs e elementos importantes
- **Modo escuro**: Suporte completo via Tailwind

### Componentes UI
- **Button** - Botões com múltiplas variantes
- **Card** - Cards para conteúdo estruturado
- **Dialog** - Modais e popups
- **Navigation** - Menu responsivo
- **Footer** - Rodapé com links

### Responsividade
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid system** baseado no Tailwind

## 🔧 Configuração e Desenvolvimento

### Pré-requisitos
- Node.js 18+
- PNPM (recomendado)

### Instalação
```bash
# Clonar o repositório
git clone <repository-url>
cd brunoinfomais

# Instalar dependências
pnpm install

# Iniciar desenvolvimento
pnpm dev
```

### Scripts Disponíveis
```bash
pnpm dev          # Iniciar servidor de desenvolvimento
pnpm build        # Build para produção
pnpm start        # Iniciar servidor de produção
pnpm test         # Executar testes
pnpm format       # Formatar código com Prettier
pnpm check        # Verificar tipos TypeScript
pnpm db:push      # Push do schema para o banco
```

## 🌐 Variáveis de Ambiente

### Frontend (.env)
```env
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```

### Backend
- Configurações de banco de dados
- Chaves de API externas
- Configurações de autenticação

## 📱 Contato e Integrações

### Canais de Contato
- **WhatsApp**: (85) 99914-9141
- **Instagram**: @brunoinfomais
- **Telefone**: +558599149141

### Integrações
- **WhatsApp Business** - Para contato direto
- **Google Analytics** - Para análise de tráfego
- **Mapas Google** - Para localização (se necessário)

## 🚀 Deploy

### Build de Produção
```bash
pnpm build
```

O build gera:
- **Frontend**: `dist/public/`
- **Backend**: `dist/index.js`

### Servidor
- **Porta de desenvolvimento**: Configurada no Vite
- **Porta de produção**: Configurada no Express
- **Host**: Configurado para aceitar conexões externas

## 🧪 Testes

### Estrutura de Testes
- **Vitest** para testes unitários
- **Testes de integração** para APIs
- **Testes E2E** (planejado)

### Exemplo de Teste
```typescript
import { test, expect } from 'vitest';

test('example test', () => {
  expect(true).toBe(true);
});
```

## 📈 Performance

### Otimizações Implementadas
- **Code splitting** automático via Vite
- **Lazy loading** de componentes
- **Imagens otimizadas** com lazy loading
- **Cache** estático configurado

### Métricas
- **Lighthouse score**: >90 (planejado)
- **Core Web Vitals**: Otimizado
- **Bundle size**: Minimizado

## 🔐 Segurança

### Implementações
- **CORS** configurado
- **Helmet.js** para headers de segurança
- **Validação de inputs** via Zod
- **Autenticação JWT** (implementada)

## 🔄 Fluxo de Trabalho

### Desenvolvimento
1. **Branch feature** para novas funcionalidades
2. **Code review** via Pull Request
3. **Testes automatizados** no CI/CD
4. **Deploy automático** para produção

### Manutenção
- **Dependências** atualizadas regularmente
- **Security patches** aplicados rapidamente
- **Monitoramento** de performance

## 📝 TODO

### Funcionalidades Futuras
- [ ] Blog integrado
- [ ] Sistema de agendamento online
- [ ] Portal do cliente
- [ ] Calculadora de preços
- [ ] Chatbot de suporte
- [ ] Testes E2E completos

### Melhorias Técnicas
- [ ] PWA (Progressive Web App)
- [ ] SSR (Server-Side Rendering)
- [ ] Internacionalização (i18n)
- [ ] Analytics avançado

## 📄 Licença

MIT License - Ver arquivo LICENSE para detalhes

## 👥 Equipe

Desenvolvido e mantido pela **BrunoInfoMais**

---

**BrunoInfoMais** - Transformando negócios com softwares inteligentes 🚀
