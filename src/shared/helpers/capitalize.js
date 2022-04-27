export default function capitalize(input) {
  return input ? input[0].toUpperCase() + input.slice(1, input.length) : '';
}

export function capitalizeAllWords(input) {
  return input ? input.split(' ').map((val) => capitalize(val)).join(' ') : '';
}

export function capitalizeAllLetters(input) {
  return input ? input.split('').map((letter) => letter.toUpperCase()).join('') : '';
}
