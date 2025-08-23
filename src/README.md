# React + Tailwind Setup

## Steps I Followed

1. Created a new React project:
   npx create-react-app react-tailwind-demo

2. Installed Tailwind and dependencies:
    npm install -D tailwindcss postcss autoprefixer

3. Initialized Tailwind:
    npx tailwindcss init -p

4. Configured tailwind.config.js with:
    content: ["./src/**/*.{js,jsx,ts,tsx}"]

5. Replaced index.css with Tailwind imports:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
6. Tested in App.js with Tailwind classes.