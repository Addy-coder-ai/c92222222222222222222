player1Name=localStorage.getItem("player1_name");
player2Name=localStorage.getItem("player2_name");
player1score=0;
player2score=0;

document.getElementById("player1_name").innerHTML=player1Name + ":";
document.getElementById("player2_name").innerHTML=player2Name + ":";
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="question turn:" + player1Name;
document.getElementById("player_answer").innerHTML="answer turn:" + player2Name;

function send() {
   getWord=document.getElementById("word").value;
   word=getWord.toLowerCase();
   console.log("word in lowercase=" + word);
   charat1=word.charAt(1);
   console.log(charat1);

   lengthdivideto=Math.floor(word.length/2);
   charat2=word.charAt(lengthdivideto);
   console.log(charat2);

   lengthminus1=word.length-1;
   charat3=word.charAt(lengthminus1);
   console.log(charat3);

   remove_charat1=word.replace(charat1,"_");
   remove_charat2=remove_charat1.replace(charat2,"_");
   remove_charat3=remove_charat2.replace(charat3,"_");
   console.log(remove_charat3);
   questionWord="<h4 id='word_display'> q." + remove_charat3 +"</h4>";
   inputBox="<br> answer:<input type='text' id='inputcheckbox'>";
   checkButton="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
   row=questionWord+inputBox+checkButton;
   document.getElementById("output").innerHTML=row;
   document.getElementById("word").value="";
}
questionTurn="player1";
answerTurn="player2";
function check() {
getAnswer=document.getElementById("inputcheckbox").value;
answer=getAnswer.toLowerCase();
console.log("answer in lower case" + answer);
if (answer == word) {
   player1score=player1score+1;
   document.getElementById("player1_score").innerHTML=player1score;
}

else{
   player2score=player2score+1;
   document.getElementById("player2_score").innerHTML=player2score;   
}

if (questionTurn == "player1") {
  questionTurn="player2"
  document.getElementById("player_question").innerHTML="question_turn-" + player2Name;
}
else{
   questionTurn="player1"
  document.getElementById("player_question").innerHTML="question_turn-" + player1Name; 
}

if (answerTurn == "player1") {
   answerTurn="player2"
   document.getElementById("player_answer").innerHTML="answer_turn-" + player2Name;
 }
 else{
    answerTurn="player1"
   document.getElementById("player_answer").innerHTML="answer_turn-" + player1Name; 
 }
 document.getElementById("output").innerHTML="";
}