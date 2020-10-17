const container = document.querySelector(".container");
const plusBtn = document.getElementById("plus");

const playTime = getComputedStyle(document.body).getPropertyValue(
  "--play-time"
);

const a = playTime.match(/[0-9]/);

const animatedElements = [".menu", "#button2", "#button1", "#plus"].map((e) =>
  document.querySelector(e)
);

function toggleElementsAnimation(elements, timeToToggle) {
  elements.forEach((e) => {
    e.style.animationPlayState = "running";
  });

  setTimeout(() => {
    elements.forEach((e) => {
      e.style.animationPlayState = "paused";
    });
  }, timeToToggle);
}

plusBtn.addEventListener("click", () =>
  toggleElementsAnimation(animatedElements, 1000)
);
