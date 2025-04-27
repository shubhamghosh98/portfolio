import { createContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize with dark theme
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    // Initial setup: check localStorage or use system preference
    const initializeTheme = () => {
      // First check if theme was previously saved in localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      
      if (savedTheme === 'light' || savedTheme === 'dark') {
        // Use saved preference
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        document.documentElement.classList.toggle('light', savedTheme === 'light');
      } else {
        // Default to dark theme and apply it
        document.documentElement.classList.add('dark');
      }
    };

    initializeTheme();
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Update document class
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
