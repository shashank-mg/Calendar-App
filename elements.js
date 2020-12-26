let month_display = document.querySelector(".month");
let year_display = document.querySelector(".year");
let all_dates = document.querySelector(".dates").children;
let left_arrow = document.querySelector(".left-arrow");
let right_arrow = document.querySelector(".right-arrow");

let months = [
  ["January", 31],
  ["February", 29],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 30],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];

let all_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

right_arrow.addEventListener("click", () => calendar.forward());
left_arrow.addEventListener("click", () => calendar.backward());
