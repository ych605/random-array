export const randomArray = (n, [min, max] = [1, 10]) => {
  const list = [];
  while (n > 0) {
    list.push(Math.floor(Math.random() * (max - min + 1)) + min);
    n--;
  }
  return list;
}