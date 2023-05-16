export const getRandoNumber = (min, max) => {
  const amplitude = max - min;
  const randoAmplitud = Math.round(Math.random() * amplitude);
  return min + randoAmplitud;
};
