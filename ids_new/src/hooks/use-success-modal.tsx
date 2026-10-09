"use client"

import * as React from "react"

interface SuccessModalOptions {
  title?: string
  description?: string
  autoClose?: boolean
  autoCloseDelay?: number
}

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  autoClose?: boolean
  autoCloseDelay?: number
}

function SuccessModal({
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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Got it!
        </button>
      </div>
    </div>
  )
}

export function useSuccessModal() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [options, setOptions] = React.useState<SuccessModalOptions>({
    title: "Success!",
    description: "Your information has been submitted successfully.",
    autoClose: true,
    autoCloseDelay: 3000,
  })

  const showSuccess = React.useCallback((newOptions?: SuccessModalOptions) => {
    setOptions((prev) => ({ ...prev, ...newOptions }))
    setIsOpen(true)
  }, [])

  const hideSuccess = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  const SuccessModalComponent = React.useCallback(
    () => (
      <SuccessModal
        isOpen={isOpen}
        onClose={hideSuccess}
        title={options.title}
        description={options.description}
        autoClose={options.autoClose}
        autoCloseDelay={options.autoCloseDelay}
      />
    ),
    [isOpen, hideSuccess, options]
  )

  return {
    showSuccess,
    hideSuccess,
    SuccessModal: SuccessModalComponent,
  }
}
