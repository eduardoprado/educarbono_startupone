import React, { useState } from 'react';
import { Check, Star, ArrowRight, Users, BookOpen, Award, Headphones, Zap } from 'lucide-react';

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      description: 'Perfeito para produtores iniciantes',
      monthlyPrice: 29.90,
      yearlyPrice: 299,
      popular: false,
      features: [
        'Acesso a 10 cursos fundamentais',
        'Certificados de conclusão',
        'Suporte por email',
        'Biblioteca de recursos básica',
        'Calculadora de potencial de carbono',
        'Comunidade online',
      ],
      limitations: [
        'Sem acesso a especialistas',
        'Sem cursos avançados',
        'Suporte limitado',
      ],
      cta: 'Começar Agora',
      icon: BookOpen,
    },
    {
      id: 'professional',
      name: 'Profissional',
      description: 'Para produtores sérios sobre créditos de carbono',
      monthlyPrice: 69.90,
      yearlyPrice: 699,
      popular: true,
      features: [
        'Acesso a todos os 50+ cursos',
        'Certificações profissionais',
        '2 consultas mensais com especialistas',
        'Biblioteca completa de recursos',
        'Templates de documentação',
        'Análise personalizada da propriedade',
        'Suporte prioritário',
        'Webinars exclusivos',
        'Networking com outros produtores',
      ],
      limitations: [],
      cta: 'Mais Popular',
      icon: Star,
    },
    {
      id: 'consultant',
      name: 'Plano Consultor',
      description: 'Para consultores e grandes propriedades',
      monthlyPrice: 199.90,
      yearlyPrice: 1999,
      popular: false,
      features: [
        'Tudo do plano Profissional',
        'Consultas ilimitadas com especialistas',
        'Desenvolvimento de projeto personalizado',
        'Suporte dedicado 24/7',
        'Treinamento presencial (opcional)',
        'Relatórios avançados de ROI',
        'Integração com sistemas existentes',
        'Suporte para múltiplas propriedades',
        'Gerente de conta dedicado',
      ],
      limitations: [],
      cta: 'Falar com Vendas',
      icon: Users,
    },
  ];

  const faqs = [
    {
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento e você manterá acesso até o final do período pago.',
    },
    {
      question: 'Os certificados são reconhecidos no mercado?',
      answer: 'Sim, nossos certificados são reconhecidos por principais organizações do setor de créditos de carbono no Brasil e internacionalmente.',
    },
    {
      question: 'Como funciona a consultoria com especialistas?',
      answer: 'Você pode agendar consultas individuais com nossos especialistas certificados através da plataforma. Cada sessão dura 1 hora e pode ser feita por videoconferência.',
    },
    {
      question: 'Existe desconto para pagamento anual?',
      answer: 'Sim, oferecemos 2 meses grátis para quem escolhe o pagamento anual, resultando em uma economia significativa.',
    },
    {
      question: 'Posso fazer upgrade do meu plano?',
      answer: 'Claro! Você pode fazer upgrade a qualquer momento e pagará apenas a diferença proporcional.',
    },
    {
      question: 'Há garantia de satisfação?',
      answer: 'Oferecemos garantia de 30 dias. Se não estiver satisfeito, devolvemos 100% do valor pago.',
    },
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly') {
      const monthlyCost = plan.monthlyPrice * 12;
      const yearlyCost = plan.yearlyPrice;
      return monthlyCost - yearlyCost;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal Para Você
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transforme sua propriedade rural em uma fonte de renda sustentável com nossos planos especializados em créditos de carbono.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Anual
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                2 meses grátis
              </span>
            )}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = getPrice(plan);
            const savings = getSavings(plan);
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-sm border-2 p-8 ${
                  plan.popular
                    ? 'border-green-500 ring-2 ring-green-200'
                    : 'border-gray-200 hover:border-green-300'
                } transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${
                    plan.popular ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.popular ? 'text-green-600' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                    <span className="text-gray-500 ml-1">
                      /{billingCycle === 'monthly' ? 'mês' : 'ano'}
                    </span>
                    {savings > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Economize R$ {savings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/ano
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Compare Todos os Recursos
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Recursos</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Básico</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Profissional</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Consultor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Cursos disponíveis', basic: '10', pro: '50+', consultant: '50+' },
                  { feature: 'Certificados', basic: '✓', pro: '✓', consultant: '✓' },
                  { feature: 'Consultas com especialistas', basic: '✗', pro: '2/mês', consultant: 'Ilimitadas' },
                  { feature: 'Suporte', basic: 'Email', pro: 'Prioritário', consultant: '24/7 Dedicado' },
                  { feature: 'Análise da propriedade', basic: '✗', pro: '✓', consultant: '✓' },
                  { feature: 'Desenvolvimento de projeto', basic: '✗', pro: '✗', consultant: '✓' },
                  { feature: 'Gerente de conta', basic: '✗', pro: '✗', consultant: '✓' },
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.basic}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.pro}</td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.consultant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ainda Tem Dúvidas?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a escolher o melhor plano para suas necessidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors">
              <Headphones className="w-5 h-5 mr-2" />
              Falar com Consultor
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-400 transition-colors">
              <Zap className="w-5 h-5 mr-2" />
              Teste Grátis por 7 Dias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}