const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

if (mostRecentScore < 4) {
  finalScore.innerText = `Your Final Score is ${mostRecentScore}/10`;
  feedback.innerText =
    "You are not exactly a fanboy, you should probably learn a little more about UFC history.";
} else if (mostRecentScore < 7) {
  finalScore.innerText = `Your Final Score is ${mostRecentScore}/10`;
  feedback.innerText = "Nice! You know more than the average casual UFC fan.";
} else if (mostRecentScore < 10) {
  finalScore.innerText = `Your Final Score is ${mostRecentScore}/10`;
  feedback.innerText = "You made it! You are close to becoming a UFC expert.";
} else {
  finalScore.innerText = `Your Final Score is ${mostRecentScore}/10`;
  feedback.innerText =
    "Congratulations! You are a true hardcore UFC fan. Royce Gracie would be proud of you.";
}
