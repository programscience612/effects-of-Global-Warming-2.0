const questions = [
  {
    question: "What is one main effect of global warming?",
    answers: [
      "Rising sea levels",
      "More snow everywhere",
      "Colder winters",
      "Less rain"
    ],
    correct: 0
  },
  {
    question: "What animal is most affected by melting Arctic ice?",
    answers: [
      "Polar bear",
      "Tiger",
      "Elephant",
      "Penguin"
    ],
    correct: 0
  },
  {
    question: "Global warming is mostly caused by...",
    answers: [
      "Burning fossil fuels",
      "Planting trees",
      "Using solar power",
      "Eating vegetables"
    ],
    correct: 0
  },
  {
    question: "What happens to oceans when they absorb extra CO₂?",
    answers: [
      "They become more acidic",
      "They turn purple",
      "They get colder",
      "They disappear"
    ],
    correct: 0
  },
  {
    question: "Which weather event is becoming stronger because of warming?",
    answers: [
      "Hurricanes",
      "Small rain showers",
      "Gentle wind",
      "Fog"
    ],
    correct: 0
  },
  {
    question: "What can we do to help reduce global warming?",
    answers: [
      "Use less electricity and recycle",
      "Drive bigger cars",
      "Throw away more plastic",
      "Cut down more trees"
    ],
    correct: 0
  }
];

let current = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });

  document.getElementById("next").style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[current].correct;

  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.classList.add("correct");
    }
    if (i === selected) {
      if (i === correct) {
        score++;
      } else {
        btn.classList.add("wrong");
      }
    }
  });

  document.getElementById("next").style.display = "block";
}

document.getElementById("next").onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score-text").innerText = 
    "You got " + score + " out of " + questions.length;

  let msg = "";
  if (score === 6) msg = "Perfect! You know a lot about climate change!";
  else if (score >= 4) msg = "Well done! You have good knowledge.";
  else if (score >= 2) msg = "Nice try! Keep learning about our planet.";
  else msg = "Thank you for playing! Let's all help protect Earth.";

  document.getElementById("message").innerText = msg;
}

function restart() {
  current = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("start").style.display = "block";
}