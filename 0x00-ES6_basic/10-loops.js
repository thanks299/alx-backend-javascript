/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
