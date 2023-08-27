function formatString(str) {
  if (typeof str !== "string") {
    return alert("Аргумент должен быть строкой");
  }

  let trimStr = str.trim();

  if (trimStr.length > 30) {
    trimStr = trimStr.slice(0, 30) + "...";
  }
  return trimStr;
}

console.log(formatString("строка"));
console.log(formatString(123));
console.log(
  formatString(
    "JDBSDJFDSJBFFFCJBDSCJBKSDAFJKBCDSJKBCDSJKBCJBKSDJKCBSDJBCKSDBDJKC"
  )
);
