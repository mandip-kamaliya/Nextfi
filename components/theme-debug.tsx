// components/theme-debug.tsx
"use client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeDebug() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 left-4 p-4 bg-card text-card-foreground border rounded-lg shadow-lg z-50">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <p>Theme: {theme}</p>
      <p>Resolved: {resolvedTheme}</p>
      <p>HTML class: {typeof window !== 'undefined' ? document.documentElement.className : 'N/A'}</p>
      <div className="mt-2 space-x-2">
        <button 
          onClick={() => setTheme("light")}
          className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
        >
          Light
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
        >
          Dark
        </button>
      </div>
    </div>
  )
}