"use client";

import { useState } from "react";
import { TrendingDown, Calendar, Activity, Dumbbell, Utensils, Target, ChevronRight } from "lucide-react";

type Period = "day" | "week" | "month";

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("week");

  // Dados simulados de progresso por período
  const dataByPeriod = {
    day: {
      weightData: [
        { date: "Manhã", weight: 78.5 },
        { date: "Tarde", weight: 78.7 },
        { date: "Noite", weight: 78.6 },
      ],
      moodData: [
        { date: "Manhã", mood: "bem", emoji: "🙂" },
        { date: "Tarde", mood: "excelente", emoji: "😄" },
        { date: "Noite", mood: "bem", emoji: "🙂" },
      ],
      stats: {
        weightLost: 0.2,
        workoutsCompleted: 1,
        avgProtein: 75,
        symptomsReported: 2,
      },
    },
    week: {
      weightData: [
        { date: "01/06", weight: 82.5 },
        { date: "08/06", weight: 81.2 },
        { date: "15/06", weight: 80.1 },
        { date: "22/06", weight: 78.5 },
      ],
      moodData: [
        { date: "19/06", mood: "excelente", emoji: "😄" },
        { date: "20/06", mood: "bem", emoji: "🙂" },
        { date: "21/06", mood: "normal", emoji: "😐" },
        { date: "22/06", mood: "bem", emoji: "🙂" },
      ],
      stats: {
        weightLost: 4.0,
        workoutsCompleted: 3,
        avgProtein: 75,
        symptomsReported: 8,
      },
    },
    month: {
      weightData: [
        { date: "Sem 1", weight: 82.5 },
        { date: "Sem 2", weight: 81.2 },
        { date: "Sem 3", weight: 80.1 },
        { date: "Sem 4", weight: 78.5 },
      ],
      moodData: [
        { date: "Sem 1", mood: "bem", emoji: "🙂" },
        { date: "Sem 2", mood: "excelente", emoji: "😄" },
        { date: "Sem 3", mood: "normal", emoji: "😐" },
        { date: "Sem 4", mood: "bem", emoji: "🙂" },
      ],
      stats: {
        weightLost: 4.0,
        workoutsCompleted: 12,
        avgProtein: 75,
        symptomsReported: 25,
      },
    },
  };

  const currentData = dataByPeriod[selectedPeriod];
  const targetWeight = 65;
  const currentWeight = 78.5;
  const startWeight = 82.5;

  const progressPercentage = ((startWeight - currentWeight) / (startWeight - targetWeight)) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Monitoramento & Progresso</h1>
        <p className="text-sm text-gray-500 mt-1">Acompanhe sua jornada</p>
      </header>

      {/* Period Selector */}
      <div className="px-6 py-4 bg-white">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPeriod("day")}
            className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
              selectedPeriod === "day"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Dia
          </button>
          <button
            onClick={() => setSelectedPeriod("week")}
            className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
              selectedPeriod === "week"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Semana
          </button>
          <button
            onClick={() => setSelectedPeriod("month")}
            className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
              selectedPeriod === "month"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Mês
          </button>
        </div>
      </div>

      {/* Weight Progress Card */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Progresso de Peso</h2>
                <p className="text-sm text-blue-100">Meta: {targetWeight} kg</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-blue-100">Peso Atual</p>
                <p className="text-3xl font-bold">{currentWeight} kg</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Perdidos</p>
                <p className="text-2xl font-bold">-{currentData.stats.weightLost} kg</p>
              </div>
            </div>

            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              />
            </div>

            <div className="flex justify-between text-sm text-blue-100">
              <span>Início: {startWeight} kg</span>
              <span>{Math.round(progressPercentage)}% da meta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weight Chart */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Evolução do Peso - {selectedPeriod === "day" ? "Hoje" : selectedPeriod === "week" ? "Esta Semana" : "Este Mês"}
          </h3>
          <div className="space-y-3">
            {currentData.weightData.map((data, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-sm text-gray-500 w-16">{data.date}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full flex items-center justify-end pr-3"
                    style={{ width: `${(data.weight / startWeight) * 100}%` }}
                  >
                    <span className="text-xs font-bold text-white">{data.weight} kg</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mood Tracker */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-600" />
            Como Você Está Se Sentindo - {selectedPeriod === "day" ? "Hoje" : selectedPeriod === "week" ? "Esta Semana" : "Este Mês"}
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {currentData.moodData.map((data, index) => (
              <div key={index} className="text-center">
                <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-3xl mb-2 border-2 border-gray-200">
                  {data.emoji}
                </div>
                <p className="text-xs text-gray-500">{data.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Treinos</p>
                <p className="text-2xl font-bold text-gray-900">{currentData.stats.workoutsCompleted}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {selectedPeriod === "day" ? "Hoje" : selectedPeriod === "week" ? "Esta semana" : "Este mês"}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Utensils className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Proteína</p>
                <p className="text-2xl font-bold text-gray-900">{currentData.stats.avgProtein}g</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Média diária</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Sintomas</p>
                <p className="text-2xl font-bold text-gray-900">{currentData.stats.symptomsReported}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {selectedPeriod === "day" ? "Hoje" : selectedPeriod === "week" ? "Esta semana" : "Este mês"}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Falta</p>
                <p className="text-2xl font-bold text-gray-900">{(currentWeight - targetWeight).toFixed(1)}kg</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">Para atingir meta</p>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
          <h3 className="font-semibold text-green-900 mb-2">🎉 Parabéns!</h3>
          <p className="text-sm text-green-800 leading-relaxed">
            Você já perdeu {currentData.stats.weightLost} kg {selectedPeriod === "day" ? "hoje" : selectedPeriod === "week" ? "esta semana" : "este mês"}. Continue assim! 
            Você está {Math.round(progressPercentage)}% mais perto da sua meta.
          </p>
        </div>
      </div>
    </div>
  );
}
