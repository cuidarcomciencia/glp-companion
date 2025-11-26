"use client";

import { useState } from "react";
import {
  Pill,
  Activity,
  Utensils,
  Dumbbell,
  TrendingUp,
  Calendar,
  AlertCircle,
  ChevronRight,
  ShieldAlert,
  Target,
  TrendingDown,
  Bell,
} from "lucide-react";

type Page = "home" | "nutrition" | "workouts" | "symptoms" | "profile" | "medication" | "precautions" | "progress" | "reminders";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: "excelente", emoji: "😄", label: "Excelente" },
    { id: "bem", emoji: "🙂", label: "Bem" },
    { id: "normal", emoji: "😐", label: "Normal" },
    { id: "ruim", emoji: "😟", label: "Ruim" },
    { id: "muito-mal", emoji: "😢", label: "Muito Mal" },
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    // Aqui seria salvo no diário de monitoramento
    console.log("Humor registrado:", moodId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Olá, <span className="text-blue-600">Maria</span> 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Como você está se sentindo hoje?
        </p>

        {/* Mood Selector */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodSelect(mood.id)}
              className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl transition-all flex-shrink-0 ${
                selectedMood === mood.id
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-2xl">{mood.emoji}</span>
              <span className="text-xs font-medium whitespace-nowrap">{mood.label}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Dashboard de Acompanhamento */}
      <div className="px-6 py-6 bg-white mt-2">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingDown className="w-5 h-5 text-blue-600" />
          Seu Progresso
        </h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-md">
            <p className="text-xs text-blue-100 font-medium mb-1">Peso Atual</p>
            <p className="text-2xl font-bold">78.5 kg</p>
            <p className="text-xs text-blue-100 mt-1 flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              -2.3 kg este mês
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white shadow-md">
            <p className="text-xs text-purple-100 font-medium mb-1">
              Dose Atual
            </p>
            <p className="text-2xl font-bold">1.0 mg</p>
            <p className="text-xs text-purple-100 mt-1">Ozempic</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white shadow-md">
            <p className="text-xs text-green-100 font-medium mb-1">
              Próxima Dose
            </p>
            <p className="text-lg font-bold">Em 3 dias</p>
            <p className="text-xs text-green-100 mt-1">Sexta, 14/06</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white shadow-md">
            <p className="text-xs text-orange-100 font-medium mb-1">Sintomas</p>
            <p className="text-lg font-bold">Leve</p>
            <p className="text-xs text-orange-100 mt-1">Náusea ocasional</p>
          </div>
        </div>

        {/* Meta de Peso */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold text-indigo-900">Meta de Peso</h3>
            </div>
            <span className="text-sm font-bold text-indigo-600">65 kg</span>
          </div>
          <div className="w-full bg-indigo-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500"
              style={{ width: "77%" }}
            />
          </div>
          <p className="text-xs text-indigo-700 mt-2">
            Faltam 13.5 kg para atingir sua meta
          </p>
        </div>
      </div>

      {/* Daily Insight Banner */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-base mb-1">
                Insight do Dia
              </h3>
              <p className="text-sm text-blue-50 leading-relaxed">
                Você relatou náusea ontem. Veja receitas leves e suaves para
                hoje.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lembretes Button - Highlighted */}
      <div className="px-6 py-2">
        <button
          onClick={() => onNavigate("reminders")}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 flex items-center justify-between shadow-lg hover:shadow-xl transition-all active:scale-[0.98] border-2 border-blue-400"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg">
                Lembretes de Medicação
              </h3>
              <p className="text-sm text-blue-50">
                Configure notificações push
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Precautions Button - Highlighted */}
      <div className="px-6 py-2">
        <button
          onClick={() => onNavigate("precautions")}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-5 flex items-center justify-between shadow-lg hover:shadow-xl transition-all active:scale-[0.98] border-2 border-red-400"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-lg">
                Precauções e Contraindicações
              </h3>
              <p className="text-sm text-red-50">
                Informações essenciais de segurança
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Quick Access */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Acesso Rápido</h2>

        <div className="space-y-3">
          <button
            onClick={() => onNavigate("medication")}
            className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Pill className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Guia da Medicação
                </h3>
                <p className="text-sm text-gray-500">
                  Instruções e informações
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => onNavigate("symptoms")}
            className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Manejo de Sintomas
                </h3>
                <p className="text-sm text-gray-500">Registre e gerencie</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => onNavigate("nutrition")}
            className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Nutrição Inteligente
                </h3>
                <p className="text-sm text-gray-500">Receitas Digestivas Leves</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => onNavigate("workouts")}
            className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Treinos para Massa Magra
                </h3>
                <p className="text-sm text-gray-500">7-15 min diários</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            onClick={() => onNavigate("progress")}
            className="w-full bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">
                  Monitoramento & Progresso
                </h3>
                <p className="text-sm text-gray-500">Gráficos e tendências</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Next Dose Reminder */}
      <div className="px-6 py-4 mb-6">
        <div className="bg-white rounded-2xl p-5 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Próxima Aplicação</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-1">
            Sexta-feira, 14/06
          </p>
          <p className="text-sm text-gray-500">
            Faltam 3 dias para sua próxima dose de Ozempic 1.0mg
          </p>
        </div>
      </div>
    </div>
  );
}
