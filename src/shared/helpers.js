export function capitalize(input) {
  return [input[0].toUpperCase(), ...input.slice(1, input.length)];
}

export function isStringIncluded(stringA, stringB) {
  return stringA.toLowerCase().includes(stringB.toLowerCase());
}
