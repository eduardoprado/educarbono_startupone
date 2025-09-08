import React, { useState } from 'react';
import { Download, FileText, Video, BookOpen, ExternalLink, Search, Filter, Star } from 'lucide-react';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resourceTypes = [
    { id: 'all', name: 'Todos os Tipos', icon: FileText },
    { id: 'guide', name: 'Guias', icon: BookOpen },
    { id: 'template', name: 'Modelos', icon: FileText },
    { id: 'video', name: 'Vídeos', icon: Video },
    { id: 'webinar', name: 'Webinars', icon: Video },
  ];

  const categories = [
    { id: 'all', name: 'Todas as Categorias' },
    { id: 'getting-started', name: 'Primeiros Passos' },
    { id: 'project-development', name: 'Desenvolvimento de Projetos' },
    { id: 'documentation', name: 'Documentação' },
    { id: 'market-insights', name: 'Insights de Mercado' },
    { id: 'case-studies', name: 'Estudos de Caso' },
    { id: 'legal-compliance', name: 'Legal e Conformidade' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Guia Completo de Créditos de Carbono do Solo',
      type: 'guide',
      category: 'getting-started',
      description: 'Guia abrangente de 50 páginas cobrindo tudo que você precisa saber sobre créditos de carbono do solo para produtores.',
      format: 'PDF',
      size: '5.2 MB',
      downloads: 2847,
      rating: 4.9,
      author: 'Dra. Jessica Ramos',
      updated: '2024-01-15',
      featured: true,
      free: true,
    },
    {
      id: 2,
      title: 'Modelo de Proposta de Projeto de Carbono',
      type: 'template',
      category: 'project-development',
      description: 'Modelo profissional para criar propostas de projetos de créditos de carbono que atendem aos padrões da indústria.',
      format: 'DOCX',
      size: '1.8 MB',
      downloads: 1923,
      rating: 4.8,
      author: 'Tiago Ribeiro',
      updated: '2024-01-10',
      featured: false,
      free: true,
    },
    {
      id: 3,
      title: 'Entendendo os Mercados de Carbono - Série de Webinars',
      type: 'webinar',
      category: 'market-insights',
      description: 'Série de webinars em 4 partes cobrindo mercados de carbono voluntários e de conformidade, estratégias de preços e relacionamentos com compradores.',
      format: 'Vídeo',
      duration: '3 horas',
      downloads: 1654,
      rating: 4.7,
      author: 'Lisa Martins',
      updated: '2024-01-08',
      featured: true,
      free: false,
      price: 'R$ 49',
    },
    {
      id: 4,
      title: 'Lista de Verificação de Documentação MRV',
      type: 'template',
      category: 'documentation',
      description: 'Lista de verificação completa para requisitos de Monitoramento, Relatório e Verificação em diferentes padrões de carbono.',
      format: 'PDF',
      size: '0.8 MB',
      downloads: 3241,
      rating: 4.9,
      author: 'Dr. Michel Chen',
      updated: '2024-01-12',
      featured: false,
      free: true,
    },
    {
      id: 5,
      title: 'Estudos de Caso de Agricultura Regenerativa',
      type: 'guide',
      category: 'case-studies',
      description: 'Exemplos do mundo real de projetos bem-sucedidos de agricultura regenerativa e seus resultados de créditos de carbono.',
      format: 'PDF',
      size: '7.3 MB',
      downloads: 1876,
      rating: 4.8,
      author: 'Múltiplos Autores',
      updated: '2024-01-05',
      featured: false,
      free: true,
    },
    {
      id: 6,
      title: 'Guia de Conformidade Legal de Créditos de Carbono',
      type: 'guide',
      category: 'legal-compliance',
      description: 'Navegue no cenário legal dos créditos de carbono incluindo contratos, responsabilidade e requisitos regulatórios.',
      format: 'PDF',
      size: '4.1 MB',
      downloads: 987,
      rating: 4.6,
      author: 'James Wilson',
      updated: '2024-01-03',
      featured: false,
      free: false,
      price: 'R$ 29',
    },
    {
      id: 7,
      title: 'Guia em Vídeo do Protocolo de Amostragem de Solo',
      type: 'video',
      category: 'project-development',
      description: 'Demonstração em vídeo passo a passo das técnicas adequadas de amostragem de solo para medição de carbono.',
      format: 'MP4',
      duration: '45 minutos',
      downloads: 2156,
      rating: 4.9,
      author: 'Dra. Jessica Ramos',
      updated: '2024-01-14',
      featured: true,
      free: true,
    },
    {
      id: 8,
      title: 'Análise de Preços do Mercado de Carbono Q4 2023',
      type: 'guide',
      category: 'market-insights',
      description: 'Análise detalhada das tendências de preços de créditos de carbono, movimentos de mercado e projeções futuras.',
      format: 'PDF',
      size: '3.5 MB',
      downloads: 1432,
      rating: 4.7,
      author: 'Emily Davis',
      updated: '2024-01-01',
      featured: false,
      free: false,
      price: 'R$ 19',
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    const typeObj = resourceTypes.find(t => t.id === type);
    return typeObj ? typeObj.icon : FileText;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide':
        return 'bg-blue-100 text-blue-800';
      case 'template':
        return 'bg-green-100 text-green-800';
      case 'video':
        return 'bg-purple-100 text-purple-800';
      case 'webinar':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Biblioteca de Recursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Acesse guias abrangentes, modelos e documentação para apoiar sua jornada de créditos de carbono.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Encontrar Recursos</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {resourceTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Resources */}
        {filteredResources.some(r => r.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recursos em Destaque</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.filter(r => r.featured).map((resource) => {
                const Icon = getTypeIcon(resource.type);
                return (
                  <div
                    key={resource.id}
                    className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span>{resource.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      <span>{resource.free ? 'Download Grátis' : `Download ${resource.price}`}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos os Recursos</h2>
          <div className="space-y-4">
            {filteredResources.map((resource) => {
              const Icon = getTypeIcon(resource.type);
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(resource.type)} flex-shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {resource.title}
                        </h3>
                        <div className="flex items-center space-x-2 ml-4">
                          {!resource.free && (
                            <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                              {resource.price}
                            </span>
                          )}
                          {resource.featured && (
                            <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                              Destaque
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Por {resource.author}</span>
                          <span>•</span>
                          <span>{resource.format}</span>
                          <span>•</span>
                          <span>
                            {resource.size ? resource.size : resource.duration}
                          </span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span>{resource.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{resource.downloads.toLocaleString()} downloads</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="text-green-600 hover:text-green-700 p-2">
                            <ExternalLink className="w-4 h-4" />
                          </button>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center">
                            <Download className="w-4 h-4 mr-2" />
                            <span>{resource.free ? 'Grátis' : resource.price}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Recursos Personalizados?
          </h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe pode criar guias personalizados, modelos e documentação adaptados às suas necessidades específicas do projeto.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-md font-medium hover:bg-green-50 transition-colors">
            Solicitar Recursos Personalizados
          </button>
        </div>
      </div>
    </div>
  );
}