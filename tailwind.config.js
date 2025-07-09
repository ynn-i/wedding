module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#bfae9c', // Elegant gold
        secondary: '#f7f3ef', // Soft background
        accent: '#a3c9c7', // Subtle accent
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      },
    },
  },
  plugins: [],
}; 