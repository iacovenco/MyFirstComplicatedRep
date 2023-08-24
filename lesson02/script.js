const formatString = function (str) {
  if (typeof str !== "string") {
    alert("здесь должна быть строка");
    return;
  }

  let trimmedStr = str.trim();

  if (trimmedStr.length > 30) {
    trimmedStr = trimmedStr.slice(0, 30) + "...";
  }

  return trimmedStr;
};

console.log(formatString("123dsfdsdfsddfdsfdsfdsfdsfdsfsdfds"));
