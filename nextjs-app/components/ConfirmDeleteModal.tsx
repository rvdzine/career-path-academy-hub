"use client";

import { AlertTriangle, X } from "lucide-react";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  studentName: string;
}

export default function ConfirmDeleteModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  studentName 
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

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
          {/* Warning icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-red-600/20 blur-2xl rounded-full" />
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-full p-4 shadow-lg shadow-red-600/50">
              <AlertTriangle size={64} className="text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Warning message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Confirm Delete</h2>
            <p className="text-gray-300 text-lg">
              Are you sure you want to delete
            </p>
            <p className="text-red-400 font-semibold text-xl">
              "{studentName}"?
            </p>
            <p className="text-gray-400 text-sm mt-4">
              This action cannot be undone.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 w-full pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-red-600/50"
            >
              Delete
            </button>
          </div>

          {/* Decorative line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
}
