export default () => {
  const randomInt = () => Math.floor(Math.random() * (255 - 30) + 30);
  return `${randomInt()}, ${randomInt()}, ${randomInt()}`;
};
