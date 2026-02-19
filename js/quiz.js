// js/quiz.js
const questions = [
  {
    question: "Which is a direct effect of global warming?",
    options: ["Rising sea levels", "Increased volcanic activity", "More earthquakes", "Faster Earth rotation"],
    correct: 0
  },
  {
    question: "What mainly causes coral bleaching?",
    options: ["Warmer ocean temperatures", "Overfishing", "Plastic pollution", "Oil spills"],
    correct: 0
  },
  {
    question: "Global average temperature has risen about how much since late 1800s?",
    options: ["0.2°C", "1.1°C", "3.5°C", "5.8°C"],
    correct: 1
  },
  {
    question: "Which region is warming fastest?",
    options: ["Equator", "Tropics", "Arctic", "Antarctica only"],
    correct: 2
  },
  {
    question: "Which health risk increases most due to global warming?",
    options: ["Heat-related illnesses", "Common cold", "Broken bones", "Pollen allergies only"],
    correct: 0
  },
  // ... add the rest of the questions from the previous quiz code here
  // (I shortened it for brevity – copy the full array from earlier message)
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

// The rest of the quiz logic remains exactly the same as in the previous message:
// startQuiz(), loadQuestion(), selectAnswer(), nextQuestion(), showResult()
// ... copy those functions here

// Then attach event listeners
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn')?.addEventListener('click', startQuiz);
  document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
  document.getElementById('restart-btn')?.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');
  });
});