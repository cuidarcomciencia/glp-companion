import { supabase } from './supabase';

// Configuração da API de IA (OpenAI)
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export interface UserHealthData {
  name: string;
  weight: number;
  height: number;
  gender: string;
  medication: string;
  dose: string;
  hasDiabetes: boolean;
  hasCardiovascular: boolean;
  targetWeight?: number;
  recentSymptoms?: Record<string, string>;
  progressHistory?: any[];
}

// Função para gerar plano nutricional personalizado
export async function generateNutritionPlan(userData: UserHealthData) {
  try {
    const prompt = `
Você é um nutricionista especializado em pacientes que usam medicação para perda de peso.

Dados do paciente:
- Nome: ${userData.name}
- Peso atual: ${userData.weight}kg
- Altura: ${userData.height}cm
- Gênero: ${userData.gender}
- Medicação: ${userData.medication} (${userData.dose})
- Diabetes: ${userData.hasDiabetes ? 'Sim' : 'Não'}
- Problemas cardiovasculares: ${userData.hasCardiovascular ? 'Sim' : 'Não'}
- Peso alvo: ${userData.targetWeight || 'Não especificado'}kg

Crie um plano nutricional personalizado em formato JSON com:
1. Café da manhã (3 opções)
2. Almoço (3 opções)
3. Jantar (3 opções)
4. Lanches saudáveis (5 opções)
5. Dicas específicas considerando a medicação
6. Alimentos a evitar
7. Meta calórica diária

Retorne APENAS o JSON, sem texto adicional.
`;

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Você é um nutricionista especializado. Sempre retorne respostas em formato JSON válido.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    const nutritionPlan = JSON.parse(data.choices[0].message.content);

    return nutritionPlan;
  } catch (error) {
    console.error('Erro ao gerar plano nutricional:', error);
    throw error;
  }
}

// Função para gerar plano de treino personalizado
export async function generateWorkoutPlan(userData: UserHealthData) {
  try {
    const bmi = userData.weight / Math.pow(userData.height / 100, 2);
    
    const prompt = `
Você é um personal trainer especializado em pacientes que usam medicação para perda de peso.

Dados do paciente:
- Nome: ${userData.name}
- Peso atual: ${userData.weight}kg
- Altura: ${userData.height}cm
- IMC: ${bmi.toFixed(1)}
- Gênero: ${userData.gender}
- Medicação: ${userData.medication}
- Diabetes: ${userData.hasDiabetes ? 'Sim' : 'Não'}
- Problemas cardiovasculares: ${userData.hasCardiovascular ? 'Sim' : 'Não'}

Crie um plano de treino personalizado em formato JSON com:
1. Treinos para cada dia da semana (segunda a domingo)
2. Cada treino deve ter: tipo, duração, intensidade, exercícios específicos
3. Precauções específicas considerando a medicação
4. Progressão sugerida (semanal)
5. Dicas de segurança

Retorne APENAS o JSON, sem texto adicional.
`;

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Você é um personal trainer especializado. Sempre retorne respostas em formato JSON válido.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    const workoutPlan = JSON.parse(data.choices[0].message.content);

    return workoutPlan;
  } catch (error) {
    console.error('Erro ao gerar plano de treino:', error);
    throw error;
  }
}

// Função para gerar insights personalizados baseados no progresso
export async function generateInsights(userData: UserHealthData) {
  try {
    const prompt = `
Você é um especialista em saúde analisando o progresso de um paciente.

Dados do paciente:
- Nome: ${userData.name}
- Peso atual: ${userData.weight}kg
- Medicação: ${userData.medication}
- Sintomas recentes: ${JSON.stringify(userData.recentSymptoms || {})}
- Histórico: ${JSON.stringify(userData.progressHistory || [])}

Analise os dados e forneça insights em formato JSON com:
1. Análise geral do progresso
2. Pontos positivos identificados
3. Áreas de atenção
4. Recomendações específicas
5. Alertas (se houver sintomas preocupantes)
6. Motivação personalizada

Retorne APENAS o JSON, sem texto adicional.
`;

    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Você é um especialista em saúde. Sempre retorne respostas em formato JSON válido.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const data = await response.json();
    const insights = JSON.parse(data.choices[0].message.content);

    return insights;
  } catch (error) {
    console.error('Erro ao gerar insights:', error);
    throw error;
  }
}

// Função para salvar plano nutricional no Supabase
export async function saveNutritionPlan(userId: string, planData: any) {
  const { data, error } = await supabase
    .from('nutrition_plans')
    .insert({
      user_id: userId,
      plan_data: planData,
      generated_by_ai: true,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Função para salvar plano de treino no Supabase
export async function saveWorkoutPlan(userId: string, planData: any) {
  const { data, error } = await supabase
    .from('workout_plans')
    .insert({
      user_id: userId,
      plan_data: planData,
      generated_by_ai: true,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Função para salvar insights no Supabase
export async function saveInsight(userId: string, insightType: string, content: any) {
  const { data, error } = await supabase
    .from('ai_insights')
    .insert({
      user_id: userId,
      insight_type: insightType,
      content: JSON.stringify(content),
      metadata: {},
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Função completa: gerar e salvar plano nutricional
export async function createPersonalizedNutritionPlan(userId: string, userData: UserHealthData) {
  const plan = await generateNutritionPlan(userData);
  await saveNutritionPlan(userId, plan);
  return plan;
}

// Função completa: gerar e salvar plano de treino
export async function createPersonalizedWorkoutPlan(userId: string, userData: UserHealthData) {
  const plan = await generateWorkoutPlan(userData);
  await saveWorkoutPlan(userId, plan);
  return plan;
}

// Função completa: gerar e salvar insights
export async function createPersonalizedInsights(userId: string, userData: UserHealthData) {
  const insights = await generateInsights(userData);
  await saveInsight(userId, 'general', insights);
  return insights;
}
