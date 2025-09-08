import React from 'react';
import { ArrowRight, Award, BookOpen, Users, Leaf, TrendingUp, CheckCircle } from 'lucide-react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export default function HomePage({ setActiveTab }: HomePageProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Cursos Abrangentes',
      description: 'Aprenda os fundamentos dos créditos de carbono, desenvolvimento de projetos e estratégias de mercado com especialistas da indústria.',
    },
    {
      icon: Users,
      title: 'Rede de Especialistas',
      description: 'Conecte-se com especialistas certificados que podem orientá-lo em sua jornada de projetos de carbono.',
    },
    {
      icon: Award,
      title: 'Certificação',
      description: 'Obtenha certificados reconhecidos ao concluir os cursos para validar sua expertise.',
    },
    {
      icon: TrendingUp,
      title: 'Maximize o Valor',
      description: 'Descubra estratégias para otimizar o uso da sua terra e gerar fluxos de renda sustentáveis.',
    },
  ];

  const stats = [
    { number: '2.500+', label: 'Produtores Treinados' },
    { number: '150+', label: 'Especialistas Parceiros' },
    { number: '50+', label: 'Cursos Disponíveis' },
    { number: 'R$ 12M+', label: 'Receita de Carbono Gerada' },
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'São Paulo',
      quote: 'O Educarbono me ajudou a entender como transformar minhas práticas agrícolas sustentáveis em renda adicional. Gerei R$ 75.000 em créditos de carbono no ano passado!',
      avatar: '🌾',
    },
    {
      name: 'João Silva',
      location: 'Mato Grosso',
      quote: 'As conexões com especialistas foram inestimáveis. Meu especialista me orientou durante todo o processo de configuração do projeto.',
      avatar: '🚜',
    },
    {
      name: 'Ana Costa',
      location: 'Rio Grande do Sul',
      quote: 'Cursos claros e práticos que realmente funcionam. Gostaria de ter encontrado esta plataforma há anos.',
      avatar: '🌱',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforme Sua Propriedade com
              <span className="text-green-600 block">Créditos de Carbono</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aprenda como gerar receita adicional com suas práticas agrícolas sustentáveis. 
              Junte-se a milhares de produtores que já estão ganhando com projetos de créditos de carbono.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('courses')}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Começar a Aprender
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTab('experts')}
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-medium rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                Encontrar um Especialista
                <Users className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tudo o Que Você Precisa Para Ter Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Da educação à implementação, fornecemos suporte abrangente para sua jornada de créditos de carbono.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Processo Simples em 4 Etapas
            </h2>
            <p className="text-xl text-gray-600">
              Comece a ganhar com créditos de carbono em apenas algumas etapas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Aprenda o Básico', desc: 'Faça nossos cursos fundamentais sobre créditos de carbono e agricultura sustentável' },
              { step: 2, title: 'Conecte-se com Especialistas', desc: 'Seja conectado com especialistas que entendem suas necessidades específicas' },
              { step: 3, title: 'Desenvolva Seu Projeto', desc: 'Trabalhe com especialistas para criar e registrar seu projeto de carbono' },
              { step: 4, title: 'Comece a Ganhar', desc: 'Gere e venda créditos de carbono de suas práticas sustentáveis' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Histórias de Sucesso
            </h2>
            <p className="text-xl text-gray-600">
              Ouça produtores que transformaram suas operações com créditos de carbono
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-green-500 mr-1" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto Para Começar Sua Jornada de Créditos de Carbono?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de produtores que já estão ganhando receita adicional enquanto ajudam o meio ambiente.
          </p>
          <button
            onClick={() => setActiveTab('courses')}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-50 transition-colors transform hover:scale-105"
          >
            Comece Hoje
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}