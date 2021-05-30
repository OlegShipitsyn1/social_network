const LITTLE_DELAY = 280;

const afterLittleDelay = (fn) => {
  setTimeout(fn, LITTLE_DELAY);
};

export default afterLittleDelay;
