let arr = ["526", "473", "739", "549", "474", "277", "624"];
console.log(arr[1]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[1], arr[4], arr[5]);

for (let i = 1; i <= 100; i++) {
  let digit = true;

  for (let a = 2; a < i; a++) {
    if (i % a === 0) {
      digit = false;
      break;
    }
  }

  if (digit) {
    let divisors = "1 и " + i;
    console.log(i, "Делители этого числа:", divisors);
  }
}
