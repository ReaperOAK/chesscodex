module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {      colors: {
        // Dynamic Brand Colors - Use CSS custom properties that change based on current site
        brand: {
          primary: 'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
          dark: 'var(--brand-dark)',
          light: 'var(--brand-light)',
          highlight: 'var(--brand-highlight)',
          text: 'var(--brand-text)',
        },        // Main KCA Website - Royal Heritage & Elegance
        // NEW KCA "Synthwave" Theme
        kca: {
          primary: '#00D1FF',      // Vibrant Cyan
          secondary: '#E01E84',    // Electric Magenta
          accent: '#FFD700',       // Gold Accent
          'bg-dark': '#0A1929',    // Midnight Navy (Fallback)
          'bg-light': '#1F2937',   // Transparent Card BG
          highlight: '#E53E3E',    // Vibrant Crimson
          'text-dark': '#E5E7EB',  // Light Gray Text
          'text-light': '#F9FAFB', // Off-White Text
          'text-neutral': '#FFFFFF', // Pure White
          'gray-light': '#4B5563', // Medium Gray
          'gray-dark': '#111827',  // Deep Gray
        },
        // AspireChess - Marble & Stone Theme with Better Contrast
        aspire: {
          primary: '#374151',      // Dark Stone Gray
          secondary: '#6B7280',    // Medium Stone
          accent: '#D1D5DB',       // Light Stone
          'bg-dark': '#1F2937',    // Deep Charcoal
          'bg-light': '#F9FAFB',   // Off White
          highlight: '#4B5563',    // Stone Highlight
          'text-dark': '#111827',  // Almost Black
          'text-light': '#F9FAFB', // Off White
          'text-neutral': '#FFFFFF', // Pure White
          'gray-light': '#E5E7EB', // Light Gray
          'gray-dark': '#374151',  // Dark Stone
        }, 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
