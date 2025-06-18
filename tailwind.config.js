module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Main KCA Website - Timeless Prestige
        kca: {
          primary: '#17412F',      // Deep Pine Green
          secondary: '#3A6351',    // Moss Green
          accent: '#F7C873',       // Gold Ochre
          'bg-dark': '#10241B',    // Evergreen Black
          'bg-light': '#F5F7F2',   // Ivory Mist
          highlight: '#E4572E',    // Vivid Red
          'text-dark': '#1B2A24',  // Charcoal
          'text-light': '#F5F7F2', // Ivory Mist
          'text-neutral': '#FFFFFF', // White
          'gray-light': '#D9E4DD', // Pale Sage
          'gray-dark': '#4B5D52',  // Olive Gray
        },
        // AspireChess - Energetic & Modern
        aspire: {
          primary: '#1A56DB',      // Vivid Royal Blue
          secondary: '#3DDC97',    // Fresh Mint
          accent: '#FFD600',       // Electric Yellow
          'bg-dark': '#0B1B3A',    // Midnight Navy
          'bg-light': '#F6FAFF',   // Ice Blue
          highlight: '#FF4C60',    // Hot Pink Red
          'text-dark': '#1A1A2E',  // Deep Indigo
          'text-light': '#F6FAFF', // Ice Blue
          'text-neutral': '#FFFFFF', // White
          'gray-light': '#E3E8F0', // Cloud Gray
          'gray-dark': '#3A506B',  // Slate Blue
        },
        // ChessCodex - Premium & Tech-Forward
        codex: {
          primary: '#7C2D12',      // Rich Burgundy
          secondary: '#FF6F3C',    // Vivid Orange
          accent: '#FFD166',       // Gold Highlight
          'bg-dark': '#2D1B12',    // Espresso
          'bg-light': '#FDF6F0',   // Cream
          highlight: '#E63946',    // Crimson
          'text-dark': '#3D2C29',  // Coffee Brown
          'text-light': '#FDF6F0', // Cream
          'text-neutral': '#FFFFFF', // White
          'gray-light': '#E9CFCF', // Rose Sand
          'gray-dark': '#6B4F4F',  // Warm Gray
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
