/* Javascrript and Jquery */

$(document).ready(function() {


	var wins = 0;
	var losses =0;
	var scoreToWin;
	var cumulativeScore;


	var randomNumberEmptyArray = [];
	var orangeRandomNumber;
	var greenRandomNumber;
	var blueRandomNumber;
	var redRandomNumber;
	var orangeScore;
	var greenScore;
	var blueScore;
	var redScore;
	

	function start(){

		$('#win-line').html("<p>Wins: " + wins + "</p>");
		$('#lose-line').html("<p>Losses: " + losses + "</p>");
		

		randomNumberEmptyArray = [];

		
		cumulativeScore =0;

		scoreToWin = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
		$('#actual-win-score').html(scoreToWin);

 		for(var i = 0 ; i < 4 ; i++){

 			randomDigit = Math.floor(Math.random() * (7 - 2)) + 2;

 			// While loop makes sure there are no duplicate numbers in my array
 			while(randomNumberEmptyArray[0] === randomDigit || randomNumberEmptyArray[1] === randomDigit || randomNumberEmptyArray[2] === randomDigit || randomNumberEmptyArray[3] === randomDigit ){

 				randomDigit = Math.floor(Math.random() * (7 - 2)) + 2;

 			}

 			randomNumberEmptyArray.push(randomDigit);

	 		}

 			orangeRandomNumber = randomNumberEmptyArray[0];
			greenRandomNumber = randomNumberEmptyArray[1];
			blueRandomNumber = randomNumberEmptyArray[2];
	 		redRandomNumber = randomNumberEmptyArray[3];
 			
 	}

 	start();
	

    $("#crystal-orange").on("click", function() {

    	$("#crystal-orange").effect("bounce", {times:2}, "fast" );

    	cumulativeScore += orangeRandomNumber;
    	$('#actual-current-score').html(cumulativeScore);

    	if(cumulativeScore === scoreToWin){
    		wins++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	} else if(cumulativeScore > scoreToWin){
    		losses++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	}

      });

    $("#crystal-green").on("click", function() {

    	$("#crystal-green").effect("bounce", {times:2}, "fast" );

    	cumulativeScore += greenRandomNumber;
    	$('#actual-current-score').html(cumulativeScore);


    	if(cumulativeScore === scoreToWin){
    		wins++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	} else if(cumulativeScore > scoreToWin){
    		losses++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	}

      });

    $("#crystal-blue").on("click", function() {

    	$("#crystal-blue").effect("bounce", {times:2}, "fast" );

    	cumulativeScore += blueRandomNumber;
    	$('#actual-current-score').html(cumulativeScore);

    	if(cumulativeScore === scoreToWin){
    		wins++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	} else if(cumulativeScore > scoreToWin){
    		losses++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	}

      });

    $("#crystal-red").on("click", function() {

    	$("#crystal-red").effect("bounce", {times:2}, "fast" );

    	cumulativeScore += redRandomNumber;
    	$('#actual-current-score').html(cumulativeScore);

    	if(cumulativeScore === scoreToWin){
    		wins++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	} else if(cumulativeScore > scoreToWin){
    		losses++;
    		start();
    		$('#actual-current-score').html(cumulativeScore);
    	}

      });

});