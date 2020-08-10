export default function addSerialNumber(source) {
  // eslint-disable-next-line no-param-reassign
  source.serialNumber = '12345';
  // eslint-disable-next-line no-param-reassign
  source.properties.status = 'processed';
  return source;
}
