console.clear();

// counter questionfield answerfield

const questionField = document.querySelector('[data-js="question-textfield"]');

const answerField = document.querySelector('[data-js="answer-textfield"]');

const charcount = document.querySelector('[data-js="question-charcount"]');

const charcount2 = document.querySelector('[data-js="answer-charcount"]');

function handleTextFieldInput(event, charcount) {
  charcount.textContent =
    event.target.getAttribute("maxlength") - event.target.value.length;
}

questionField.addEventListener("input", (event) => {
  handleTextFieldInput(event, charcount);
});

answerField.addEventListener("input", (event) => {
  handleTextFieldInput(event, charcount2);
});

// functionality for creating new cards

const form = document.querySelector('[data-js="form"]');

const cardList = document.querySelector('[data-js="card-list"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log("form submitted", event.target.elements.question1.value);
  //   console.log("form submitted", event.target.elements.answer1.value);
  //   console.log("form submitted", event.target.elements.hashtag1.value);

  const questionCard = document.createElement("div");
  questionCard.classList.add("card");

  const questionText = document.createElement("p");
  questionText.classList.add("card__question");
  questionText.textContent = event.target.elements.question1.value;
  questionCard.append(questionText);

  const answerText = document.createElement("p");
  answerText.classList.add("card__answer");
  answerText.textContent = event.target.elements.answer1.value;
  questionCard.append(answerText);

  const hashtagText = document.createElement("p");
  hashtagText.classList.add("card__hashtag");
  hashtagText.textContent = event.target.elements.hashtag1.value;
  questionCard.append(hashtagText);

  //   questionCard.append(form);

  cardList.append(questionCard);

  //   if (event.target.elements.question1.value === "") {
  //   }
  //   if (event.target.elements.answer1.value === "") {
  //   }
  //   if (event.target.elements.hashtag1.value === "") {
  //   }
  //   console.log("form submitted", event.target.elements);
});
