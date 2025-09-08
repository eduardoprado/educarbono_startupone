import React, { useState } from 'react';
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Calendar, 
  Play, 
  CheckCircle, 
  Clock, 
  Users,
  FileText,
  Star,
  Target,
  DollarSign
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledCourses = [
    {
      id: 1,
      title: 'Fundamentos dos Créditos de Carbono',
      progress: 85,
      totalLessons: 12,
      completedLessons: 10,
      nextLesson: 'Entendendo os Mercados de Carbono',
      instructor: 'Dra. Jessica Ramos',
      dueDate: '2024-02-15',
      thumbnail: 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'Configuração de Projetos de Carbono do Solo',
      progress: 45,
      totalLessons: 18,
      completedLessons: 8,
      nextLesson: 'Medições de Linha de Base',
      instructor: 'Tiago Ribeiro',
      dueDate: '2024-03-01',
      thumbnail: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Documentação e Verificação',
      progress: 20,
      totalLessons: 14,
      completedLessons: 3,
      nextLesson: 'Introdução aos Sistemas MRV',
      instructor: 'Dr. Michel Chen',
      dueDate: '2024-03-15',
      thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const achievements = [
    { id: 1, title: 'Primeiro Curso Concluído', description: 'Concluiu seu primeiro curso de créditos de carbono', earned: true, date: '2024-01-10' },
    { id: 2, title: 'Buscador de Conhecimento', description: 'Inscrito em 3 ou mais cursos', earned: true, date: '2024-01-15' },
    { id: 3, title: 'Conexão com Especialista', description: 'Agendou sua primeira consulta com especialista', earned: false },
    { id: 4, title: 'Pronto para Projeto', description: 'Concluiu todos os cursos fundamentais', earned: false },
    { id: 5, title: 'Contribuidor da Comunidade', description: 'Ajudou mais de 10 produtores nos fóruns', earned: false },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Consulta com Especialista: Planejamento de Projeto',
      type: 'consultation',
      date: '2024-01-25',
      time: '10:00',
      expert: 'Dra. Jessica Ramos',
      duration: '1 hora',
    },
    {
      id: 2,
      title: 'Webinar: Tendências de Mercado Q1 2024',
      type: 'webinar',
      date: '2024-01-30',
      time: '14:00',
      speaker: 'Emily Davis',
      duration: '45 minutos',
    },
    {
      id: 3,
      title: 'Prazo do Curso: Quiz Final de Fundamentos',
      type: 'deadline',
      date: '2024-02-05',
      time: '23:59',
      course: 'Fundamentos dos Créditos de Carbono',
    },
  ];

  const projectMetrics = {
    potentialRevenue: 45000,
    carbonCredits: 180,
    projectStatus: 'Fase de Planejamento',
    completionDate: '2024-06-15',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo de volta, João! 👋
          </h1>
          <p className="text-xl text-gray-600">
            Continue sua jornada de créditos de carbono e acompanhe seu progresso
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
                { id: 'courses', label: 'Meus Cursos', icon: BookOpen },
                { id: 'achievements', label: 'Conquistas', icon: Award },
                { id: 'calendar', label: 'Calendário', icon: Calendar },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Cursos Ativos</p>
                    <p className="text-2xl font-bold text-gray-900">3</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Certificados</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Progresso Geral</p>
                    <p className="text-2xl font-bold text-gray-900">67%</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Receita Potencial</p>
                    <p className="text-2xl font-bold text-gray-900">${projectMetrics.potentialRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Courses Progress */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progresso dos Cursos</h3>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{course.completedLessons}/{course.totalLessons} aulas</span>
                        <span>Prazo: {new Date(course.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Eventos</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <div className="flex-shrink-0">
                        {event.type === 'consultation' && <Users className="w-5 h-5 text-blue-600" />}
                        {event.type === 'webinar' && <Play className="w-5 h-5 text-green-600" />}
                        {event.type === 'deadline' && <Clock className="w-5 h-5 text-red-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                        {event.expert && (
                          <p className="text-xs text-gray-400">com {event.expert}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Meus Cursos</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                Explorar Mais Cursos
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">por {course.instructor}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progresso</span>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      <p>Próximo: {course.nextLesson}</p>
                      <p>Prazo: {new Date(course.dueDate).toLocaleDateString()}</p>
                    </div>

                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2" />
                      Continuar Aprendendo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conquistas</h2>
              <p className="text-gray-600">Acompanhe seus marcos de aprendizado e desbloqueie recompensas</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`bg-white rounded-lg shadow-sm p-6 border-2 ${
                    achievement.earned
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full ${
                      achievement.earned 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      {achievement.earned ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-semibold ${
                        achievement.earned ? 'text-green-900' : 'text-gray-700'
                      }`}>
                        {achievement.title}
                      </h3>
                      {achievement.earned && achievement.date && (
                        <p className="text-sm text-green-600">
                          Conquistado em {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-green-700' : 'text-gray-600'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Calendário</h2>
              <p className="text-gray-600">Gerencie sua agenda de aprendizado e próximos eventos</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Próximos Eventos</h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            event.type === 'consultation' 
                              ? 'bg-blue-100 text-blue-800'
                              : event.type === 'webinar'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>{new Date(event.date).toLocaleDateString()} at {event.time}</p>
                          {event.duration && <p>Duração: {event.duration}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Prazos dos Cursos</h3>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="border rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{course.title}</h4>
                        <div className="text-sm text-gray-600">
                          <p>Prazo: {new Date(course.dueDate).toLocaleDateString()}</p>
                          <p>Progresso: {course.progress}%</p>
                        </div>
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div 
                              className="bg-green-600 h-1 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}