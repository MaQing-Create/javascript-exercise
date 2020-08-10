export default function countTypesNumber(source) {
  let res = 0;
  Object.keys(source).forEach(key => {
    res += parseInt(source[key], 10);
  });
  return res;
}
