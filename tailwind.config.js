export default {
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
        limebox: '#b9ff5b', // 연두색 박스
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      },
      transitionTimingFunction: {
        slow: "cubic-bezier(.405, 0, .025, 1)",
      },
      transitionDuration: {
        mid: "3s",
      },
      keyframes: {
        "split-left": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "split-right": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        "split-left": "split-left 1.2s cubic-bezier(.4,0,.2,1) forwards",
        "split-right": "split-right 1.2s cubic-bezier(.4,0,.2,1) forwards",
      },
    },
  },
  plugins: [],
}; 