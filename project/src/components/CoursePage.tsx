import React, { useState } from 'react';
import { Clock, Users, Star, Play, BookOpen, Award, ChevronRight, Filter } from 'lucide-react';

export default function CoursePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos os Cursos' },
    { id: 'fundamentals', name: 'Fundamentos' },
    { id: 'project-development', name: 'Desenvolvimento de Projetos' },
    { id: 'market-strategies', name: 'Estratégias de Mercado' },
    { id: 'documentation', name: 'Documentação' },
    { id: 'advanced', name: 'Tópicos Avançados' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Fundamentos dos Créditos de Carbono',
      category: 'fundamentals',
      level: 'beginner',
      description: 'Aprenda o básico sobre créditos de carbono, como funcionam e por que são importantes para produtores.',
      duration: '4 horas',
      students: 1250,
      rating: 4.8,
      lessons: 12,
      price: 'Grátis',
      image: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dra. Jessica Ramos',
      completed: false,
    },
    {
      id: 2,
      title: 'Configuração de Projetos de Carbono do Solo',
      category: 'project-development',
      level: 'intermediate',
      description: 'Guia passo a passo para configurar projetos de sequestro de carbono do solo na sua propriedade.',
      duration: '6 horas',
      students: 890,
      rating: 4.9,
      lessons: 18,
      price: 'R$149',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Tiago Ribeiro',
      completed: false,
    },
    {
      id: 3,
      title: 'Navegação no Mercado de Carbono',
      category: 'market-strategies',
      level: 'intermediate',
      description: 'Entenda os diferentes mercados de carbono e como maximizar o valor dos seus créditos.',
      duration: '5 horas',
      students: 567,
      rating: 4.7,
      lessons: 15,
      price: 'R$199',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Lisa Martins',
      completed: false,
    },
    {
      id: 4,
      title: 'Documentação e Verificação',
      category: 'documentation',
      level: 'intermediate',
      description: 'Domine os requisitos de documentação para verificação e auditoria de créditos de carbono.',
      duration: '4 horas',
      students: 432,
      rating: 4.8,
      lessons: 14,
      price: 'R$99',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Michel Chen',
      completed: false,
    },
    {
      id: 5,
      title: 'Otimização Avançada de Projetos',
      category: 'advanced',
      level: 'advanced',
      description: 'Técnicas avançadas para maximizar o sequestro de carbono e geração de créditos.',
      duration: '8 horas',
      students: 234,
      rating: 4.9,
      lessons: 22,
      price: 'R$299',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dra. Emily Davis',
      completed: false,
    },
    {
      id: 6,
      title: 'Projetos de Carbono Florestal',
      category: 'project-development',
      level: 'intermediate',
      description: 'Desenvolva e gerencie projetos de sequestro de carbono baseados em florestas.',
      duration: '7 horas',
      students: 345,
      rating: 4.6,
      lessons: 20,
      price: 'R$249',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'James Wilson',
      completed: false,
    },
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
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
            Cursos de Créditos de Carbono
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Domine a arte dos créditos de carbono com nossa biblioteca abrangente de cursos. 
            Dos fundamentos às estratégias avançadas, aprenda no seu próprio ritmo.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filtrar Cursos</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nível
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="all">Todos os Níveis</option>
                <option value="beginner">Iniciante</option>
                <option value="intermediate">Intermediário</option>
                <option value="advanced">Avançado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-green-600 p-3 rounded-full hover:bg-green-50 transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                    {course.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{course.lessons} aulas</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students.toLocaleString()} alunos</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                  <span>Inscrever-se Agora</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">
              Não sabe por onde começar?
            </h2>
            <p className="text-green-100 mb-6">
              Siga nosso caminho de aprendizado recomendado, projetado especificamente para produtores novos em créditos de carbono.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-50 transition-colors">
                Ver Trilha de Aprendizado
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-green-600 transition-colors">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}