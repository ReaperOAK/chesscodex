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
        },        // Main KCA Website - Traditional Royal Blue & Red
        kca: {
          primary: '#1D4ED8',      // Royal Blue
          secondary: '#B91C1C',    // Classic Red
          accent: '#FBBF24',       // Gold Accent
          'bg-dark': '#1E3A8A',    // Deep Blue
          'bg-light': '#FEF7F0',   // Warm Ivory
          highlight: '#DC2626',    // Rich Red
          'text-dark': '#1F2937',  // Elegant Gray
          'text-light': '#FEF7F0', // Warm Ivory
          'text-neutral': '#FFFFFF', // White
          'gray-light': '#DBEAFE', // Light Blue
          'gray-dark': '#3730A3',  // Deep Purple
        },
        // AspireChess - White Marble & Stone Theme
        aspire: {
          primary: '#F8FAFC',      // Pure White Marble
          secondary: '#E2E8F0',    // Light Stone
          accent: '#CBD5E1',       // Soft Gray
          'bg-dark': '#475569',    // Charcoal Stone
          'bg-light': '#FFFFFF',   // Pure White
          highlight: '#64748B',    // Slate Gray
          'text-dark': '#1E293B',  // Dark Stone
          'text-light': '#FFFFFF', // Pure White
          'text-neutral': '#F1F5F9', // Off White
          'gray-light': '#F1F5F9', // Lightest Gray
          'gray-dark': '#334155',  // Medium Stone
        },
        // ChessCodex - Modern Tech Blue & Red
        codex: {
          primary: '#1E40AF',      // Strong Blue
          secondary: '#DC2626',    // Modern Red
          accent: '#3B82F6',       // Bright Blue
          'bg-dark': '#1E293B',    // Slate Dark
          'bg-light': '#F8FAFC',   // Clean White
          highlight: '#EF4444',    // Vibrant Red
          'text-dark': '#334155',  // Cool Gray
          'text-light': '#F8FAFC', // Clean White
          'text-neutral': '#FFFFFF', // White
          'gray-light': '#E2E8F0', // Light Slate
          'gray-dark': '#475569',  // Dark Slate
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
