export const numbersLetsGo = (n?: number): n is number => {
  if (typeof n === "number" && n >= 0) {
    return true;
  }
  return false;
};
