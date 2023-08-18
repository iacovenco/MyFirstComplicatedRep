let num = 266219;

let arr = num.toString().split("").map(Number);

let mult = arr[0] * arr[1] * arr[2] * arr[3] * arr[4] * arr[5];

let degree = mult * mult * mult;

let res = degree.toString().slice(0, 2);

console.log(res);

//Уверен есть более правильный способ,но у меня получилось так.
