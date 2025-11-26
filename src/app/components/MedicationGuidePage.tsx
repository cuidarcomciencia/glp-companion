"use client";

import { ArrowLeft, AlertTriangle, Pill, Info } from "lucide-react";

type Page = "home" | "nutrition" | "workouts" | "symptoms" | "profile" | "medication";

interface MedicationGuidePageProps {
  onNavigate: (page: Page) => void;
}

export default function MedicationGuidePage({ onNavigate }: MedicationGuidePageProps) {
  const medications = [
    {
      name: "Ozempic® (semaglutida)",
      manufacturer: "Novo Nordisk",
      doses: [
        {
          strength: "0,25 mg",
          usage: "Dose inicial para adaptação. Aplicar 1 vez por semana, por via subcutânea, durante 4 semanas.",
          indication: "Não é dose de manutenção. Serve apenas para iniciar o tratamento e reduzir efeitos gastrointestinais."
        },
        {
          strength: "0,5 mg",
          usage: "Dose de manutenção. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose recomendada para controle glicêmico e redução de peso. Pode ser mantida ou aumentada conforme orientação médica."
        },
        {
          strength: "1,0 mg",
          usage: "Dose de manutenção aumentada. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional após pelo menos 4 semanas com 0,5 mg."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, com ou sem refeições. O dia da semana pode ser alterado, desde que o intervalo entre duas doses seja de pelo menos 2 dias (>48 horas)."
    },
    {
      name: "Wegovy® (semaglutida)",
      manufacturer: "Novo Nordisk",
      doses: [
        {
          strength: "0,25 mg",
          usage: "Dose inicial (Semanas 1-4). Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose de início do tratamento para minimizar sintomas gastrointestinais."
        },
        {
          strength: "0,5 mg",
          usage: "Dose da Semana 5-8. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "1,0 mg",
          usage: "Dose da Semana 9-12. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "1,7 mg",
          usage: "Dose da Semana 13-16. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "2,4 mg",
          usage: "Dose de manutenção (a partir da Semana 17). Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose recomendada para controle de peso. Se o paciente não tolerar 2,4 mg, pode-se manter em 1,7 mg."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, com ou sem refeições. O dia da semana pode ser alterado, desde que o intervalo entre duas doses seja de pelo menos 2 dias (>48 horas)."
    },
    {
      name: "Rybelsus® (semaglutida oral)",
      manufacturer: "Novo Nordisk",
      doses: [
        {
          strength: "3 mg",
          usage: "Dose inicial. Tomar 1 vez ao dia, por via oral, durante 30 dias.",
          indication: "Dose de início do tratamento. Não é eficaz para controle glicêmico, serve apenas para adaptação."
        },
        {
          strength: "7 mg",
          usage: "Dose de manutenção. Tomar 1 vez ao dia, por via oral.",
          indication: "Após 30 dias com 3 mg, aumentar para 7 mg. Pode ser dose de manutenção ou ser aumentada para 14 mg."
        },
        {
          strength: "14 mg",
          usage: "Dose de manutenção máxima. Tomar 1 vez ao dia, por via oral.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional após pelo menos 30 dias com 7 mg."
        }
      ],
      administration: "MODO DE USO ESPECÍFICO: Tomar em JEJUM, ao acordar, com até 120 ml de água (meio copo). Engolir o comprimido inteiro, SEM partir, mastigar ou esmagar. Aguardar NO MÍNIMO 30 MINUTOS antes de comer, beber ou tomar outros medicamentos. Não tomar com leite, café, suco ou outras bebidas. O jejum adequado é essencial para a absorção do medicamento."
    },
    {
      name: "Mounjaro® (tirzepatida)",
      manufacturer: "Eli Lilly",
      doses: [
        {
          strength: "2,5 mg",
          usage: "Dose inicial. Aplicar 1 vez por semana, por via subcutânea, durante 4 semanas.",
          indication: "Dose de início do tratamento para minimizar sintomas gastrointestinais."
        },
        {
          strength: "5 mg",
          usage: "Dose de manutenção. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Após 4 semanas com 2,5 mg, aumentar para 5 mg. Pode ser dose de manutenção ou ser aumentada conforme necessidade."
        },
        {
          strength: "7,5 mg",
          usage: "Dose de manutenção intermediária. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional após pelo menos 4 semanas com 5 mg."
        },
        {
          strength: "10 mg",
          usage: "Dose de manutenção elevada. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional após pelo menos 4 semanas com 7,5 mg."
        },
        {
          strength: "12,5 mg",
          usage: "Dose de manutenção alta. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional após pelo menos 4 semanas com 10 mg."
        },
        {
          strength: "15 mg",
          usage: "Dose máxima. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose máxima recomendada para controle glicêmico adicional após pelo menos 4 semanas com 12,5 mg."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, com ou sem refeições. O dia da semana pode ser alterado, desde que haja pelo menos 72 horas (3 dias) entre as doses."
    },
    {
      name: "Saxenda® (liraglutida 3,0 mg)",
      manufacturer: "Novo Nordisk",
      doses: [
        {
          strength: "0,6 mg",
          usage: "Dose inicial (Semana 1). Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Início do tratamento para adaptação."
        },
        {
          strength: "1,2 mg",
          usage: "Dose da Semana 2. Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "1,8 mg",
          usage: "Dose da Semana 3. Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "2,4 mg",
          usage: "Dose da Semana 4. Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Titulação progressiva."
        },
        {
          strength: "3,0 mg",
          usage: "Dose de manutenção (a partir da Semana 5). Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Dose recomendada para controle de peso. Se o paciente não tolerar 3,0 mg, considerar descontinuação."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, independentemente das refeições. Recomenda-se aplicar no mesmo horário todos os dias para melhor adesão."
    },
    {
      name: "Victoza® (liraglutida 1,8 mg)",
      manufacturer: "Novo Nordisk",
      doses: [
        {
          strength: "0,6 mg",
          usage: "Dose inicial. Aplicar 1 vez ao dia, por via subcutânea, durante pelo menos 1 semana.",
          indication: "Dose de início para reduzir sintomas gastrointestinais. Não é eficaz para controle glicêmico."
        },
        {
          strength: "1,2 mg",
          usage: "Dose de manutenção. Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Dose de manutenção para controle glicêmico. Pode ser aumentada para 1,8 mg se necessário."
        },
        {
          strength: "1,8 mg",
          usage: "Dose de manutenção máxima. Aplicar 1 vez ao dia, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, com ou sem refeições. Recomenda-se aplicar no mesmo horário todos os dias para melhor adesão."
    },
    {
      name: "Trulicity® (dulaglutida)",
      manufacturer: "Eli Lilly",
      doses: [
        {
          strength: "0,75 mg",
          usage: "Dose inicial. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose inicial recomendada."
        },
        {
          strength: "1,5 mg",
          usage: "Dose de manutenção. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Pode ser aumentada para melhor controle glicêmico."
        },
        {
          strength: "3,0 mg",
          usage: "Dose de manutenção elevada. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Para pacientes que necessitam de controle glicêmico adicional."
        },
        {
          strength: "4,5 mg",
          usage: "Dose máxima. Aplicar 1 vez por semana, por via subcutânea.",
          indication: "Dose máxima recomendada para controle glicêmico adicional."
        }
      ],
      administration: "Aplicar por via subcutânea no abdômen, coxa ou parte superior do braço. Pode ser administrado a qualquer hora do dia, com ou sem refeições."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-6 sticky top-0 z-10 shadow-md">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Pill className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Guia de Medicação</h1>
            <p className="text-sm text-blue-100">Medicamentos GLP-1 no Brasil</p>
          </div>
        </div>
      </header>

      {/* Important Warning */}
      <div className="px-6 py-4">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Aviso Importante</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Todas as informações sobre medicamentos apresentadas neste guia são baseadas nas bulas oficiais aprovadas pela ANVISA. 
                <strong className="block mt-2">
                  As orientações contidas aqui não eliminam a necessidade de consulta a um médico ou farmacêutico para dúvidas relacionadas ao uso do medicamento.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medications List */}
      <div className="px-6 space-y-4">
        {medications.map((med, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Medication Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{med.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{med.manufacturer}</p>
            </div>

            {/* Doses */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-blue-600" />
                  Doses Disponíveis
                </h3>
                <div className="space-y-3">
                  {med.doses.map((dose, doseIndex) => (
                    <div key={doseIndex} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {dose.strength}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Uso:</strong> {dose.usage}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Indicação:</strong> {dose.indication}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Administration */}
              <div className="pt-3 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Modo de Administração</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {med.administration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="px-6 py-4">
        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Info className="w-5 h-5" />
            Informação Adicional
          </h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            Todos os medicamentos GLP-1 devem ser armazenados em geladeira (2°C a 8°C) antes do primeiro uso. 
            Após o primeiro uso, podem ser mantidos em temperatura ambiente (até 30°C) pelo período especificado na bula. 
            Nunca congele os medicamentos.
          </p>
        </div>
      </div>
    </div>
  );
}
