var cities =["paris"];
function restartGame(){
		var lettersGuessed = [];
		var guessesLeft =12;
		var computerChoice = cities[Math.floor(Math.random() * cities.length)];
		var computerChoiceHidden =  computerChoice.replace(/[a-z]/g, "-");
	document.querySelector("#dashes").innerHTML = computerChoiceHidden;
	document.querySelector("#guesses").innerHTML = lettersGuessed;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.onkeyup = function (event){
   		//Function that replaces an index in a string with a specified value
		function replaceAt(string,index,replacement) {
				return string.substr(0, index) + replacement + string.substr(index+1);
		}
			//userGuess is equal to the key that the user selects
		var userGuess = event.key;
		if (computerChoice.includes(userGuess)){
			var letterIndex =[];
			//creates an array that stores the index value of where the letter guessed is located in the string
			for (var i=0; i<computerChoice.length; i++){
				if(computerChoice[i] === userGuess) letterIndex.push(i);
			}
			//replaces the "-" with the determined index locations in letterIndex. Loop is important for words containing more than one of the same letter.
				
			for (var j=0; j<letterIndex.length; j++){
					computerChoiceHidden=replaceAt(computerChoiceHidden, letterIndex[j], userGuess);
			}
		}
		else {
			lettersGuessed.push(userGuess);
			guessesLeft--;
		}
		document.querySelector("#dashes").innerHTML = computerChoiceHidden;
		document.querySelector("#guesses").innerHTML = lettersGuessed;
		document.querySelector("#guessesLeft").innerHTML = guessesLeft;
		
		if (computerChoiceHidden===computerChoice && computerChoice==="paris"){
			document.getElementById("display").src = "assets/images/eiffelTower.jpg";
			restartGame();
			return;
			
		}
		}
}
window.onload = function(event) {
	   	restartGame();	 		   
}
