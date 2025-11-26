"use client";

import { useState, useEffect } from "react";
import { Bell, Plus, Trash2, Clock, Calendar, Check } from "lucide-react";
import { useNotifications, scheduleMedicationReminder } from "../lib/notifications";
import { supabase } from "../lib/supabase";

interface Reminder {
  id: string;
  medication_name: string;
  dose: string;
  time: string;
  days_of_week: string[];
  is_active: boolean;
}

const DAYS_MAP = {
  "0": "Dom",
  "1": "Seg",
  "2": "Ter",
  "3": "Qua",
  "4": "Qui",
  "5": "Sex",
  "6": "Sáb",
};

export default function RemindersPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    medication_name: "",
    dose: "",
    time: "08:00",
    days_of_week: [] as string[],
  });

  const { permission, requestPermission, sendNotification } = useNotifications();

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    // Simulação - substituir por chamada real ao Supabase
    const mockReminders: Reminder[] = [
      {
        id: "1",
        medication_name: "Ozempic",
        dose: "0.5mg",
        time: "08:00",
        days_of_week: ["1", "3", "5"],
        is_active: true,
      },
    ];
    setReminders(mockReminders);
  };

  const handleRequestPermission = async () => {
    const granted = await requestPermission();
    if (granted) {
      sendNotification("Notificações ativadas!", {
        body: "Você receberá lembretes para tomar seu medicamento.",
      });
    }
  };

  const toggleDay = (day: string) => {
    setNewReminder((prev) => ({
      ...prev,
      days_of_week: prev.days_of_week.includes(day)
        ? prev.days_of_week.filter((d) => d !== day)
        : [...prev.days_of_week, day],
    }));
  };

  const handleAddReminder = async () => {
    if (!newReminder.medication_name || !newReminder.dose || newReminder.days_of_week.length === 0) {
      alert("Preencha todos os campos e selecione pelo menos um dia da semana");
      return;
    }

    const reminder: Reminder = {
      id: Date.now().toString(),
      ...newReminder,
      is_active: true,
    };

    setReminders([...reminders, reminder]);
    
    // Agendar notificação
    if (permission.granted) {
      scheduleMedicationReminder(
        newReminder.medication_name,
        newReminder.time,
        newReminder.days_of_week.map(Number)
      );
    }

    setNewReminder({
      medication_name: "",
      dose: "",
      time: "08:00",
      days_of_week: [],
    });
    setShowAddForm(false);

    // Aqui você salvaria no Supabase
    // await supabase.from('medication_reminders').insert([reminder]);
  };

  const handleDeleteReminder = async (id: string) => {
    setReminders(reminders.filter((r) => r.id !== id));
    // await supabase.from('medication_reminders').delete().eq('id', id);
  };

  const toggleReminderActive = async (id: string) => {
    setReminders(
      reminders.map((r) =>
        r.id === id ? { ...r, is_active: !r.is_active } : r
      )
    );
    // await supabase.from('medication_reminders').update({ is_active: !r.is_active }).eq('id', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-xl">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Lembretes</h1>
              <p className="text-sm text-gray-500">Nunca esqueça seu medicamento</p>
            </div>
          </div>
        </div>

        {/* Status de Notificações */}
        {!permission.granted && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Ative as notificações
                </h3>
                <p className="text-sm text-yellow-700 mb-3">
                  Para receber lembretes, você precisa permitir notificações no seu navegador.
                </p>
                <button
                  onClick={handleRequestPermission}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors"
                >
                  Ativar Notificações
                </button>
              </div>
            </div>
          </div>
        )}

        {permission.granted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
            <Check className="w-5 h-5 text-green-600" />
            <p className="text-sm text-green-700 font-medium">
              Notificações ativadas! Você receberá lembretes nos horários configurados.
            </p>
          </div>
        )}
      </div>

      {/* Lista de Lembretes */}
      <div className="space-y-4 mb-6">
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className={`bg-white rounded-2xl shadow-lg p-5 transition-all ${
              reminder.is_active ? "border-2 border-blue-200" : "opacity-60"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {reminder.medication_name}
                </h3>
                <p className="text-sm text-gray-600">Dose: {reminder.dose}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleReminderActive(reminder.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    reminder.is_active
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <Bell className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteReminder(reminder.id)}
                  className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{reminder.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {reminder.days_of_week.map((d) => DAYS_MAP[d as keyof typeof DAYS_MAP]).join(", ")}
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-500">
              {reminder.is_active ? "✓ Ativo" : "✗ Desativado"}
            </div>
          </div>
        ))}
      </div>

      {/* Botão Adicionar */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Adicionar Novo Lembrete
        </button>
      )}

      {/* Formulário de Adicionar */}
      {showAddForm && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Novo Lembrete</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medicamento
              </label>
              <input
                type="text"
                value={newReminder.medication_name}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, medication_name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Ozempic"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dose
              </label>
              <input
                type="text"
                value={newReminder.dose}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, dose: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: 0.5mg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horário
              </label>
              <input
                type="time"
                value={newReminder.time}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, time: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dias da Semana
              </label>
              <div className="grid grid-cols-7 gap-2">
                {Object.entries(DAYS_MAP).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => toggleDay(key)}
                    className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                      newReminder.days_of_week.includes(key)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddReminder}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Salvar Lembrete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
