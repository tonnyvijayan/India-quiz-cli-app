var readLineSync=require("readline-sync");
var chalk =require("chalk")
var score=0

console.log(chalk.bgWhite.yellow.bold("HELLO AND WELCOME TO A GENERAL KNOWLEDGE QUIZ ON INDIA"))
console.log()

var username=readLineSync.question(chalk.white("What is your name?\n")).toUpperCase()

console.log(chalk.rgb(77, 255, 255)("\n\t\t\tWelcome!! "+username));

console.log("Before you start the quiz please take a moment to read the instructions.\n");
// console.log()
// instructions
console.log(chalk.bold.yellowBright("\t\t\t\tINSTRUCTONS\n1.There will be a total of 10 questions each having 3 options to choose from.\n2.To select an answer type in the alphabet corresponding to the option that you would like to select.\n3.Each right answer will fetch you 3 points.\n4:For every wrong answer one point will be deducted from your score.\n5.To add your name into the Hall of fame kindly send me a screenshot of your high-score.\n\n"));

// Hall of fame code
// entering high score details manually
console.log(chalk.bold("\t\t\t\tHALL OF FAME"));
console.log(chalk.blue.bold("\t\t\tPlayer        Score\n")+chalk.rgb(255, 204, 0)("\t\t\t1.Anjali\t\t26\n")+chalk.rgb(255, 102, 255)("\t\t\t2.Rohan\t\t\t24\n")+chalk.rgb(0, 204, 153)("\t\t\t3.Brendon\t\t23\n\n"));

// quiz questions
var quizQuestions=[{question:"1.Who was the first president of Independent India?\nA:Jawaharlal Nehru\nB:Narendra Modi\nC:Rajendra Prasad",answer:"C"},{question:"2.How many states does India have ?\nA:21\nB:29\nC:28",answer:"B"},{question:"3.Which institution in India carries out space research operations?\nA:IISc\nB:ISRO\nC:DRDO",answer:"B"},{question:"4.Which is the smallest state in India?\nA:Daman\nB:Himanchal Pradesh\nC:Goa",answer:"C"},{question:"5.Which state among these is a part of the seven sister states?\nA:Arunanchal Pradesh\nB:Sikkim\nC:Odisha",answer:"A"},{question:"6.Which listed company in India has the largest markept capitalisation ?\nA:HDFC Bank\nB:Reliance Industries\nC:Tata Consultancy Services",answer:"B"},{question:"7.Which festival is known as the festival of lights ?\nA:Christams\nB:Navratri\nC:Diwali",answer:"C"},{question:"8.Which among these is the national tree of India ?\nA:Banyan Tree\nB:Pine Tree\nC:Oak Tree",answer:"A"},{question:"9.How many time zones does India have ?\nA:4\nB:2\nC:1",answer:"C"},{question:"10.Where is Kanyakumari,  the southernmost point of mainland India located at ?\nA:Tamil nadu\nB:Kerala\nC:Andaman and Nicobar islands",answer:"A"}];



//function to take input from player and compare with stored answer,also change of score
function quizPlay(questions,answers){
  var userChoice=readLineSync.question()
  if(userChoice.toUpperCase()===answers){
    console.log(chalk.green.bold("You're Right!"))
    score=score+3
    
  }else{
  
    console.log(chalk.red.bold("You're wrong!"))
    console.log(chalk.bgMagenta("The Right answer is "+ quizQuestions[i].answer))

    // if-else condition to not let score value go into negative
    if(score>0){
      score=score-1
    }else{
      score=0
    }
    
    
  };
  console.log(chalk.rgb(243,50,243)("Current score: "+ score));
  console.log("");
  
}

// putting loop for number of questions in the array
for(i=0;i<quizQuestions.length;i++){
  // console.log(i)
  console.log(chalk.blueBright(quizQuestions[i].question))
  quizPlay(quizQuestions[i].question,quizQuestions[i].answer)

};

// ending message
console.log("\t\t\tThank you for taking the quiz, "+ username+ chalk.yellow.bold("\n\t\t\t\tYour final score is: "+ score));





