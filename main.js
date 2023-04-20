const quizData = [
  {
    question: "‘İnce Memed’ adlı eserin sahibi kimdir ?",
    a: "Falih Rıfkı Atay",
    b: "Oğuz Atay",
    c: "Yaşar Kemal",
    d: "Sabahattin Ali",
    e: "Orhan Pamuk",
    correct: "c",
  },
  {
    question: "Osmanlı imparatorluğunda ilk halife kimdir ?",
    a: "Yavuz Sultan Selim",
    b: "Kanuni Sultan Süleyman",
    c: "II. Selim ",
    d: "II. Osman",
    e: "III. Mehmet ",
    correct: "a",
  },
  {
    question: "İnternet üzerinde en fazla kullanılan arama motoru hangisidir ?",
    a: "Yahoo",
    b: "Google",
    c: "Yandex",
    d: "Bing",
    e: "Baidu",
    correct: "b",
  },
  {
    question: "Hayvanları koruma günü hangi gündür ?",
    a: "14 Mart",
    b: "10 Ocak",
    c: "7 Nisan",
    d: "8 Mart",
    e: "4 Eylül",
    correct: "e",
  },
  {
    question: "'Sorgulanmamış bir hayat, yaşanmaya değmez.'sözü kime aittir?",
    a: "Platon",
    b: "Descartes",
    c: "Aristo",
    d: "Sokrates",
    e: "Konfüçyüs",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  e_text.innerText = currentQuizData.e;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //console.log(answer)

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      `;
    }
  }
});
