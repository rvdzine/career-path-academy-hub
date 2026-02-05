"use client";

import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border-2 border-red-600/30 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Red checkmark icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full" />
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 shadow-lg shadow-red-600/50">
              <CheckCircle size={64} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Success message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Success!</h2>
            <p className="text-gray-300 text-lg">{message}</p>
          </div>

          {/* Decorative line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
