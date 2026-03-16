function startQuiz(){

let name = document.getElementById("username").value;

if(name === ""){
alert("Please enter your name");
return;
}

localStorage.setItem("playerName", name);

window.location.href="quiz.html";

}