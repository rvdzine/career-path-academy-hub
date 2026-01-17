"use client"

import * as React from "react"
import { SuccessModal } from "@/components/ui/success-modal"

interface SuccessModalOptions {
  title?: string
  description?: string
  autoClose?: boolean
  autoCloseDelay?: number
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
