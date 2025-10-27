"use client";
import React from "react";

/**
 * Placeholder del Chatbot.
 * Aquí irá el Chatbot persistente (flotante) en producción.
 * Por ahora es solo un botón que abre un modal/side panel o resalta
 * la zona donde se integrará el asistente.
 */

export default function ChatbotPlaceholder() {
  return (
    <div className="chatbot-placeholder fixed bottom-6 right-6">
      <button
        aria-label="Abrir asistente"
        className="flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        onClick={() => {
          // placeholder: eventualmente abrir modal o panel
          alert("Aquí irá el Chatbot (placeholder). En producción abrirá el asistente.");
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9a9 9 0 01-8.94-8.06L3 12" />
        </svg>
        <span className="hidden sm:inline">Asistente</span>
      </button>
    </div>
  );
}
