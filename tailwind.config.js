module.exports = {
  content: ["./dist/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#4E2FD2',
          dark: '#0B0D10',    
          light: '#F0F4F7',
        },
        neutral: {
          text: '#1F1F1F',
          muted: '#6F7882',
          border: '#CED6DE',
          borderLight: '#E6EBF0'
        },
        status: {
          success: '#0AA288',
          successLight: '#1DF0BB0A',
          error: '#D8392B',
        }
      },
    },
  },
  variants: {},
};