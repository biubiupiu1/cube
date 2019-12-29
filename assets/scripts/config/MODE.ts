const MODE = {
  black: {
    bg: '#343736',
    cube: '#95CE5F',
    title: '#fffff',
    level: '#ffffff'
  },
  white: {
    bg: '#49e3ce',
    cube: '#CACACA',
    title: '#000000',
    level: '#000000'
  }
};

interface modeInf {
  bg: string;
  cube: string;
  title: string;
  level: string;
}

export { MODE, modeInf };
