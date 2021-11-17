function lyrics(){
	var bottlesNumberTotal=99;
	var bottlesNumber;
	var bottlesLeft;

	for(var i=0;i<bottlesNumberTotal;i++){
		bottlesNumber=bottlesNumberTotal - i;
		bottlesLeft=bottlesNumber - 1;
		if(bottlesNumber !=1){
			document.getElementById("main").innerHTML+="<br/>"+bottlesNumber + " bottles of beer on the wall, "+ bottlesNumber +" bottles of beer"+"<br/>";
			document.getElementById("main").innerHTML+="Take one down and pass it around, "+ bottlesLeft + " bottle of beer on the wall";
			}
		else{
			document.getElementById("main").innerHTML+="<br/>"+bottlesNumber + " bottle of beer on the wall, "+ bottlesNumber +" bottle of beer<br/>";
			document.getElementById("main").innerHTML+="Take one down and pass it around, no more bottles of beer on the wall";
		}
	}
	document.getElementById("main").innerHTML+="<br/>"+"No more bottles of beer on the wall, no more bottles of beer<br/>";
	document.getElementById("main").innerHTML+="Go to the store and buy some more, 99 bottles of beer on the wall";
}

function rpsGame(clicked_id){	
	var selected;
	var count=0;
	document.getElementById("main").innerHTML="";
	while(count<3){
		compSel=Math.floor(Math.random() * 3);
		if (compSel==0){
			selected="rock";
		}
		else if (compSel==1){
			selected="scissors"
		}
		else{
			selected="paper"
		}
		if (clicked_id == selected) {
			document.getElementById("main").innerHTML+="<br/>Computer: "+selected+" You: "+clicked_id+"<br/>It was a draw!";
		} 
		else if (clicked_id == "scissors" && selected == "paper") {
			document.getElementById("main").innerHTML+="<br/>Computer: "+selected+" You: "+clicked_id+"<br/>You win!";
			break;
		} 
		else if (clicked_id == "paper" && selected == "rock") {
			document.getElementById("main").innerHTML+="<br/>Computer: "+selected+" You: "+clicked_id+"<br/>You win!";
			break;
		} 
		else if (clicked_id == "rock" && selected == "scissors") {
			document.getElementById("main").innerHTML+="<br/>Computer: "+selected+" You: "+clicked_id+"<br/>You win!";
			break;
		}
		else {
			document.getElementById("main").innerHTML+="<br/>Computer: "+selected+" You: "+clicked_id+"<br/>You loss!";
		}
		count=count+1;
	}
	document.getElementById("main").innerHTML+="<br/>Game Over! Click option to play again";
}