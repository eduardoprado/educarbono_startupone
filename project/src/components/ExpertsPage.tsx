import React, { useState } from 'react';
import { MapPin, Star, MessageCircle, Calendar, Award, Users, Filter, Search } from 'lucide-react';

export default function ExpertsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const specialties = [
    { id: 'all', name: 'Todas as Especialidades' },
    { id: 'soil-carbon', name: 'Carbono do Solo' },
    { id: 'forest-carbon', name: 'Carbono Florestal' },
    { id: 'project-development', name: 'Desenvolvimento de Projetos' },
    { id: 'market-analysis', name: 'Análise de Mercado' },
    { id: 'verification', name: 'Verificação e Auditoria' },
    { id: 'policy', name: 'Política e Conformidade' },
  ];

  const experts = [
    {
      id: 1,
      name: 'Dra. Jessica Ramos',
      specialty: 'soil-carbon',
      location: 'São Paulo, Brasil',
      rating: 4.9,
      reviews: 127,
      hourlyRate: 150,
      experience: '12 anos',
      avatar: '👩‍🔬',
      bio: 'Especialista líder em carbono do solo com vasta experiência em projetos de sequestro de carbono agrícola.',
      expertise: ['Carbono do Solo', 'Agricultura Regenerativa', 'Desenvolvimento de Projetos'],
      availability: 'Disponível esta semana',
      completedProjects: 89,
      successRate: 96,
      languages: ['Português', 'Inglês'],
      certifications: ['Verified Carbon Standard', 'Gold Standard'],
    },
    {
      id: 2,
      name: 'Tiago Ribeiro',
      specialty: 'project-development',
      location: 'Mato Grosso, Brasil',
      rating: 4.8,
      reviews: 98,
      hourlyRate: 125,
      experience: '8 anos',
      avatar: '👨‍💼',
      bio: 'Especialista em desenvolvimento de projetos de carbono, especializado em ajudar produtores a navegar todo o ciclo de vida do projeto.',
      expertise: ['Desenvolvimento de Projetos', 'Estratégia de Mercado', 'Documentação'],
      availability: 'Disponível na próxima semana',
      completedProjects: 67,
      successRate: 94,
      languages: ['Português'],
      certifications: ['Climate Action Reserve', 'American Carbon Registry'],
    },
    {
      id: 3,
      name: 'Dra. Lisa Martins',
      specialty: 'forest-carbon',
      location: 'Amazonas, Brasil',
      rating: 4.9,
      reviews: 156,
      hourlyRate: 175,
      experience: '15 anos',
      avatar: '🌲',
      bio: 'Especialista em carbono florestal e agrofloresta com conhecimento profundo em projetos de carbono baseados em árvores.',
      expertise: ['Carbono Florestal', 'Agrofloresta', 'Créditos de Biodiversidade'],
      availability: 'Disponível em 2 semanas',
      completedProjects: 134,
      successRate: 98,
      languages: ['Português', 'Inglês'],
      certifications: ['Forest Stewardship Council', 'Verified Carbon Standard'],
    },
    {
      id: 4,
      name: 'Dr. Michel Chen',
      specialty: 'verification',
      location: 'Rio Grande do Sul, Brasil',
      rating: 4.7,
      reviews: 82,
      hourlyRate: 140,
      experience: '10 anos',
      avatar: '📊',
      bio: 'Especialista em verificação e auditoria de créditos de carbono, garantindo conformidade e credibilidade do projeto.',
      expertise: ['Verificação', 'Auditoria', 'Conformidade', 'Sistemas MRV'],
      availability: 'Disponível esta semana',
      completedProjects: 112,
      successRate: 97,
      languages: ['Português', 'Inglês'],
      certifications: ['ISO 14064', 'Verified Carbon Standard'],
    },
    {
      id: 5,
      name: 'Emily Davis',
      specialty: 'market-analysis',
      location: 'Paraná, Brasil',
      rating: 4.8,
      reviews: 74,
      hourlyRate: 130,
      experience: '9 anos',
      avatar: '📈',
      bio: 'Analista de mercado de carbono ajudando produtores a entender tendências de preços e estratégias de venda otimizadas.',
      expertise: ['Análise de Mercado', 'Previsão de Preços', 'Estratégias de Negociação'],
      availability: 'Disponível esta semana',
      completedProjects: 56,
      successRate: 93,
      languages: ['Português', 'Inglês'],
      certifications: ['Carbon Management Professional', 'CFA Charter'],
    },
    {
      id: 6,
      name: 'James Wilson',
      specialty: 'policy',
      location: 'Distrito Federal, Brasil',
      rating: 4.9,
      reviews: 91,
      hourlyRate: 160,
      experience: '13 anos',
      avatar: '⚖️',
      bio: 'Especialista em política e conformidade ajudando a navegar no complexo cenário regulatório dos créditos de carbono.',
      expertise: ['Análise de Políticas', 'Conformidade Regulatória', 'Programas Governamentais'],
      availability: 'Disponível no próximo mês',
      completedProjects: 78,
      successRate: 96,
      languages: ['Português'],
      certifications: ['Environmental Law Certificate', 'Climate Policy Institute'],
    },
  ];

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'all' || expert.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === 'all' || expert.location.includes(selectedLocation);
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Especialistas em Créditos de Carbono
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Conecte-se com especialistas certificados que irão orientá-lo em cada etapa da sua jornada de créditos de carbono.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Encontre o Especialista Certo</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar especialistas ou habilidades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">Todas as Localizações</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Paraná">Paraná</option>
              <option value="Distrito Federal">Distrito Federal</option>
            </select>
          </div>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{expert.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{expert.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-yellow-500 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">
                      {expert.rating}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {expert.reviews} reviews
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {expert.bio}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="text-gray-500">Experiência</div>
                  <div className="font-medium text-gray-900">{expert.experience}</div>
                </div>
                <div>
                  <div className="text-gray-500">Projetos</div>
                  <div className="font-medium text-gray-900">{expert.completedProjects}</div>
                </div>
                <div>
                  <div className="text-gray-500">Taxa de Sucesso</div>
                  <div className="font-medium text-green-600">{expert.successRate}%</div>
                </div>
                <div>
                  <div className="text-gray-500">Valor por Hora</div>
                  <div className="font-medium text-gray-900">R$ {expert.hourlyRate}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Disponibilidade</div>
                <div className="text-sm font-medium text-green-600">{expert.availability}</div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Agendar Consulta</span>
                </button>
                <button className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não consegue encontrar o especialista certo?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe ajudará a conectá-lo com o especialista perfeito com base em suas necessidades específicas e requisitos do projeto.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors">
            Solicitar Correspondência Personalizada
          </button>
        </div>
      </div>
    </div>
  );
}