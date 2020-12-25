class Calendar {
  constructor() {
    this.flag = 0;
    this.last = 0;
    this.first = 0;
    this.monthRecord = 0;
  }

  startCalculate() {
    if (this.start < 34) this.start -= 27;
    else if (this.start >= 34) this.start = this.start - 35;
  }

  caller() {
    let start = new Date();
    this.days(start.getDay());
    this.dates(start.getDate(), start.getDay(), start.getMonth());
    this.months(start.getMonth());
    this.years(start.getFullYear());
  }

  commonCall = () => {
    if (this.flag === 0) {
      let start = new Date();
      this.days(start.getDay());
      this.dates(start.getDate(), start.getDay(), start.getMonth());
      this.months(start.getMonth());
      this.years(start.getFullYear());
    }
  };

  days = (dy) => {
    // console.group(days[dy]);
  };

  months = (m) => {
    month_display.textContent = months[m][0];
  };

  years = (y) => {
    year_display.textContent = y;
  };

  dates = (dt, dy, m) => {
    let day_1;
    let map_day = new Map();
    let currentday = all_days.indexOf(all_days[dy]);
    for (let i = dt; i >= 1; i -= 7) {
      day_1 = i;
    }
    for (let i = day_1; i >= 1; i--) {
      if (currentday >= 0) {
        map_day.set(i, all_days[currentday--]);
      } else {
        currentday = 6;
        map_day.set(i, all_days[currentday--]);
      }
    }
    let starter = map_day.get(1);
    let begin = all_days.indexOf(starter);

    if (this.flag === 0) {
      for (var j = 1; j <= dt; j++) {
        all_dates[begin++].textContent = j;
      }
      all_dates[begin - 1].style.backgroundColor = "teal";
      for (let i = j; i <= months[m][1]; i++) {
        all_dates[begin++].textContent = i;
      }
      this.start = begin - 1;
    }

    if (this.flag > 0) {
      this.startCalculate();
      for (let i = this.start; i >= 0; i--) {
        all_dates[i].textContent = "";
      }
      for (let j = 1; j <= 31; j++) {
        all_dates[this.start++].textContent = j;
      }
      console.log(this.start);
    }
  };

  keepRunning = () => {
    setInterval(() => this.commonCall(), 500);
    this.commonCall();
  };

  forward = () => {
    this.flag++;
    this.caller();
  };

  backward = () => {
    this.flag--;
    this.caller();
  };
}

let calendar = new Calendar();
calendar.keepRunning();

let dater = new Date();
