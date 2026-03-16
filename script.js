let current = 0;
let answersStore = [];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

document.getElementById("player").innerText =
"Player: " + localStorage.getItem("playerName");

function loadQuestion(){

let q = quizData[current];

question.innerText = q.question;

answers.innerHTML="";

q.options.forEach((opt,index)=>{

answers.innerHTML += `
<label class="option">
<input type="radio" name="answer" value="${index}">
${opt}
</label>
`;

});

updateProgress();

}

function saveAnswer(){

let selected = document.querySelector('input[name="answer"]:checked');

if(selected){
answersStore[current] = selected.value;
}

}

nextBtn.onclick = function(){

saveAnswer();

if(current < quizData.length-1){
current++;
loadQuestion();
}

};

prevBtn.onclick = function(){

saveAnswer();

if(current > 0){
current--;
loadQuestion();
}

};

submitBtn.onclick = function(){

saveAnswer();

let score = 0;

quizData.forEach((q,index)=>{
if(answersStore[index] == q.answer){
score++;
}
});

document.querySelector(".quiz-container").innerHTML =

`<h2>Quiz Finished 🎉</h2>
<h3>Your Score: ${score} / ${quizData.length}</h3>`;

};

function updateProgress(){

let percent = (current/quizData.length)*100;

document.getElementById("progressBar").style.width =
percent+"%";

}

loadQuestion();