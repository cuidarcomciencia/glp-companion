"use client";

import { useState, useEffect } from "react";
import {
  AlertCircle,
  TrendingDown,
  Droplet,
  Wind,
  Pill,
  ChevronRight,
  Plus,
  CheckCircle2,
  X,
} from "lucide-react";

type Symptom = "nausea" | "vomiting" | "reflux" | "constipation" | "diarrhea";
type Severity = "none" | "mild" | "moderate" | "intense";

interface SymptomLog {
  symptom: Symptom;
  severity: Severity;
  date: string;
}

export default function SymptomsPage() {
  const [todaySymptoms, setTodaySymptoms] = useState<
    Record<Symptom, Severity>
  >({
    nausea: "none",
    vomiting: "none",
    reflux: "none",
    constipation: "none",
    diarrhea: "none",
  });

  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [symptomHistory, setSymptomHistory] = useState<SymptomLog[]>([]);

  // Verificar sintomas intensos frequentes
  useEffect(() => {
    const intenseSymptomsCount = symptomHistory.filter(
      (log) => log.severity === "intense"
    ).length;

    // Se houver 3 ou mais sintomas intensos nos últimos registros, mostrar popup
    if (intenseSymptomsCount >= 3) {
      setShowWarningPopup(true);
    }
  }, [symptomHistory]);

  const symptoms = [
    {
      id: "nausea" as Symptom,
      name: "Náusea",
      icon: Wind,
      color: "orange",
      description: "Sensação de enjoo",
    },
    {
      id: "vomiting" as Symptom,
      name: "Vômitos",
      icon: Droplet,
      color: "red",
      description: "Episódios de vômito",
    },
    {
      id: "reflux" as Symptom,
      name: "Refluxo",
      icon: TrendingDown,
      color: "yellow",
      description: "Azia ou queimação",
    },
    {
      id: "constipation" as Symptom,
      name: "Constipação",
      icon: AlertCircle,
      color: "purple",
      description: "Dificuldade para evacuar",
    },
    {
      id: "diarrhea" as Symptom,
      name: "Diarreia",
      icon: Droplet,
      color: "blue",
      description: "Fezes líquidas",
    },
  ];

  const handleSeverityChange = (symptom: Symptom, severity: Severity) => {
    setTodaySymptoms((prev) => ({
      ...prev,
      [symptom]: severity,
    }));

    // Adicionar ao histórico
    const newLog: SymptomLog = {
      symptom,
      severity,
      date: new Date().toISOString(),
    };
    setSymptomHistory((prev) => [...prev, newLog]);
  };

  const getSeverityColor = (severity: Severity) => {
    switch (severity) {
      case "none":
        return "bg-gray-100 text-gray-400";
      case "mild":
        return "bg-yellow-100 text-yellow-700";
      case "moderate":
        return "bg-orange-100 text-orange-700";
      case "intense":
        return "bg-red-100 text-red-700";
    }
  };

  const getSeverityLabel = (severity: Severity) => {
    switch (severity) {
      case "none":
        return "Nenhum";
      case "mild":
        return "Leve";
      case "moderate":
        return "Moderado";
      case "intense":
        return "Intenso";
    }
  };

  const getOverallStatus = () => {
    const severities = Object.values(todaySymptoms);
    if (severities.some((s) => s === "intense")) {
      return {
        status: "Sintomas Intensos",
        message: "Atenção! Você está com sintomas intensos.",
        color: "red",
      };
    }
    if (severities.some((s) => s === "moderate")) {
      return {
        status: "Sintomas Moderados",
        message: "Alguns sintomas precisam de atenção.",
        color: "orange",
      };
    }
    if (severities.some((s) => s === "mild")) {
      return {
        status: "Sintomas Leves",
        message: "Você está se sentindo bem hoje!",
        color: "green",
      };
    }
    return {
      status: "Sem Sintomas",
      message: "Excelente! Nenhum sintoma hoje.",
      color: "green",
    };
  };

  const overallStatus = getOverallStatus();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Warning Popup */}
      {showWarningPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Atenção Necessária
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Você tem apresentado sintomas intensos com frequência. 
                  Recomendamos que você consulte um médico para avaliar 
                  sua condição e ajustar o tratamento, se necessário.
                </p>
              </div>
              <button
                onClick={() => setShowWarningPopup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-red-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-red-800 font-medium">
                ⚠️ Sintomas intensos frequentes podem indicar a necessidade 
                de ajuste na medicação ou dosagem.
              </p>
            </div>
            <button
              onClick={() => setShowWarningPopup(false)}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Manejo de Sintomas</h1>
        <p className="text-sm text-gray-500 mt-1">
          Registre e gerencie seus sintomas GI
        </p>
      </header>

      {/* Today's Summary */}
      <div className="px-6 py-6 bg-white mt-2">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-900">Hoje</h2>
          <span className="text-xs text-gray-500">
            {new Date().toLocaleDateString("pt-BR")}
          </span>
        </div>

        <div
          className={`bg-gradient-to-r ${
            overallStatus.color === "red"
              ? "from-red-50 to-orange-50 border-red-200"
              : overallStatus.color === "orange"
              ? "from-orange-50 to-yellow-50 border-orange-200"
              : "from-green-50 to-blue-50 border-green-200"
          } rounded-xl p-4 border mb-4`}
        >
          <div className="flex items-center gap-3">
            {overallStatus.color === "red" ? (
              <AlertCircle className="w-6 h-6 text-red-600" />
            ) : (
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            )}
            <div>
              <p className="font-semibold text-gray-900">
                {overallStatus.status}
              </p>
              <p className="text-sm text-gray-600">{overallStatus.message}</p>
            </div>
          </div>
        </div>

        {/* Quick Log */}
        <div className="space-y-3">
          {symptoms.map((symptom) => (
            <div
              key={symptom.id}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 bg-${symptom.color}-100 rounded-lg flex items-center justify-center`}
                  >
                    <symptom.icon
                      className={`w-5 h-5 text-${symptom.color}-600`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {symptom.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {symptom.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dropdown de Severidade */}
              <select
                value={todaySymptoms[symptom.id]}
                onChange={(e) =>
                  handleSeverityChange(symptom.id, e.target.value as Severity)
                }
                className={`w-full px-4 py-2 rounded-lg border-2 font-medium text-sm transition-all ${getSeverityColor(
                  todaySymptoms[symptom.id]
                )} border-gray-200 hover:border-blue-300 focus:outline-none focus:border-blue-500`}
              >
                <option value="none">Nenhum</option>
                <option value="mild">Leve</option>
                <option value="moderate">Moderado</option>
                <option value="intense">Intenso</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Recomendações para Você
        </h2>

        <div className="space-y-3">
          {todaySymptoms.nausea !== "none" && (
            <div className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Pill className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Para Náusea
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Experimente refeições pequenas e frequentes. Evite alimentos
                    gordurosos e muito condimentados.
                  </p>
                  <button className="text-sm text-blue-600 font-medium flex items-center gap-1">
                    Ver receitas recomendadas
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {todaySymptoms.constipation !== "none" && (
            <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Para Constipação
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Aumente a ingestão de fibras e água. Considere adicionar
                    psyllium ou chia às refeições.
                  </p>
                  <button className="text-sm text-purple-600 font-medium flex items-center gap-1">
                    Ver dicas de hidratação
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warning Signs */}
      <div className="px-6 py-4 pb-24">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">
                Sinais de Alarme
              </h3>
              <p className="text-sm text-red-800 mb-3">
                Procure ajuda médica imediatamente se apresentar:
              </p>
              <ul className="space-y-2 text-sm text-red-800">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Vômitos persistentes por mais de 24h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Dor abdominal intensa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Sinais de desidratação severa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Sangue nas fezes ou vômito</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-20 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
