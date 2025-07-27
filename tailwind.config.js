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
        }, 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
