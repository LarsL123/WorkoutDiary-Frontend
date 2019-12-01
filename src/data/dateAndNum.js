class DateAndNum {
  constructor(date, num) {
    this.date = date;
    this.num = num;
  }
  // Takes the String from the server
  //   constructor(string) {
  //     this.date = date;
  //     this.num = num;
  //   }

  toString() {
    return this.date.toDateString() + ":" + this.num;
  }

  setDate(date) {
    this.date = date;
  }
  setNum(num) {
    this.num = num;
  }
  getDate() {
    return this.date;
  }
  getNum() {
    return this.num;
  }
}
