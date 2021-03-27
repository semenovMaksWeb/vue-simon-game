export function Utilities() {
  const delay = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return { delay, getRandomInt };
}
