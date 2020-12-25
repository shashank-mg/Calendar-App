let month_display = document.querySelector(".month");
let year_display = document.querySelector(".year");
let all_dates = document.querySelector(".dates").children;
let left_arrow = document.querySelector(".left-arrow");
let right_arrow = document.querySelector(".right-arrow");

let months = {
  0: ["January", 31],
  1: ["February", 29],
  2: ["March", 31],
  3: ["April", 30],
  4: ["May", 31],
  5: ["June", 30],
  6: ["July", 31],
  7: ["August", 31],
  8: ["September", 30],
  9: ["October", 31],
  10: ["November", 30],
  11: ["December", 31],
};

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
