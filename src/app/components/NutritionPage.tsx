"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Clock,
  Flame,
  ChefHat,
  AlertCircle,
  ShoppingCart,
  Plus,
} from "lucide-react";

type RecipeCategory = "all" | "liquid" | "puree" | "soft" | "snacks" | "crisis";

export default function NutritionPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<RecipeCategory>("all");
  const [proteinGoal] = useState(80); // gramas
  const [proteinConsumed] = useState(45); // gramas

  const categories = [
    { id: "all" as RecipeCategory, label: "Todas", icon: ChefHat },
    { id: "liquid" as RecipeCategory, label: "Líquidas", icon: Clock },
    { id: "puree" as RecipeCategory, label: "Purês", icon: Flame },
    { id: "soft" as RecipeCategory, label: "Suaves", icon: ChefHat },
    { id: "snacks" as RecipeCategory, label: "Snacks", icon: Plus },
    { id: "crisis" as RecipeCategory, label: "Modo Crise", icon: AlertCircle },
  ];

  const recipes = [
    {
      id: 1,
      name: "Smoothie de Proteína Verde",
      category: "liquid",
      protein: 25,
      time: 5,
      difficulty: "Fácil",
      tags: ["Alta Proteína", "Baixa Gordura"],
      image: "🥤",
    },
    {
      id: 2,
      name: "Purê de Batata Doce com Frango",
      category: "puree",
      protein: 30,
      time: 15,
      difficulty: "Fácil",
      tags: ["Reconfortante", "Nutritivo"],
      image: "🍠",
    },
    {
      id: 3,
      name: "Omelete Macia de Claras",
      category: "soft",
      protein: 20,
      time: 8,
      difficulty: "Fácil",
      tags: ["Rápido", "Leve"],
      image: "🍳",
    },
    {
      id: 4,
      name: "Iogurte Grego com Frutas",
      category: "snacks",
      protein: 15,
      time: 3,
      difficulty: "Muito Fácil",
      tags: ["Prático", "Refrescante"],
      image: "🥣",
    },
    {
      id: 5,
      name: "Caldo de Legumes com Proteína",
      category: "crisis",
      protein: 12,
      time: 10,
      difficulty: "Fácil",
      tags: ["Tolerável", "Hidratante"],
      image: "🍲",
    },
    {
      id: 6,
      name: "Shake de Banana com Aveia",
      category: "liquid",
      protein: 18,
      time: 5,
      difficulty: "Muito Fácil",
      tags: ["Energético", "Cremoso"],
      image: "🍌",
    },
  ];

  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((r) => r.category === selectedCategory);

  const proteinPercentage = (proteinConsumed / proteinGoal) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Nutrição Inteligente
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Receitas Digestivas Leves
        </p>
      </header>

      {/* Protein Counter */}
      <div className="px-6 py-6 bg-white mt-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-900">
            Meta de Proteína Hoje
          </h2>
          <span className="text-sm font-medium text-blue-600">
            {proteinConsumed}g / {proteinGoal}g
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${proteinPercentage}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Faltam {proteinGoal - proteinConsumed}g para atingir sua meta
        </p>
      </div>

      {/* Crisis Mode Banner */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-base mb-1">Modo Crise GI</h3>
              <p className="text-sm text-orange-50 leading-relaxed mb-3">
                Sentindo náusea ou desconforto? Veja receitas ultra-toleráveis.
              </p>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-50 transition-colors">
                Ver Receitas de Crise
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar receitas..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-6 py-2">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="px-6 py-4 pb-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            {filteredRecipes.length} Receitas
          </h2>
          <button className="flex items-center gap-2 text-sm text-blue-600 font-medium">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {recipe.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {recipe.time} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      {recipe.protein}g proteína
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 right-6 flex flex-col gap-3">
        <button className="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors">
          <ShoppingCart className="w-6 h-6" />
        </button>
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
