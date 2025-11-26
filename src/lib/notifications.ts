"use client";

import { useEffect, useState } from "react";

export interface NotificationPermission {
  granted: boolean;
  denied: boolean;
  default: boolean;
}

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>({
    granted: false,
    denied: false,
    default: true,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      const currentPermission = Notification.permission;
      setPermission({
        granted: currentPermission === "granted",
        denied: currentPermission === "denied",
        default: currentPermission === "default",
      });
    }
  }, []);

  const requestPermission = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      console.warn("Este navegador não suporta notificações");
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission({
        granted: result === "granted",
        denied: result === "denied",
        default: result === "default",
      });
      return result === "granted";
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error);
      return false;
    }
  };

  const sendNotification = (title: string, options?: NotificationOptions) => {
    if (permission.granted && typeof window !== "undefined") {
      new Notification(title, {
        icon: "/icon.svg",
        badge: "/icon.svg",
        ...options,
      });
    }
  };

  return {
    permission,
    requestPermission,
    sendNotification,
  };
};

// Função para agendar lembretes
export const scheduleMedicationReminder = (
  medicationName: string,
  time: string,
  daysOfWeek: number[]
) => {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return;
  }

  const [hours, minutes] = time.split(":").map(Number);
  const now = new Date();
  const scheduledTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0
  );

  // Se o horário já passou hoje, agendar para amanhã
  if (scheduledTime <= now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  const timeUntilNotification = scheduledTime.getTime() - now.getTime();

  setTimeout(() => {
    if (Notification.permission === "granted") {
      new Notification(`⏰ Hora do seu medicamento!`, {
        body: `Está na hora de tomar ${medicationName}`,
        icon: "/icon.svg",
        badge: "/icon.svg",
        tag: "medication-reminder",
        requireInteraction: true,
      });
    }

    // Reagendar para o próximo dia
    scheduleMedicationReminder(medicationName, time, daysOfWeek);
  }, timeUntilNotification);
};

// Service Worker para notificações em background
export const registerServiceWorker = async () => {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js");
    return registration;
  } catch (error) {
    console.error("Erro ao registrar Service Worker:", error);
    return null;
  }
};
