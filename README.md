# Wedding Invitation Landing Page

A modern, elegant wedding invitation landing page built with React and Tailwind CSS.

## Features
- Beautiful hero section with couple's names, date, and background image
- Event details with date, time, venue, and map link
- RSVP form (name, email, attendance, message)
- Photo gallery/carousel
- Wedding schedule/timeline
- Footer with contact info and social links
- Fully responsive and easy to customize

---

## Setup Instructions

### 1. Install Dependencies

```
npm install
```

### 2. Tailwind CSS Setup

If Tailwind is not yet initialized, run:

```
npx tailwindcss init -p
```

#### Ensure your `tailwind.config.js` includes:
```
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
        primary: '#bfae9c',
        secondary: '#f7f3ef',
        accent: '#a3c9c7',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
      },
    },
  },
  plugins: [],
};
```

#### And your `src/index.css` starts with:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Start the Development Server

```
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your site.

---

## Customization
- Update names, dates, images, and links in the components in `src/components/`.
- Replace placeholder images with your own.
- Adjust theme colors in `tailwind.config.js` as desired.

---

## Deployment
You can deploy this site to Vercel, Netlify, or any static hosting provider that supports React/Vite.

---

## Credits
- Images from [Unsplash](https://unsplash.com/)
- Built with [React](https://react.dev/) & [Tailwind CSS](https://tailwindcss.com/)
