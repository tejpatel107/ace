export const timer = document.querySelector(".timer strong");
let interval = null;
let seconds = 0;

export function startTimer() {
  interval = setInterval(() => {
    seconds++;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timer.textContent =
      `${hours.toString().padStart(2, "0")}:` +
      `${minutes.toString().padStart(2, "0")}:` +
      `${remainingSeconds.toString().padStart(2, "0")}`;
  }, 1000);
}

export function clearTimer() {
  clearInterval(interval);
  seconds = 0;
  const time = getCompletionTime();
  timer.textContent = "00:00:00";
  return time;
}

function getCompletionTime() {
  const [hours, minutes, seconds] = timer.textContent.split(":");

  return `${Number(hours) ? Number(hours) + " hour " : ""}${
    Number(minutes) ? Number(minutes) + " minute " : ""
  }${Number(seconds) ? Number(seconds) + " second" : ""}`;
}
