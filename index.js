
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers_tracker");
const totalQuestionSpan=document.querySelector(".totalQuestion");
const question=document.querySelector(".question");
const opt1=document.querySelector(".option 1");
const opt2=document.querySelector(".option 2");
const opt3=document.querySelector(".option 3");
let questionIndex=;
let index=0;
let myArray=[];


function next(){
    button.classList.add('hidden');
    document.getElementById('submit').classList.remove('hidden')
}


const question=[
    {
        q: 'How many hours does a Koala sleep in an average day?',
        options: [ '2 hours', '12 hours', '20 hours'],
        answer: 2
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
    }
    {
        q: 'STEM is an acronym for what?',
        options: ['skin,tongue,eyes,mouth', 'science,technology,engineering,maths', 'science techniques encapsulating maths'],
        answer: 1
    }
    {
        q: 'Who was the first black Female President?',
        options: ['Ellen Johnson Sirleaf', 'Shirley Anita Chisholm', 'Margaret Tatcher'],
        answer: 0
    }
    ]

    totalQuestionSpan.innerHTML=questions.length
    function load(){
        questionNumberSpan.innerHTML=index+1;
        question.innerHTML=questions[questionIndex].q;
        opt1.innerHTML=questions[questionIndex].options[0];
        opt1.innerHTML=questions[questionIndex].options[1];
        opt1.innerHTML=questions[questionIndex].options[2];
        index++;
    }

    function Validate(){
        if(!options[i].classList.contains("disabled")){
            alert("please select an option")
        }
        else {
            randomQuestions();
        }
    }

    function next(){
        Validate();
    }

    function randomQuestions(){
        let randomNumber=Math.floor(Math.random()*questions.length);
        questionIndex=randomNumber;
        myArray.push(questionIndex)
        load();
    }

    function check(element){
        if(element.id==questions[questionIndex].answer){
            element.classList.add("correct");
            updateAnswerTracker("correct");
        }
    }
    else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong");
    }

    function disabledOptions(){
        for (let i=0; i<options.length; i++){
            options[i].classList.add("disabled");
            if(options[i].id==questions[questionIndex].answer){
                options[i].classList.add("correct");
            }
        }
    }

    function enableoptions(){
        for (let i=0; i<options.length; i++){
            options[i].classList.remove("disabled", "correct", "wrong");
    }

    function answerTracker(){
        for(let i=0; i<questions.length; i++){
            const div=document.createElement("div")
            answerTrackerContainer.appendChild(div);
        }
    }

    function updateAnswerTracker(className){
        answerTrackerContainer.children[index-1].classList.add(className);
    }

    window.onload=function(){
        randomQuestions();
        answerTracker();
    }
