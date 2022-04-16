module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9861',
        secondary: '#DC4946',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
