"use client";

import { useState } from "react";
import { Home, Utensils, Dumbbell, Activity, User } from "lucide-react";
import HomePage from "./components/HomePage";
import NutritionPage from "./components/NutritionPage";
import WorkoutsPage from "./components/WorkoutsPage";
import SymptomsPage from "./components/SymptomsPage";
import ProfilePage from "./components/ProfilePage";
import MedicationGuidePage from "./components/MedicationGuidePage";
import PrecautionsPage from "./components/PrecautionsPage";
import ProgressPage from "./components/ProgressPage";
import OnboardingPage, { UserData } from "./components/OnboardingPage";

type Page = "home" | "nutrition" | "workouts" | "symptoms" | "profile" | "medication" | "precautions" | "progress";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setIsOnboarded(true);
  };

  if (!isOnboarded) {
    return <OnboardingPage onComplete={handleOnboardingComplete} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "nutrition":
        return <NutritionPage />;
      case "workouts":
        return <WorkoutsPage />;
      case "symptoms":
        return <SymptomsPage />;
      case "profile":
        return <ProfilePage />;
      case "medication":
        return <MedicationGuidePage onNavigate={setCurrentPage} />;
      case "precautions":
        return <PrecautionsPage onNavigate={setCurrentPage} />;
      case "progress":
        return <ProgressPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Main Content */}
      <main className="max-w-md mx-auto">{renderPage()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto flex justify-around items-center h-16">
          <button
            onClick={() => setCurrentPage("home")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === "home"
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Início</span>
          </button>

          <button
            onClick={() => setCurrentPage("nutrition")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === "nutrition"
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Utensils className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Nutrição</span>
          </button>

          <button
            onClick={() => setCurrentPage("workouts")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === "workouts"
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Dumbbell className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Treinos</span>
          </button>

          <button
            onClick={() => setCurrentPage("symptoms")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === "symptoms"
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Activity className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Sintomas</span>
          </button>

          <button
            onClick={() => setCurrentPage("profile")}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              currentPage === "profile"
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">Perfil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
