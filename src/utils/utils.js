export const deepCopyObject = function (object) {
  return JSON.parse(JSON.stringify(object))
}