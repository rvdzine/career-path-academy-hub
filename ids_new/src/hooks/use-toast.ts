"use client"

import * as React from "react"

type ToastVariant = "default" | "destructive"

interface ToastOptions {
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

interface ToastState extends ToastOptions {
  id: string
  open: boolean
}

// Simple global toast state
const listeners: Array<(toasts: ToastState[]) => void> = []
let toasts: ToastState[] = []

function dispatch(newToasts: ToastState[]) {
  toasts = newToasts
  listeners.forEach((l) => l(toasts))
}

function toast(options: ToastOptions) {
  const id = Math.random().toString(36).slice(2)
  const newToast: ToastState = { ...options, id, open: true }
  dispatch([...toasts, newToast])

  const duration = options.duration ?? 4000
  setTimeout(() => {
    dispatch(toasts.filter((t) => t.id !== id))
  }, duration)

  return { id, dismiss: () => dispatch(toasts.filter((t) => t.id !== id)) }
}

function useToast() {
  const [state, setState] = React.useState<ToastState[]>(toasts)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const idx = listeners.indexOf(setState)
      if (idx > -1) listeners.splice(idx, 1)
    }
  }, [])

  return { toasts: state, toast, dismiss: (id?: string) => dispatch(id ? toasts.filter((t) => t.id !== id) : []) }
}

export { useToast, toast }
