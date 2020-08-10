export default function numberMapToWord(collection) {
  return collection.map(number => String.fromCharCode(number + 96));
}
