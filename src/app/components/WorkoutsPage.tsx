"use client";

import { useState } from "react";
import {
  Play,
  Clock,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

type WorkoutLevel = "beginner" | "intermediate" | "advanced";
type MuscleRisk = "low" | "moderate" | "high";

export default function WorkoutsPage() {
  const [selectedLevel] = useState<WorkoutLevel>("beginner");
  const [muscleRisk] = useState<MuscleRisk>("moderate");

  const workouts = [
    {
      id: 1,
      name: "Força Total Corpo",
      duration: 12,
      exercises: 6,
      level: "beginner",
      focus: "Corpo todo",
      calories: 80,
      icon: "💪",
    },
    {
      id: 2,
      name: "Pernas & Glúteos",
      duration: 10,
      exercises: 5,
      level: "beginner",
      focus: "Membros inferiores",
      calories: 90,
      icon: "🦵",
    },
    {
      id: 3,
      name: "Core & Estabilidade",
      duration: 8,
      exercises: 4,
      level: "beginner",
      focus: "Abdômen",
      calories: 60,
      icon: "🎯",
    },
    {
      id: 4,
      name: "Braços & Ombros",
      duration: 15,
      exercises: 7,
      level: "intermediate",
      focus: "Membros superiores",
      calories: 100,
      icon: "💪",
    },
    {
      id: 5,
      name: "Mobilidade Ativa",
      duration: 7,
      exercises: 5,
      level: "beginner",
      focus: "Flexibilidade",
      calories: 40,
      icon: "🧘",
    },
  ];

  const getRiskColor = (risk: MuscleRisk) => {
    switch (risk) {
      case "low":
        return "text-green-600 bg-green-50";
      case "moderate":
        return "text-orange-600 bg-orange-50";
      case "high":
        return "text-red-600 bg-red-50";
    }
  };

  const getRiskLabel = (risk: MuscleRisk) => {
    switch (risk) {
      case "low":
        return "Baixo";
      case "moderate":
        return "Moderado";
      case "high":
        return "Alto";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Treinos para Massa Magra
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Preserve seus músculos durante o tratamento
        </p>
      </header>

      {/* Muscle Risk Alert */}
      <div className="px-6 py-6 bg-white mt-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-900">
            Risco de Perda Muscular
          </h2>
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(
              muscleRisk
            )}`}
          >
            {getRiskLabel(muscleRisk)}
          </span>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Você está em risco moderado de perda muscular. Recomendamos
                treinar 3-4x por semana com foco em força.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-base">Progresso Semanal</h3>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="grid grid-cols-7 gap-2 mb-3">
            {["S", "T", "Q", "Q", "S", "S", "D"].map((day, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold mb-1 ${
                    index < 3
                      ? "bg-white text-purple-600"
                      : "bg-purple-400 text-purple-100"
                  }`}
                >
                  {index < 3 ? <CheckCircle2 className="w-4 h-4" /> : day}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-purple-100">
            3 de 4 treinos completos esta semana 🎉
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-xs text-gray-500 mt-1">Treinos/mês</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <Clock className="w-5 h-5 text-blue-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">142</p>
            <p className="text-xs text-gray-500 mt-1">Min totais</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
            <TrendingUp className="w-5 h-5 text-green-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">+5%</p>
            <p className="text-xs text-gray-500 mt-1">Força</p>
          </div>
        </div>
      </div>

      {/* Workouts List */}
      <div className="px-6 py-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Treinos Recomendados
          </h2>
          <button className="text-sm text-blue-600 font-medium">Ver Todos</button>
        </div>

        <div className="space-y-3">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {workout.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {workout.name}
                      </h3>
                      <p className="text-xs text-gray-500">{workout.focus}</p>
                    </div>
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors flex-shrink-0">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {workout.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {workout.exercises} exercícios
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {workout.calories} cal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-6 bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            Dicas para Preservar Músculos
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Treine 3-4x por semana com foco em força</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Consuma pelo menos 1.6g de proteína por kg de peso</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Evite déficit calórico muito agressivo</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span>Priorize exercícios compostos (agachamento, flexão)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
