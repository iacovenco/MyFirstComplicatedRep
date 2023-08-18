const num = 266219;

const arr = num.toString().split("").map(Number);

const mult = arr[0] * arr[1] * arr[2] * arr[3] * arr[4] * arr[5];

const degree = mult * mult * mult;

const res = degree.toString().slice(0, 2);

console.log(res);

//Уверен есть более правильный способ,но у меня получилось так.
//Не знаю, стоит ли пробовать усложненные задания далее?
