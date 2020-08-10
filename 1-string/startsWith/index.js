export default function collectCarNumberCount(collection) {
  return collection.filter(string => string.includes('粤A')).length;
}
