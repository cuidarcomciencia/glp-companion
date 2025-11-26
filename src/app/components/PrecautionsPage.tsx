"use client";

import { ArrowLeft, AlertTriangle, ShieldAlert, Baby, Heart, Scissors } from "lucide-react";

type Page = "home" | "nutrition" | "workouts" | "symptoms" | "profile" | "medication" | "precautions";

interface PrecautionsPageProps {
  onNavigate: (page: Page) => void;
}

export default function PrecautionsPage({ onNavigate }: PrecautionsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-6 sticky top-0 z-10 shadow-md">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Precauções e Contraindicações</h1>
            <p className="text-sm text-red-100">Informações essenciais de segurança</p>
          </div>
        </div>
      </header>

      {/* Critical Warning */}
      <div className="px-6 py-4">
        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-7 h-7 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-2 text-lg">⚠️ Atenção Crítica</h3>
              <p className="text-sm text-red-800 leading-relaxed font-medium">
                As informações desta seção são de extrema importância para sua segurança. 
                Leia atentamente e consulte seu médico antes de usar medicamentos GLP-1 se você se enquadra em alguma das situações descritas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pregnancy */}
      <div className="px-6 py-3">
        <div className="bg-white rounded-2xl shadow-sm border-2 border-pink-200 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 px-5 py-4 border-b border-pink-200">
            <div className="flex items-center gap-3">
              <Baby className="w-6 h-6 text-pink-600" />
              <h2 className="text-lg font-bold text-gray-900">Gravidez</h2>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-900 mb-2">🚫 Contraindicação Absoluta</h3>
              <p className="text-sm text-red-800 leading-relaxed">
                Medicamentos GLP-1 são <strong>contraindicados durante a gravidez</strong>. Estudos em animais demonstraram risco fetal.
              </p>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">⏰ Planejamento Gestacional</h3>
              <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Descontinuar pelo menos 2 meses antes</strong> de tentar engravidar (semaglutida e tirzepatida)
                </li>
                <li>
                  <strong>Liraglutida:</strong> descontinuar assim que a gravidez for confirmada
                </li>
                <li>
                  Mulheres em idade fértil devem usar <strong>método contraceptivo eficaz</strong> durante o tratamento
                </li>
                <li>
                  Se engravidar durante o tratamento, <strong>interrompa imediatamente</strong> e consulte seu médico
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">ℹ️ Informação Importante</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                A perda de peso durante a gravidez pode causar danos ao feto. O controle glicêmico em gestantes diabéticas deve ser feito com insulina.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lactation */}
      <div className="px-6 py-3">
        <div className="bg-white rounded-2xl shadow-sm border-2 border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-5 py-4 border-b border-purple-200">
            <div className="flex items-center gap-3">
              <Baby className="w-6 h-6 text-purple-600" />
              <h2 className="text-lg font-bold text-gray-900">Lactação (Amamentação)</h2>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">⚠️ Uso Não Recomendado</h3>
              <p className="text-sm text-amber-800 leading-relaxed mb-3">
                Não se sabe se os medicamentos GLP-1 são excretados no leite materno humano.
              </p>
              <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Risco potencial</strong> para o lactente não pode ser excluído
                </li>
                <li>
                  <strong>Não amamente</strong> durante o tratamento com GLP-1
                </li>
                <li>
                  Consulte seu médico para avaliar a relação <strong>risco-benefício</strong> entre continuar a amamentação ou o tratamento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Surgery */}
      <div className="px-6 py-3">
        <div className="bg-white rounded-2xl shadow-sm border-2 border-orange-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-5 py-4 border-b border-orange-200">
            <div className="flex items-center gap-3">
              <Scissors className="w-6 h-6 text-orange-600" />
              <h2 className="text-lg font-bold text-gray-900">Procedimentos Cirúrgicos</h2>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-900 mb-2">🚨 Suspensão Obrigatória</h3>
              <p className="text-sm text-red-800 leading-relaxed mb-3">
                Medicamentos GLP-1 <strong>retardam o esvaziamento gástrico</strong>, aumentando o risco de aspiração pulmonar durante anestesia.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">📅 Tempo de Suspensão</h3>
              <ul className="text-sm text-amber-800 space-y-3 leading-relaxed">
                <li className="pb-2 border-b border-amber-200">
                  <strong>Semaglutida (Ozempic):</strong>
                  <br />
                  Suspender <strong>pelo menos 4 semanas antes</strong> de cirurgias eletivas com anestesia geral ou sedação profunda
                </li>
                <li className="pb-2 border-b border-amber-200">
                  <strong>Tirzepatida (Mounjaro):</strong>
                  <br />
                  Suspender <strong>pelo menos 4 semanas antes</strong> de cirurgias eletivas com anestesia geral ou sedação profunda
                </li>
                <li className="pb-2 border-b border-amber-200">
                  <strong>Liraglutida (Saxenda/Victoza):</strong>
                  <br />
                  Suspender <strong>pelo menos 1 dia antes</strong> de procedimentos (meia-vida mais curta)
                </li>
                <li>
                  <strong>Dulaglutida (Trulicity):</strong>
                  <br />
                  Suspender <strong>pelo menos 1 semana antes</strong> de cirurgias eletivas
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">⚕️ Orientação Médica</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Sempre informe</strong> ao cirurgião e anestesista que você usa medicamento GLP-1. 
                Em cirurgias de emergência, medidas especiais podem ser necessárias para reduzir o risco de aspiração.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Contraindications */}
      <div className="px-6 py-3">
        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-gray-600" />
              <h2 className="text-lg font-bold text-gray-900">Outras Contraindicações e Precauções</h2>
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-semibold text-red-900 mb-2">🚫 Contraindicações Absolutas</h3>
              <ul className="text-sm text-red-800 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Hipersensibilidade</strong> ao princípio ativo ou a qualquer excipiente
                </li>
                <li>
                  <strong>História pessoal ou familiar</strong> de carcinoma medular de tireoide (CMT)
                </li>
                <li>
                  <strong>Neoplasia endócrina múltipla tipo 2</strong> (NEM 2)
                </li>
                <li>
                  <strong>Diabetes tipo 1</strong> (não é substituto de insulina)
                </li>
                <li>
                  <strong>Cetoacidose diabética</strong>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">⚠️ Use com Precaução</h3>
              <ul className="text-sm text-amber-800 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Doença renal grave:</strong> experiência limitada, ajuste de dose pode ser necessário
                </li>
                <li>
                  <strong>Pancreatite:</strong> histórico de pancreatite requer avaliação cuidadosa
                </li>
                <li>
                  <strong>Retinopatia diabética:</strong> monitoramento necessário, especialmente com controle glicêmico rápido
                </li>
                <li>
                  <strong>Gastroparesia:</strong> pode agravar sintomas de esvaziamento gástrico lento
                </li>
                <li>
                  <strong>Idosos (≥75 anos):</strong> experiência limitada, iniciar com cautela
                </li>
                <li>
                  <strong>Insuficiência cardíaca:</strong> experiência limitada em pacientes com insuficiência cardíaca classe IV (NYHA)
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">🩺 Sinais de Alerta - Procure Atendimento Médico Imediato</h3>
              <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside leading-relaxed">
                <li>
                  <strong>Dor abdominal intensa e persistente</strong> (possível pancreatite)
                </li>
                <li>
                  <strong>Nódulo no pescoço, rouquidão, dificuldade para engolir</strong> (possível tumor de tireoide)
                </li>
                <li>
                  <strong>Reações alérgicas graves:</strong> inchaço de face, lábios, língua, dificuldade para respirar
                </li>
                <li>
                  <strong>Alterações visuais súbitas</strong> (possível retinopatia)
                </li>
                <li>
                  <strong>Desidratação grave:</strong> vômitos persistentes, diarreia intensa
                </li>
                <li>
                  <strong>Sintomas de hipoglicemia grave</strong> (quando usado com insulina ou sulfonilureias)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Final Warning */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg mb-2">Lembre-se</h3>
              <p className="text-sm text-red-50 leading-relaxed">
                Este guia não substitui a orientação médica. Sempre consulte seu médico ou farmacêutico antes de iniciar, 
                suspender ou modificar qualquer tratamento. Em caso de dúvidas ou reações adversas, procure atendimento médico imediatamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
