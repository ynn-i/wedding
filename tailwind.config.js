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
        "slide-out-to-left-full": {
          to: { transform: "translateX(-100%)" },
        },
        "slide-out-to-right-full": {
          to: { transform: "translateX(100%)" },
        },
        "shape-shift": {
          "0%": { transform: "scale(0.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "slide-out-to-left-full": "slide-out-to-left-full 3s cubic-bezier(.405,0,.025,1) forwards",
        "slide-out-to-right-full": "slide-out-to-right-full 3s cubic-bezier(.405,0,.025,1) forwards",
        "shape-shift": "shape-shift 2s cubic-bezier(.4,0,.2,1) forwards",
      },
    },
  },
  plugins: [],
}; 