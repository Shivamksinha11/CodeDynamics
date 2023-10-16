module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}', './UIComponents/***/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        resumegreen : '#0CFFB6',
        bodydark: '#232239',
      },
      fontFamily: {
        montserrat:['Montserrat', 'sans-serif'],
        sans:['Open Sans', 'sans-serif'],
        raleway:['Raleway', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'linearbodyresumelight' : 'linear-gradient(152.97deg, rgba(0, 0, 0, 0.5) 0%, rgba(21, 21, 21, 0.6) 100%)',
        'linearbodyresumedark' : 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        'linearheadresumelight' : 'linear-gradient(rgba(48, 47, 49, 1) , rgba(48, 47, 49,1))',
        'linearheadresumedark' : 'linear-gradient(rgba(34, 185, 250, 0.3) 0%, rgba(112, 232, 224, 0.1) 100%)',
        'landingcardleetcode' : 'linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)',
        'landingcardhackerrank' : 'linear-gradient(90deg, #1A2980 0%, #26D0CE 100%)',
      },
      backgroundColor:{
        'sectionTwoGlass' : 'rgba(19, 18, 45, 0.96)',
        'hackerrankCardColor' : 'rgba(27, 26, 41, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}