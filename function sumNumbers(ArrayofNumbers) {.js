function createArray(n) {
  let arrayCreated = [];

  for (let i = 0; i < n + 1; i++) {
    arrayCreated += [i];
  }
  return arrayCreated;
}

console.log("createArray -->", createArray(10));
