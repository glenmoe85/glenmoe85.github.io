function rpsGame(clicked_id){
	//alert(clicked_id);
	if (clicked_id == "rock") {
		alert("Computer: Scissors You: Rock\nYou won!")
	} 
	else if (clicked_id == "scissors") {
		alert("Computer: Scissors You: Scissors\nIt was a draw!")
	} 
	else {
		alert("Computer: Scissors You: Paper\nYou loss!")
	}
}