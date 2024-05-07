class Countdown {
  constructor(targetDateTime, daysElement, clockElement, minutesElement, secondsElement) {
    this.targetDateTime = new Date(targetDateTime);
    this.daysElement = document.querySelector(daysElement);
    this.clockElement = document.querySelector(clockElement);
    this.minutesElement = document.querySelector(minutesElement);
    this.secondsElement = document.querySelector(secondsElement);

    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const millisecondsDiff = this.targetDateTime.getTime() - now.getTime();

    if (millisecondsDiff <= 0) {
      this.daysElement.textContent = '0';
      this.clockElement.textContent = '00';
      this.minutesElement.textContent = '00';
      this.secondsElement.textContent = '00';
      return;
    }

    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((millisecondsDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((millisecondsDiff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((millisecondsDiff % (1000 * 60)) / 1000);

    this.daysElement.textContent = daysDiff;
    this.clockElement.textContent = hoursLeft;
    this.minutesElement.textContent = minutesLeft;
    this.secondsElement.textContent = secondsLeft;
  }
}
