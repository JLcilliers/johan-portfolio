'use client'

import { createContext, useContext, useSyncExternalStore, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => {} })

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem('theme') as Theme) || 'dark'
}

function getServerSnapshot(): Theme {
  return 'dark'
}

function subscribeToTheme(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot)

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
    // Trigger storage event for useSyncExternalStore
    window.dispatchEvent(new Event('storage'))
  }, [theme])

  // Apply theme class on mount
  if (typeof window !== 'undefined') {
    document.documentElement.classList.toggle('light', theme === 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
