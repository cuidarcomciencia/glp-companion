"use client";

import { useState } from "react";
import {
  User,
  Pill,
  Calendar,
  Bell,
  ChevronRight,
  Edit2,
  Shield,
  FileText,
  LogOut,
  Settings,
} from "lucide-react";

export default function ProfilePage() {
  const [userData] = useState({
    name: "Maria Silva",
    email: "maria.silva@email.com",
    medication: "Ozempic",
    dose: "1.0 mg",
    applicationDay: "Sexta-feira",
    startDate: "15/03/2024",
    weight: "78.5 kg",
    height: "165 cm",
    age: 42,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Perfil</h1>
        <p className="text-sm text-gray-500 mt-1">
          Gerencie suas informações e configurações
        </p>
      </header>

      {/* Profile Card */}
      <div className="px-6 py-6 bg-white mt-2">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {userData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">
              {userData.name}
            </h2>
            <p className="text-sm text-gray-500">{userData.email}</p>
            <button className="mt-2 text-sm text-blue-600 font-medium flex items-center gap-1">
              <Edit2 className="w-4 h-4" />
              Editar perfil
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <p className="text-xs text-blue-600 font-medium mb-1">Peso</p>
            <p className="text-lg font-bold text-gray-900">{userData.weight}</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <p className="text-xs text-purple-600 font-medium mb-1">Altura</p>
            <p className="text-lg font-bold text-gray-900">
              {userData.height}
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <p className="text-xs text-green-600 font-medium mb-1">Idade</p>
            <p className="text-lg font-bold text-gray-900">
              {userData.age} anos
            </p>
          </div>
        </div>
      </div>

      {/* Medication Info */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Informações da Medicação
        </h2>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Medicamento</p>
                  <p className="font-semibold text-gray-900">
                    {userData.medication}
                  </p>
                </div>
              </div>
              <button className="text-blue-600">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Dose Atual</p>
                  <p className="font-semibold text-gray-900">{userData.dose}</p>
                </div>
              </div>
              <button className="text-blue-600">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Dia de Aplicação</p>
                  <p className="font-semibold text-gray-900">
                    {userData.applicationDay}
                  </p>
                </div>
              </div>
              <button className="text-blue-600">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Início do Tratamento</p>
                  <p className="font-semibold text-gray-900">
                    {userData.startDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Configurações</h2>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Notificações e Lembretes
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Privacidade e Segurança
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Termos de Uso
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Política de Privacidade
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-6 py-4 pb-24">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">
                Aviso Importante
              </h3>
              <p className="text-sm text-yellow-800 leading-relaxed">
                Este aplicativo é apenas informativo e não substitui orientação
                médica profissional. Sempre consulte seu médico antes de fazer
                mudanças no tratamento.
              </p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button className="w-full mt-4 bg-white border-2 border-red-200 text-red-600 rounded-xl py-4 font-semibold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Sair da Conta
        </button>

        {/* Version */}
        <p className="text-center text-xs text-gray-400 mt-6">
          GLP-1 Companion v1.0.0
        </p>
      </div>
    </div>
  );
}
