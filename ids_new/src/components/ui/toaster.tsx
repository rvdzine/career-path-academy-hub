"use client";

import { useToast } from "@/hooks/use-toast";
import { X, CheckCircle, AlertCircle } from "lucide-react";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none p-4">
      {toasts.map((t) => {
        const isDestructive = t.variant === "destructive";
        return (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
              isDestructive
                ? "bg-red-50/95 border-red-200 text-red-900 shadow-red-500/10"
                : "bg-white/95 border-gray-200 text-gray-900 shadow-gray-900/10"
            }`}
          >
            {isDestructive ? (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              {t.title && <p className="font-semibold text-sm">{t.title}</p>}
              {t.description && <p className="text-xs text-gray-600 mt-0.5">{t.description}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="text-gray-400 hover:text-gray-700 transition p-1 -mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
