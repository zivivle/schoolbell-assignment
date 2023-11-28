function getMaxProductts(numbers: number[]): [number, number] {
  let maxProduct = 0;
  let maxCombo: [number, number] = [0, 0];

  function calculateProduct(arr: number[], index: number): void {
    const num1 = parseInt(arr.slice(0, index).join(""));
    const num2 = parseInt(arr.slice(index).join(""));
    const product = num1 * num2;
    if (product > maxProduct) {
      maxProduct = product;
      maxCombo = [num1, num2];
    }
  }

  function permute(arr: number[], l: number, r: number): void {
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

const testNumbers = [1, 3, 5, 7, 9];
const testResult = getMaxProduct(testNumbers);
console.log(
  `가장 큰 곱을 가진 숫자 조합: ${testResult.join(" and ")}, 곱: ${
    testResult[0] * testResult[1]
  }`
);
