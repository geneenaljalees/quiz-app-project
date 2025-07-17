const questionsData = [
  {
    title: 'question 1',
    options: ['a', 'b', 'c'],
    correctAnswer: 'a',
  },
  {
    title: 'question 2',
    options: ['A', 'B', 'C'],
    correctAnswer: 'B',
  },
  {
    title: 'question 3',
    options: ['1', '2', '3'],
    correctAnswer: '2',
  },
  {
    title: 'question 4',
    options: ['a', 'b', 'c'],
    correctAnswer: 'a',
  },
  {
    title: 'question 5',
    options: ['1', '2', '3'],
    correctAnswer: '3',
  },
];

const questionTitle = document.querySelector('.ques-title');
const option1 = document.querySelector('.op-1');
const option2 = document.querySelector('.op-2');
const option3 = document.querySelector('.op-3');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const optionButtons = [option1, option2, option3];
const submitButton = document.querySelector('#submit-button');
const quizResult = document.querySelector('.quiz-result');
const scoreEl = document.querySelector('.score');

let currentQesIndex = 0;
let selectAnswer = null;
let score = 0;

const showQuestion = (index) => {
  const question = questionsData[index];
  questionTitle.textContent = question.title;
  option1.textContent = question.options[0];
  option2.textContent = question.options[1];
  option3.textContent = question.options[2];
};

//Show first question in first render
showQuestion(currentQesIndex);

//Show questions based on next and previous buttons.
nextButton.addEventListener('click', () => {
  currentQesIndex++;
  showQuestion(currentQesIndex);
});
prevButton.addEventListener('click', () => {
  currentQesIndex--;
  showQuestion(currentQesIndex);
});

//Access to the selected answer
optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
      button.focus();

      selectAnswer = button.textContent;
  });
});
// console.log(selectAnswer);


document.querySelector('#submit-button').addEventListener('click', () => { 
  const correctAnswer = questionsData[currentQesIndex].correctAnswer;
  if (selectAnswer === correctAnswer) {
    alert('Correct Answer!');
    score++;

  } else {
    alert(`Wrong Answer! Correct answer is: ${correctAnswer}`);
  }

   if (currentQesIndex === questionsData.length - 1) {
      quizResult.style.display = 'block';
     scoreEl.textContent = score;
   }
 
});