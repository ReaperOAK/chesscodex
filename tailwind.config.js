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
        },        // AspireChess - Marble & Stone Theme with Better Contrast
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
