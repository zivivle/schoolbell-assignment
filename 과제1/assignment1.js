function getMaxProduct(numbers) {
  let maxProduct = 0;
  let maxCombo = [];

  function calculateProduct(arr, index) {
    const num1 = parseInt(arr.slice(0, index).join(""));
    const num2 = parseInt(arr.slice(index).join(""));
    const product = num1 * num2;
    if (product > maxProduct) {
      maxProduct = product;
      maxCombo = [num1, num2];
    }
  }

  function permute(arr, l, r) {
    if (l === r) {
      for (let i = 1; i < arr.length; i++) {
        calculateProduct(arr, i);
      }
    } else {
      for (let i = l; i <= r; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]];
        permute(arr, l + 1, r);
        [arr[l], arr[i]] = [arr[i], arr[l]];
      }
    }
  }

  permute(numbers, 0, numbers.length - 1);
  return maxCombo;
}

const numbers = [1, 3, 5, 7, 9];
const result = getMaxProduct(numbers);
console.log(
  `가장 큰 곱을 가진 숫자 조합: ${result.join(" and ")}, 곱: ${
    result[0] * result[1]
  }`
);
