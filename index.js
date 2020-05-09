
const options =document.querySelector(".options").children;
const answerTrackerBox=document.querySelector(".answers-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-questions");
const correctAnswerSpan = document.querySelector(".correct-answers");
const allQuestionsSpan = document.querySelector(".allQuestions");
const percentage = document.querySelector(".percentage");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let anArr = [];
let score = 0;



const questions = [
    {
        q: 'How many hours does a Koala sleep in an average day?',
        options: [ '2 hours', '12 hours', '20 hours'],
        answer: 2
    },
    {
        q: 'Who was the first black Female President?',
        options: ['Ellen Johnson Sirleaf', 'Shirley Anita Chisholm', 'Margaret Tatcher'],
        answer: 0
    },
    {
        q: 'Who scored the first Premier League goal in 1992?',
        options: ['Thierry Henry', 'Brian Deane', 'Ronaldinho'],
        answer: 1
    },
    {
        q: 'How many bones do babies have?',
        options: ['206', 'less than 100', '300'],
        answer: 2
    },
    {
        q: 'STEM is an acronym for what?',
        options: ['Skin, tongue, eyes, mouth', 'Science, technology, engineering, maths', 'Science techniques encapsulating maths'],
        answer: 1
    }
]  

totalQuestionSpan.innerHTML=questions.length;
function load (){
    questionNumberSpan.innerHTML=index+1
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
     index++; 
}

function check(element){
    if(element.id == questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerChecker("correct")
        score++;
        }

    else{
        element.classList.add("wrong");
        updateAnswerChecker("wrong");
    }
     
    disabledOptions()
 
}

 
function disabledOptions(){
for(let i=0; i<options.length; i++){
    options[i].classList.add("disabled");
    if(options[i].id == questions[questionIndex].answer){
        options[i].classList.add("correct");
    }
}
}

function enableOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled","correct","wrong");
    }

}

function validate(){
    if(!options[0].classList.contains("disabled")) { 
        return;   
    }
    else{
        enableOptions();
        randomQuestion();
    }


}


function next(){
    validate();
}

function randomQuestion(){
    let randomNumber = Math.floor(Math.random()*questions.length)
    let aDuplicate=0;
    if(index==questions.length){
        endOFQuiz()
    }
    else{
       if(myArray.length>0) {
           for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randomNumber){
                    aDuplicate=1;
                    break; 

                }
           }
           if(aDuplicate==1){
               randomQuestion();
           }
           else{
            questionIndex = randomNumber;
            load();
            anArr.push(questionIndex);
           }

       }
       if(myArray.length==0){
        questionIndex = randomNumber;
        load();
        anArr.push(questionIndex);
       }
    
    myArray.push(randomNumber);
    
      
    
    }   
}

function answerchecker(){
    for (let i=0; i<questions.length; i++){
        const div=document.createElement("div")
         answerTrackerBox.appendChild(div);

    }

}

function updateAnswerChecker(classNam){
 answerTrackerBox.children[index-1].classList.add(classNam)
}

function endOFQuiz(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    allQuestionsSpan.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";

} 
function tryAgain(){
    window.location.reload();
}

window.onload = function(){
 randomQuestion();
 answerchecker();
}
