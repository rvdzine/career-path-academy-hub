"use client"

import * as React from "react"
import { CheckCircle2, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  autoClose?: boolean
  autoCloseDelay?: number
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Success!",
  description = "Your information has been submitted successfully.",
  autoClose = true,
  autoCloseDelay = 3000,
}: SuccessModalProps) {
  React.useEffect(() => {
    if (isOpen && autoClose) {
      const timer = setTimeout(() => {
        onClose()
      }, autoCloseDelay)

      return () => clearTimeout(timer)
    }
  }, [isOpen, autoClose, autoCloseDelay, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4",
          "animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Animated background circle */}
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            {/* Main icon container */}
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 shadow-lg">
              <CheckCircle2 className="h-12 w-12 text-white animate-in zoom-in duration-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-900 animate-in slide-in-from-bottom-2 duration-500">
            {title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed animate-in slide-in-from-bottom-3 duration-500">
            {description}
          </p>
        </div>

        {/* Optional: Progress bar for auto-close */}
        {autoClose && (
          <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-progress"
              style={{
                animation: `progress ${autoCloseDelay}ms linear forwards`,
              }}
            />
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Got it!
        </button>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}
