// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabsay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW
function ay (string) {
	return string + "ay ";
}

function sentenceToPigLatin (string) {
	return string.split (' ');
}

function firstletter (string) {
	return string.slice(0,1);
}



// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {

//click handler 
  $("#button").click( function() {
	
	$("#div").empty();
	
	var input = $("#input").val();
	var pigLatinWord = sentenceToPigLatin(input);
	var vowels = [
	'a', 'e', 'i', 'o', 'u'
	]
	
//for loop	
	for ( var ending = 0; ending < pigLatinWord.length; ending = ending + 1) {
		
		var first = firstletter(pigLatinWord[ending]);
		var last = pigLatinWord[ending].slice (1,pigLatinWord[ending].length);
		
		if (first === 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u' ) {  
			
			$("#div").append( ay( pigLatinWord[ending] ) );
			
		} else {	
			
			var word = last + first;
			$("#div").append( ay ( word ) );
			
		}
		
		
	}	
	
	
	
  });


		

});


