var results = [];
var questionList = document.querySelectorAll(
  "[class^='mc-quiz-question--container--']"
);
var alphabet = "ABCDEFGHIJKLMNOPQ";
for (var i = 0; i < questionList.length; i++) {
  var question = questionList[i];
  var item = {};
  var options = [];
  var answers = [];
  // question content
  item.content = question.querySelector("#question-prompt").textContent;

  // question options
  item.options = [];
  var elOptions = question.querySelectorAll("li");
  for (var j = 0; j < elOptions.length; j++) {
    item.options.push(alphabet[j] + ". " + elOptions[j].textContent);
    // question answer
    if (elOptions[j].querySelectorAll(".udlite-heading-sm").length > 0) {
      answers.push(alphabet[j]);
    }
  }

  item.answer = answers.join(",");
  // question title
  item.title = question.querySelector("form span").textContent;

  // question explanation
  item.explanation = question.querySelector(".rt-scaffolding").textContent;

  results.push(item);
}
