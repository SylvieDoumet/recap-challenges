// Toggle functionality

// Show hide answer

const cardButton = document.querySelector('[data-js="card__button-answer"]');

const cardAnswer = document.querySelector('[data-js="card__answer"]');

console.log("card__button:", cardButton);

cardButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    cardButton.textContent = "Hide Answer";
  } else {
    cardButton.textContent = "Show Answer";
  }
});

// Select bookmark button

const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');
const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');

console.log("bookmarkButton:", bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
  if (bookmarkButton.classList.contains("bookmark--active")) {
    bookmarkIcon.classList.add("var(--black)");
  } else {
    bookmarkIcon.classList.add("currentcolor");
  }
});

// const isShow = true;

// function showHideAnswer() {
//   if (isShow) {
//     card__answer.style.display = "none";
//     isShow = false;
//   } else {
//     card__answer.style.display = "block";
//     isShow = true;
//   }
// }
