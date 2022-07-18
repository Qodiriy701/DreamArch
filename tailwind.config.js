/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      mak: ['mak', 'Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      xxl: '32px',
      xxxl: '35px',
      v: '42px',
      vll: '72px',
      Title: '32px',
      mdTitle: '44px',
      lgTitle: '50px',
      BgTitle: '50px',
      mdBgTitle: '120px',
      lgBgTitle: '150px',
    },
    colors: {
      'white': {
        'primary': '#ffffff',
        'secondary': '#E5E5E5',
      },
      'black': {
        'primary': '#171717',
        'secondary': '#1D1D1D',
      },
      'gray': {
        'primary': '#F4F4F4',
        'secondary': '#282828',
      },
      'red': {
        'primary': '#b90000',
        'secondary': '#ffebeb',
      },
      'yellow': {
        'primary': '#FFDA79',
        'secondary': '#BA8600',
      },
      'orange': {
        'primary': '#ff6300'
      },
      'transparent': 'transparent'
    },
    backgroundImage: {
      'mainBg': "url('/assets/img/mainBg.jpg')",
    },
    borderRadius: {
      '0': '0px',
      '2px': '2px',
      '7px': '7px',
      '14px': '14px',
      '17px': '17px',
      '21px': '21px',
      'full': '50%',
      'none': '0px'
    },
    lineHeight: {
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '7': '28px',
      '8': '32px',
      '9': '36px',
      '10': '40px',
      '12': '12px',
      '17': '17px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '24': '24px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '32': '32px',
      '38': '38px',
      '39': '39px',
      '60': '60px',
      '62': '62px',
      '86': '86px',
      '180': '180px',
      '240': '240px',
    },
    spacing: {
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '22': '22px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '48': '48px',
      '50': '50px',
      '51': '51px',
      '52': '52px',
      '54': '54px',
      '56': '56px',
      '60': '60px',
      '62': '62px',
      '64': '64px',
      '68': '68px',
      '72': '72px',
      '75': '75px',
      '76': '76px',
      '80': '80px',
      '84': '84px',
      '85': '85px',
      '90': '90px',
      '95': '95px',
      '100': '100px',
      '105': '105px',
      '110': '110px',
      '115': '115px',
      '120': '120px',
      '130': '130px',
      '150': '150px',
      '154': '154px',
      '160': '160px',
      '165': '165px',
      '172': '172px',
      '175': '175px',
      '180': '180px',
      '185': '185px',
      '200': '200px',
      '205': '205px',
      '210': '210px',
      '220': '220px',
      '235': '235px',
      '240': '240px',
      '245': '245px',
      '250': '250px',
      '270': '270px',
      '276': '276px',
      '285': '285px',
      '292': '292px',
      '300': '300px',
      '310': '310px',
      '322': '322px',
      '335': '335px',
      '350': '350px',
      '357': '357px',
      '381': '381px',
      '390': '390px',
      '400': '400px',
      '463': '463px',
      '483': '483px',
      '500': '500px',
      '600': '600px',
      '630': '630px',
      'full': '100%',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
    },
    maxWidth: {
      '0': '0px',
      '20': '20px',
      '72': '72px',
      '202': '202px',
      '350': '350px',
      '370': '370px',
      '364': '364px',
      '400': '400px',
      '500': '500px',
      '600': '600px',
      '670': '670px',
      '700': '700px',
      '762': '762px',
      '800': '800px',
      '850': '850px',
      '900': '900px',
      '1366': '1366px',
      '1520': '1600px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '35%': '35%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
    },
    maxHeight: {
      '0': '0px',
      '20': '20px',
      '72': '72px',
      '200': '200px',
      '222': '222px',
      '254': '254px',
      '285': '285px',
      '350': '350px',
      '335': '335px',
      '370': '370px',
      '513': '513px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
    },
    minHeight: {
      '20': '20px',
      '72': '72px',
      '180': '180px',
      '200': '200px',
      '220': '220px',
      '235': '235px',
      '270': '270px',
      '300': '300px',
      '350': '350px',
      '370': '370px',
      '570': '470px',
      '800': '700px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
      'screen': '100vh',
    },
    minWidth: {
      '20': '20px',
      '72': '72px',
      '180': '180px',
      '200': '200px',
      '220': '220px',
      '235': '235px',
      '270': '270px',
      '280': '280px',
      '300': '300px',
      '350': '350px',
      '370': '370px',
      '570': '470px',
      '800': '700px',
      '1366': '1366px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
      'full': '100%',
      'screen': '100vh',
    },
    inset: {
      '0': '0px',
      '5': '5px',
      '10': '10px',
      '15': '15px',
      '20': '20px',
      '30': '30px',
      '40': '40px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '80': '80px',
      '90': '90px',
      '100': '100px',
      '110': '110px',
      '120': '120px',
      '160': '160px',
      '245': '245px',
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '85%': '85%',
      '90%': '90%',
      '100%': '100%',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
