function getRanking(n, arr) {
  const sorted = [...arr].sort((a, b) => b - a);

  return arr.map((element) => sorted.indexOf(element) + 1);
}

console.log(getRanking(5, [87, 89, 92, 100, 76]));
console.log(getRanking(6, [87, 89, 92, 100, 100, 100]));
