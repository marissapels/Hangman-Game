var cities =["paris", "london", "beijing", "rome", "austin", "amsterdam", "prague", "bangkok"];

var wins=0;
var losses=0;

function restartGame(){
		var lettersGuessed = [];
		var availableKeys="abcdefghijklmnopqrstuvwxyz";
		var guessesLeft =12;
		var computerChoice = cities[Math.floor(Math.random() * cities.length)];
		var computerChoiceHidden =  computerChoice.replace(/[a-z]/g, "-");

	//Displays variable on HTML
	document.querySelector("#dashes").innerHTML = computerChoiceHidden;
	document.querySelector("#guesses").innerHTML = lettersGuessed;
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;
	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = losses;


	//Game begins when any key is selected
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
		//if userGuess is not contained in word, it pushes the letter to an array and subtracts from guessesLeft
		else if (lettersGuessed.includes(userGuess)===false && availableKeys.includes(userGuess) && guessesLeft>0){
			lettersGuessed.push(userGuess);
			guessesLeft--;
		}

		if (guessesLeft===0){
			losses++;
			restartGame();
			return;
		}

		//When user guesses the word, image and city name are displayed. Game restarts.
		if (computerChoiceHidden===computerChoice && computerChoice==="paris"){
			wins++;
			document.getElementById("display").src = "assets/images/eiffelTower.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Paris, France";
			restartGame();
			return;
		}

		if (computerChoiceHidden===computerChoice && computerChoice==="london"){
			wins++;
			document.getElementById("display").src = "assets/images/london2.jpg";
			document.querySelector("#cityGuessed").innerHTML = "London, England";
			restartGame();
			return;
		}

		if (computerChoiceHidden===computerChoice && computerChoice==="beijing"){
			wins++;
			document.getElementById("display").src = "assets/images/beijing1.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Beijing, China";
			restartGame();
			return;
		}

		if (computerChoiceHidden===computerChoice && computerChoice==="austin"){
			wins++;
			document.getElementById("display").src = "assets/images/austin.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Austin, Texas";
			restartGame();
			return;
		}
		if (computerChoiceHidden===computerChoice && computerChoice==="rome"){
			wins++;
			document.getElementById("display").src = "assets/images/rome.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Rome, Italy";
			restartGame();
			return;
		}

			if (computerChoiceHidden===computerChoice && computerChoice==="amsterdam"){
			wins++;
			document.getElementById("display").src = "assets/images/amsterdam.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Amsterdam, Netherlands";
			restartGame();
			return;
		}

			if (computerChoiceHidden===computerChoice && computerChoice==="prague"){
			wins++;
			document.getElementById("display").src = "assets/images/prague.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Prague, Czech Republic";
			restartGame();
			return;
		}

			if (computerChoiceHidden===computerChoice && computerChoice==="bangkok"){
			wins++;
			document.getElementById("display").src = "assets/images/bangkok.jpg";
			document.querySelector("#cityGuessed").innerHTML = "Bangkok, Thailand";
			restartGame();
			return;
		}

		document.querySelector("#dashes").innerHTML = computerChoiceHidden;
		document.querySelector("#guesses").innerHTML = lettersGuessed;
		document.querySelector("#guessesLeft").innerHTML = guessesLeft;
		document.querySelector("#wins").innerHTML = wins;
		document.querySelector("#losses").innerHTML = losses;
	}

}
window.onload = function(event) {

	   	restartGame();	 		   
}
