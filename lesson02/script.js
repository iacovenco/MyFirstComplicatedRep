function displayWeek() {
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const today = new Date().getDay();

  const weekday = document.getElementById("weekdays-container");

  for (let i = 0; i < week.length; i++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = week[i];

    if (i === today) {
      dayElement.classList.add("weekdays");
    }

    if (i === 0 || i === 6) {
      dayElement.classList.add("weekends");
    }

    weekday.appendChild(dayElement);
  }
}

displayWeek();
