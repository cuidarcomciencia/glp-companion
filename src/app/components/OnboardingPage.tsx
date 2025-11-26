"use client";

import { useState } from "react";
import { ArrowRight, User, Scale, Ruler, Calendar, Pill, Heart, Activity, Target } from "lucide-react";

interface OnboardingProps {
  onComplete: (data: UserData) => void;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  medication: string;
  dose: string;
  startDate: string;
  weight: string;
  height: string;
  targetWeight: string;
  gender: string;
  hasDiabetes: boolean;
  hasCardiovascular: boolean;
}

export default function OnboardingPage({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    password: "",
    medication: "",
    dose: "",
    startDate: "",
    weight: "",
    height: "",
    targetWeight: "",
    gender: "",
    hasDiabetes: false,
    hasCardiovascular: false,
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.password.length >= 6;
      case 2:
        return formData.medication && formData.dose && formData.startDate;
      case 3:
        return formData.weight && formData.height && formData.targetWeight && formData.gender;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Pill className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">GLP-1 Companion</h1>
          <p className="text-gray-600">Seu companheiro inteligente para Ozempic e Mounjaro</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Passo {step} de 3</span>
            <span className="text-sm font-medium text-blue-600">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {/* Step 1: Account */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Crie sua conta</h2>
                <p className="text-gray-600 text-sm">Vamos começar com suas informações básicas</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Maria Silva"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="maria@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Mínimo 6 caracteres"
                />
                <p className="text-xs text-gray-500 mt-1">Mínimo de 6 caracteres</p>
              </div>
            </div>
          )}

          {/* Step 2: Medication */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Pill className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Seu tratamento</h2>
                <p className="text-gray-600 text-sm">Informações sobre sua medicação</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Medicamento utilizado</label>
                <select
                  value={formData.medication}
                  onChange={(e) => setFormData({ ...formData, medication: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="Ozempic">Ozempic (semaglutida)</option>
                  <option value="Wegovy">Wegovy (semaglutida)</option>
                  <option value="Rybelsus">Rybelsus (semaglutida oral)</option>
                  <option value="Mounjaro">Mounjaro (tirzepatida)</option>
                  <option value="Saxenda">Saxenda (liraglutida 3.0mg)</option>
                  <option value="Victoza">Victoza (liraglutida 1.8mg)</option>
                  <option value="Trulicity">Trulicity (dulaglutida)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dose atual</label>
                <input
                  type="text"
                  value={formData.dose}
                  onChange={(e) => setFormData({ ...formData, dose: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Ex: 0.5 mg, 1.0 mg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Início do tratamento</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 3: Health Info */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Informações de saúde</h2>
                <p className="text-gray-600 text-sm">Para personalizar suas orientações</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Peso atual (kg)</label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="75"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="165"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600" />
                  Meta de peso ideal (kg)
                </label>
                <input
                  type="number"
                  value={formData.targetWeight}
                  onChange={(e) => setFormData({ ...formData, targetWeight: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="65"
                />
                <p className="text-xs text-gray-500 mt-1">Qual é o seu peso objetivo?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gênero</label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasDiabetes}
                    onChange={(e) => setFormData({ ...formData, hasDiabetes: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Tenho diabetes</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasCardiovascular}
                    onChange={(e) => setFormData({ ...formData, hasCardiovascular: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
                  />
                  <span className="text-sm text-gray-700">Tenho problemas cardiovasculares</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
              >
                Voltar
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex-1 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                isStepValid()
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {step === 3 ? "Finalizar" : "Continuar"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
        </p>
      </div>
    </div>
  );
}
