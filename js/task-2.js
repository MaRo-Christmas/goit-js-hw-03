function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = firstArray.concat(secondArray)
  return combinedArray.length > maxLength
    ? combinedArray.slice(0, maxLength)
    : combinedArray
}

console.log(slugify('Arrays for begginers')) // "arrays-for-begginers"
console.log(slugify('English for developer')) // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')) // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')) // "how-to-become-a-junior-developer-in-two-weeks"
