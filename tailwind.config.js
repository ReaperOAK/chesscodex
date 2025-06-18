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
        kca: {
          primary: '#1A365D',      // Deep Royal Blue
          secondary: '#C53030',    // Rich Burgundy Red
          accent: '#D69E2E',       // Royal Gold
          'bg-dark': '#0A1929',    // Midnight Navy
          'bg-light': '#FBF8F3',   // Warm Cream
          highlight: '#E53E3E',    // Vibrant Crimson
          'text-dark': '#2D3748',  // Charcoal Gray
          'text-light': '#F7FAFC', // Soft White
          'text-neutral': '#FFFFFF', // Pure White
          'gray-light': '#E2E8F0', // Light Silver
          'gray-dark': '#4A5568',  // Steel Gray
          'accent-light': '#FAF089', // Champagne Gold
          'secondary-light': '#FED7D7', // Rose Blush
        },// AspireChess - Marble & Stone Theme with Better Contrast
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
        },        // ChessCodex - Modern Purple & Dark Theme
        codex: {
          primary: '#200e4a',      // Deep Purple
          secondary: '#461fa3',    // Medium Purple
          accent: '#7646eb',       // Bright Purple
          'bg-dark': '#14092e',    // Very Dark Purple
          'bg-light': '#f3f1f9',   // Light Purple Tint
          highlight: '#af0505',    // Alert Red
          'text-dark': '#270185',  // Dark Purple Text
          'text-light': '#e3e1f7', // Light Purple Text
          'text-neutral': '#ffffff', // Pure White
          'gray-light': '#c2c1d3', // Light Gray
          'gray-dark': '#3b3a52',  // Dark Gray
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
