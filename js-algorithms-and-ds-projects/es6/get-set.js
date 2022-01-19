class Thermostat {
  constructor(num) {
    this.temp = num;
  }

  get temperature() {
    return (this.temp - 32) * 5 / 9; 
  }

  set temperature(val) {
    this.temp = val * 9.0 / 5 + 32;
  }
}