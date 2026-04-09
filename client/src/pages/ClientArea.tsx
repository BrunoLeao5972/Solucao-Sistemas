import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  LogIn, 
  User, 
  Lock, 
  Building, 
  Key, 
  FileText, 
  Copy, 
  CheckCircle,
  LogOut,
  CreditCard,
  Calendar,
  Shield,
  QrCode
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { useState } from "react";

// Tipos
interface LicenseInfo {
  product: string;
  expirationDate: string;
  status: "active" | "expired" | "suspended";
  maxUsers: number;
}

interface ClientData {
  name: string;
  document: string;
  license: LicenseInfo;
}

export default function ClientArea() {
  // Estados de autenticação
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  
  // Estados do formulário de login
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [documentType, setDocumentType] = useState<"cpf" | "cnpj">("cpf");

  // Estados do dashboard
  const [clientId, setClientId] = useState<string>("");
  const [generatedKey, setGeneratedKey] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [showBoleto, setShowBoleto] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [pixCopied, setPixCopied] = useState(false);

  // Função para validar CPF
  const validateCPF = (cpf: string) => {
    const cleanCPF = cpf.replace(/[^\d]/g, "");
    return cleanCPF.length === 11;
  };

  // Função para validar CNPJ
  const validateCNPJ = (cnpj: string) => {
    const cleanCNPJ = cnpj.replace(/[^\d]/g, "");
    return cleanCNPJ.length === 14;
  };

  // Função para formatar CPF
  const formatCPF = (value: string) => {
    const cleanValue = value.replace(/[^\d]/g, "");
    return cleanValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .slice(0, 14);
  };

  // Função para formatar CNPJ
  const formatCNPJ = (value: string) => {
    const cleanValue = value.replace(/[^\d]/g, "");
    return cleanValue
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d{1,2})/, "$1-$2")
      .slice(0, 18);
  };

  // Função para formatar documento conforme o tipo
  const formatDocument = (value: string) => {
    if (documentType === "cpf") {
      return formatCPF(value);
    } else {
      return formatCNPJ(value);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validação conforme o tipo
    const isValid = documentType === "cpf" ? validateCPF(document) : validateCNPJ(document);
    
    if (!isValid) {
      setError(`Digite um ${documentType.toUpperCase()} válido`);
      setIsLoading(false);
      return;
    }

    const cleanDoc = document.replace(/[^\d]/g, "");
    const expectedPassword = cleanDoc.substring(0, 5);

    if (password !== expectedPassword) {
      setError("Senha incorreta. A senha é os 5 primeiros dígitos do seu CPF/CNPJ.");
      setIsLoading(false);
      return;
    }

    // Simulação de dados do cliente após login
    setTimeout(() => {
      setClientData({
        name: documentType === "cpf" ? "João Silva" : "Empresa ABC Ltda",
        document: document,
        license: {
          product: "E-Commerce",
          expirationDate: "2026-12-31",
          status: "active",
          maxUsers: 5
        }
      });
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDocument(e.target.value);
    setDocument(formatted);
  };

  // Gerar chave de acesso
  const generateAccessKey = () => {
    if (!clientId.trim()) return;
    
    // Gerar chave de 9 dígitos baseada no ID do cliente + timestamp
    const timestamp = Date.now().toString().slice(-4);
    const clientPart = clientId.replace(/\D/g, '').padStart(5, '0').slice(0, 5);
    const combined = (parseInt(clientPart) + parseInt(timestamp)).toString().padStart(9, '0').slice(0, 9);
    
    // Formatar como 000.000.000
    const formattedKey = combined.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
    
    setGeneratedKey(formattedKey);
    setCopied(false);
  };

  // Copiar chave
  const copyKey = () => {
    navigator.clipboard.writeText(generatedKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Gerar boleto
  const generateBoleto = () => {
    setShowBoleto(true);
    setShowPix(false);
  };

  // Gerar PIX
  const generatePix = () => {
    setShowPix(true);
    setShowBoleto(false);
  };

  // Copiar chave PIX
  const copyPixKey = () => {
    const pixKey = "00020126580014BR.GOV.BCB.PIX0136b7691c2b-e38f-4c7d-8c41-a55b802d48c05204000053039865802BR5915BRUNO SISTEMAS6009FORTALEZA62070503***6304ABCD";
    navigator.clipboard.writeText(pixKey);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2000);
  };

  // Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setClientData(null);
    setGeneratedKey("");
    setShowBoleto(false);
    setShowPix(false);
    setDocument("");
    setPassword("");
    setClientId("");
  };

  const handleDocumentTypeChange = (type: "cpf" | "cnpj") => {
    setDocumentType(type);
    setDocument(""); // Limpa o campo ao mudar o tipo
    setPassword(""); // Limpa a senha também
    setError(""); // Limpa erros
  };

  // Logins de demonstração
  const demoLogins = [
    { label: "Pessoa Física (CPF)", doc: "123.456.789-01", password: "12345", type: "cpf" },
    { label: "Pessoa Jurídica (CNPJ)", doc: "12.345.678/0001-01", password: "12345", type: "cnpj" },
  ];

  // RENDER: DASHBOARD (quando logado)
  if (isLoggedIn && clientData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation currentPage="/cliente" />

        {/* Header do Cliente */}
        <section className="py-8 bg-accent text-accent-foreground">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Área do Cliente</h1>
                <p className="opacity-90 mt-1">Bem-vindo, {clientData.name}</p>
                <p className="text-sm opacity-75">{clientData.document}</p>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline" 
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Principal */}
        <section className="py-12 flex-1">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Coluna 1: Informações da Licença */}
              <div className="lg:col-span-1">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                    <h2 className="text-xl font-bold">Sua Licença</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Produto</p>
                      <p className="font-medium">{clientData.license.product}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Ativa
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Válida até</p>
                      <p className="font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(clientData.license.expirationDate).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Usuários permitidos</p>
                      <p className="font-medium">{clientData.license.maxUsers} usuários</p>
                    </div>
                  </div>
                </Card>

                {/* Card de Pagamento */}
                <Card className="p-6 mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-accent" />
                    <h2 className="text-xl font-bold">Pagamento</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    Escolha a forma de pagamento para renovação da licença.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={generateBoleto}
                      variant={showBoleto ? "default" : "outline"}
                      className={showBoleto ? "bg-accent text-accent-foreground" : ""}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Boleto
                    </Button>
                    <Button 
                      onClick={generatePix}
                      variant={showPix ? "default" : "outline"}
                      className={showPix ? "bg-accent text-accent-foreground" : ""}
                    >
                      <QrCode className="w-4 h-4 mr-2" />
                      PIX
                    </Button>
                  </div>

                  {showBoleto && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-2">Boleto Gerado!</p>
                      <p className="text-xs text-muted-foreground mb-3">
                        Vencimento: {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-lg font-bold text-accent mb-3">
                        R$ 297,00
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 text-xs">
                          Visualizar
                        </Button>
                        <Button size="sm" className="flex-1 text-xs bg-accent">
                          Baixar PDF
                        </Button>
                      </div>
                    </div>
                  )}

                  {showPix && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-3">Pagamento via PIX</p>
                      <p className="text-xs text-muted-foreground mb-3">
                        Escaneie o QR Code ou copie a chave abaixo
                      </p>
                      <p className="text-lg font-bold text-accent mb-4">
                        R$ 297,00
                      </p>
                      
                      {/* QR Code simulado */}
                      <div className="flex justify-center mb-4">
                        <div className="w-48 h-48 bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                          <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 rounded flex items-center justify-center">
                            <QrCode className="w-24 h-24 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Chave Copia e Cola */}
                      <div className="bg-white p-3 rounded-lg border mb-3">
                        <p className="text-xs text-muted-foreground mb-1">Chave Copia e Cola:</p>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 text-xs font-mono break-all text-gray-600">
                            00020126580014BR.GOV.BCB.PIX0136...
                          </code>
                          <Button 
                            onClick={copyPixKey}
                            variant="outline"
                            size="sm"
                            className="shrink-0"
                          >
                            {pixCopied ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-xs text-center text-muted-foreground">
                        Abra o app do seu banco e escaneie o QR Code ou cole a chave
                      </p>
                    </div>
                  )}
                </Card>
              </div>

              {/* Coluna 2: Geração de Chave */}
              <div className="lg:col-span-2">
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Key className="w-6 h-6 text-accent" />
                    <h2 className="text-xl font-bold">Chave de Acesso ao Sistema</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Digite seu ID de Cliente (número da licença) para gerar a chave de acesso ao sistema.
                  </p>

                  <div className="mb-6">
                    <label htmlFor="clientId" className="block text-sm font-medium mb-2">
                      ID do Cliente (Licença)
                    </label>
                    <input
                      type="text"
                      id="clientId"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value.replace(/\D/g, ""))}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg font-mono"
                      placeholder="Ex: 12345"
                      maxLength={10}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Informe o número da sua licença fornecido no momento da compra.
                    </p>
                  </div>

                  <Button 
                    onClick={generateAccessKey}
                    disabled={!clientId.trim()}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    <Key className="w-4 h-4 mr-2" />
                    Gerar Chave de Acesso
                  </Button>

                  {generatedKey && (
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Sua chave de acesso:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 p-3 bg-background border rounded-lg text-sm font-mono">
                          {generatedKey}
                        </code>
                        <Button 
                          onClick={copyKey}
                          variant="outline"
                          size="icon"
                          className="shrink-0"
                        >
                          {copied ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Copie esta chave e insira no sistema para ativar seu acesso.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 p-5 bg-amber-50 border border-amber-300 rounded-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">!</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-2">Importante - Política de Chaves</h4>
                        <div className="text-sm text-amber-800 space-y-2">
                          <p>
                            <strong>Em caso de inadimplência:</strong> você terá direito a <strong>3 chaves</strong> com validade de <strong>3 dias cada</strong>.
                          </p>
                          <p>
                            Após o uso dessas chaves, não será possível gerar novas chaves até a regularização do pagamento.
                          </p>
                          <p>
                            <strong>Para liberar o acesso:</strong> entre em contato com o financeiro, efetue o pagamento e envie o comprovante. A chave será liberada com <strong>validade de 30 dias</strong>.
                          </p>
                          <p className="font-medium mt-3 pt-3 border-t border-amber-200">
                            Mantenha seus pagamentos em dia para evitar interrupções no sistema.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingContactButtons />
      </div>
    );
  }

  // RENDER: PÁGINA DE LOGIN

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="/cliente" />

      {/* Hero Section - Mais curta */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-gradient-to-br from-accent/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Área do Cliente</h1>
            <p className="text-base text-muted-foreground">
              Acesse sua área exclusiva para gerar chaves de acesso ao sistema e boletos de pagamento.
            </p>
          </div>
        </div>
      </section>

      {/* Login Section - Layout 2 colunas */}
      <section className="py-8 md:py-12 flex-1">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Coluna Esquerda - Card de Login */}
            <div className="max-w-md mx-auto lg:mx-0">
              <Card className="p-6 shadow-lg border-accent/20">
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-xl font-bold mb-1">Acessar Conta</h2>
                  <p className="text-sm text-muted-foreground">Faça login com seu CPF ou CNPJ</p>
                </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tipo de Documento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleDocumentTypeChange("cpf")}
                      className={`py-2 px-4 rounded-lg border transition-colors ${
                        documentType === "cpf"
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background border-border hover:bg-muted"
                      }`}
                    >
                      CPF
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDocumentTypeChange("cnpj")}
                      className={`py-2 px-4 rounded-lg border transition-colors ${
                        documentType === "cnpj"
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background border-border hover:bg-muted"
                      }`}
                    >
                      CNPJ
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="document" className="block text-sm font-medium mb-2">
                    {documentType === "cpf" ? "CPF" : "CNPJ"}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="document"
                      value={document}
                      onChange={handleDocumentChange}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={
                        documentType === "cpf" 
                          ? "000.000.000-00" 
                          : "00.000.000/0000-00"
                      }
                      maxLength={documentType === "cpf" ? 14 : 18}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="•••••"
                      maxLength={5}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    A senha são os 5 primeiros dígitos do seu CPF/CNPJ
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-muted-foreground">Lembrar-me</span>
                  </label>
                  <a href="#" className="text-sm text-accent hover:text-accent/80">
                    Esqueci a senha
                  </a>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 mr-2 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4 mr-2" />
                      Entrar
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Ainda não tem acesso?{" "}
                  <a href="https://wa.me/558599149141" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80">
                    Solicite agora
                  </a>
                </p>
              </div>
            </Card>
          </div>

          {/* Coluna Direita - Informações */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Key className="w-5 h-5 text-accent" />
                  Chaves de Acesso
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gere chaves únicas para ativar seu sistema em qualquer dispositivo. 
                  Cada chave é vinculada à sua licença.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Boletos de Pagamento
                </h3>
                <p className="text-sm text-muted-foreground">
                  Emita boletos para renovação de licença ou pagamentos mensais 
                  de forma rápida e segura.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/20">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Segurança
                </h3>
                <p className="text-sm text-muted-foreground">
                  Todas as operações são criptografadas e seus dados estão 
                  protegidos com as melhores práticas de segurança.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
