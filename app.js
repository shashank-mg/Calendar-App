class Calendar {
  constructor() {
    this.flag = 0;
  }

  startCalculate() {
    this.start = this.start >= 34 ? (this.start -= 34) : (this.start -= 27);
  }

  caller() {
    let start = new Date();
    this.days(start.getDay());
    this.months(this.monthRecord);
    this.dates(start.getDate(), start.getDay(), this.monthRecord);
    this.years(this.yearRecord);
  }

  commonCall = () => {
    if (this.flag === 0) {
      let start = new Date();
      this.monthRecord = start.getMonth();
      this.yearRecord = start.getFullYear();
      this.days(start.getDay());
      this.dates(start.getDate(), start.getDay(), start.getMonth());
      this.months(start.getMonth());
      this.years(start.getFullYear());
    }
  };

  days = (dy) => {};

  months = (m) => {
    if (m > 11) {
      this.monthRecord = 0;
      this.yearRecord++;
    }
    if (m < 0) {
      this.monthRecord = 11;
      this.yearRecord--;
    }
    month_display.textContent = months[this.monthRecord][0];
  };

  years = (y) => (year_display.textContent = y);

  clear(m) {
    for (let i = 0; i <= 36; i++) {
      all_dates[i].textContent = "";
    }
    if (months[m][0] === "February") {
      months[m][1] = this.yearRecord % 4 !== 0 ? 28 : 29;
    }
  }

  firstOfMonth = (dy, dt) => {
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
    return begin;
  };

  dates = (dt, dy, m) => {
    if (this.flag === 0) {
      let begin = this.firstOfMonth(dy, dt);
      this.starting = begin;
      this.clear(m);
      for (var j = 1; j <= dt; j++) {
        all_dates[begin++].textContent = j;
      }
      this.store = begin - 1;
      all_dates[begin - 1].style.backgroundColor = "crimson";
      for (let i = j; i <= months[m][1]; i++) {
        all_dates[begin++].textContent = i;
      }
      this.start = begin - 1;
    } else {
      this.clear(m);
      all_dates[this.store].style.backgroundColor = null;
      if (this.datesChange) {
        this.startCalculate();
        this.starting = this.start;
        for (let j = 1; j <= months[this.monthRecord][1]; j++) {
          all_dates[this.start++].textContent = j;
        }
        this.start--;
      } else {
        this.clear(m);
        let lastDayOfPrevMonth = this.starting;
        if (lastDayOfPrevMonth == 0) {
          lastDayOfPrevMonth = 7;
        }
        let k = months[this.monthRecord][1];
        while (k > 7) {
          k -= 7;
        }
        let lastDay = all_days[lastDayOfPrevMonth - 1];
        let begin = this.firstOfMonth(all_days.indexOf(lastDay), k);
        this.starting = begin;
        for (var j = 1; j <= months[this.monthRecord][1]; j++) {
          all_dates[begin++].textContent = j;
        }
        this.start = begin - 1;
      }
    }
  };

  keepRunning = () => {
    setInterval(() => this.commonCall(), 5000);
    this.commonCall();
  };

  forward = () => {
    this.flag++;
    this.monthRecord++;
    this.datesChange = 1;
    this.caller();
  };

  backward = () => {
    this.flag--;
    this.monthRecord--;
    this.datesChange = 0;
    this.caller();
  };
}

let calendar = new Calendar();
calendar.keepRunning();
