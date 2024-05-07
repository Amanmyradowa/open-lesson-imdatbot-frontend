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

    const seconds = millisecondsDiff / 1000;
    const daysDiff = Math.floor(seconds / (3600 * 24));
    const hoursLeft = Math.floor((seconds % (seconds / 3600)) % 24);
    const minutesLeft = Math.floor((seconds / 60) % 60);
    const secondsLeft = Math.floor(seconds % 60);

    this.daysElement.textContent = daysDiff;
    this.clockElement.textContent = hoursLeft;
    this.minutesElement.textContent = minutesLeft;
    this.secondsElement.textContent = secondsLeft;
  }
}
