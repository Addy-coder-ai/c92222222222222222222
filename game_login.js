function addUser() {
   player1Name=document.getElementById("player1_name_input").value;
   player2Name=document.getElementById("player2_name_input").value;
   localStorage.setItem("player1_name",player1Name);
   localStorage.setItem("player2_name",player2Name);
   window.location="game_page.html";   
}