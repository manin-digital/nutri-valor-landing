
import { Check, Clock, Users, Target, Calendar, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "A imersão será ao vivo?",
      answer: "Sim, 100% ao vivo para garantir a melhor troca e aprendizado."
    },
    {
      question: "Se eu não puder participar ao vivo, terei acesso à gravação?",
      answer: "Sim, a gravação ficará disponível por 6 meses."
    },
    {
      question: "Para quem é esta imersão?",
      answer: "Para nutricionistas (estudantes ou formadas) que se sentem perdidas e querem um plano claro para se posicionar e atrair clientes."
    },
    {
      question: "Receberei material de apoio?",
      answer: "Sim, você receberá um workbook completo para acompanhar os exercícios."
    }
  ];

  const painPoints = [
    "perdida e sem uma direção clara na carreira.",
    "frustrada por ver sua agenda com mais buracos do que gostaria.",
    "insegura para se posicionar e mostrar seu verdadeiro valor.",
    "cansada de postar conteúdo sem ver resultados em pacientes.",
    "sentindo que a faculdade não te preparou para o mercado real."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-emerald-700">Método Alquimia</div>
          </div>
        </div>
      </header>

      {/* Bloco 1: Cabeçalho de Impacto */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Cansada de ser <span className="text-yellow-300">invisível?</span>
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-emerald-100 leading-relaxed">
                Descubra o plano prático de 2 dias para construir sua marca pessoal, se posicionar como autoridade e se tornar uma Nutri de Valor.
              </h2>
              <p className="text-lg mb-8 text-emerald-100">
                Uma imersão 100% ao vivo e online com João Paulo Mendes. Dias 15 e 16 de Julho.
              </p>
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                QUERO GARANTIR MINHA VAGA NO 1º LOTE POR R$19
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-gray-300 rounded-lg shadow-2xl flex items-center justify-center">
                <span className="text-gray-600">Foto do Mentor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2: A Dor - Conexão com o Público */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Se você se sente assim, esta imersão é para você...
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border-l-4 border-red-400">
                <Target className="text-red-500 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">...{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3: A Virada de Chave */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              O problema não é falta de esforço. É falta de um plano.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Muitas nutricionistas tentam construir um negócio começando pelo telhado: focam em táticas de marketing sem antes ter uma base sólida. Elas publicam, fazem stories, mas a comunicação é genérica e não atrai os pacientes certos. O resultado? Esgotamento e frustração. Nesta imersão, vamos construir seu alicerce primeiro. Vamos encontrar a sua voz única para que seu marketing seja apenas uma consequência natural da sua autoridade.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 4: O Cronograma da Imersão */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            O Plano de 2 Dias para Destravar sua Autoridade
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-emerald-200 hover:border-emerald-400 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="text-emerald-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-emerald-700">Dia 1: O Alicerce da Autoridade</h3>
                </div>
                <p className="text-lg text-emerald-600 font-semibold mb-4">
                  Foco em ESTRATÉGIA. Você vai sair com uma clareza que nunca teve sobre sua marca.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">O que veremos:</h4>
                  <div className="flex items-start space-x-3">
                    <Check className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">A Mentalidade da Nutri de Valor</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Desvendando seu "Elixir Estratégico" (Workshop prático para definir seu propósito, posicionamento e mensagem central)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-teal-200 hover:border-teal-400 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="text-teal-600 mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-teal-700">Dia 2: A Construção da Autoridade</h3>
                </div>
                <p className="text-lg text-teal-600 font-semibold mb-4">
                  Foco em AÇÃO. Você vai sair com um plano prático para os seus próximos 30 dias.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">O que veremos:</h4>
                  <div className="flex items-start space-x-3">
                    <Check className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">O Ecossistema da Atração Magnética (A lógica por trás do conteúdo que atrai)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Seu Plano de Ação de Conteúdo (Workshop prático para montar seu calendário editorial)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bloco 5: Seção de Preço e CTA Final */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Sua chance de destravar sua carreira por um valor simbólico.
          </h2>
          <p className="text-xl mb-12 text-gray-700 max-w-4xl mx-auto">
            O conhecimento que será entregue nesta imersão vale centenas de reais, mas meu objetivo é criar um movimento de Nutricionistas de Valor. Por isso, estou disponibilizando os ingressos em lotes com um preço especial de lançamento.
          </p>
          
          <Card className="max-w-md mx-auto bg-white shadow-2xl border-4 border-yellow-300">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">LOTE 1</h3>
              <div className="text-5xl font-bold text-emerald-600 mb-4">R$ 19,00</div>
              <p className="text-red-600 font-semibold mb-6">
                (Vagas limitadas. O preço vai subir para R$ 47,00 no segundo lote)
              </p>
              <Button 
                size="lg" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                SIM, QUERO MINHA VAGA NO 1º LOTE AGORA!
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Ambiente de pagamento 100% seguro.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bloco 6: Sobre o Mentor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Seu Guia Nesta Jornada
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="w-80 h-96 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
                  <span className="text-gray-600">Foto João Paulo Mendes</span>
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  João Paulo Mendes é nutricionista, mentor e professor com mais de 10 anos de atuação e mais de 3 mil alunos formados. Após construir uma carreira de sucesso e uma das maiores redes de lojas de suplementos do país, hoje ele dedica sua energia a aplicar o Método Alquimia para ajudar nutricionistas a saírem do improviso e construírem um negócio com propósito, autoridade e prosperidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 7: FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <Collapsible>
                  <CollapsibleTrigger 
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                      <ChevronDown 
                        className={`text-gray-500 transition-transform duration-200 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`} 
                        size={20} 
                      />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6">
                    <p className="text-gray-700">{item.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Não perca esta oportunidade única!
          </h2>
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-12 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            GARANTIR MINHA VAGA NO 1º LOTE - R$19
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Método Alquimia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
