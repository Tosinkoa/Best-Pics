module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx}', './components/**/*.{js,ts,jsx}'],
  theme: {
    screens: {
      sm: '1px',
      md: '550px',
      lg: '900px',
    },
    fontFamily: {
      'sans-serif': ['Merriweather', 'sans-serif'],
      display: ['"Press Start 2P"', 'display'],
    },
    extend: {
      backgroundImage: {
        'showcase-dog': "url('/images/showcase-dog.jpg')",
      },
    },
  },
  plugins: [],
};
