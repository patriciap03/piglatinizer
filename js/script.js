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
function secondletter (string) {
	return string.slice(1,2);
}


// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {

//click handler for the first button
  $("#button").click( function() {
	
	$("#div").empty();
	
	var input = $("#input").val();
	var pigLatinWord = sentenceToPigLatin(input);
	var vowels = [
	'a', 'e', 'i', 'o', 'u'
	]
	
//for loop	
	for ( var ending = 0; ending < pigLatinWord.length; ending = ending + 1) {
		
		var eachword = pigLatinWord[ending];
		
		for ( var i = 0; i < eachword.length; i = i + 1) {
			
			var eachletter = eachword[i];
			
			if (eachletter !== 'a' || eachletter !== 'e' || eachletter !== 'i' || eachletter !== 'o' || eachletter !== 'u') {  
			
				var consonant = eachword.slice (0,i);
				var last = eachword.slice (i,eachword.length);
			
			} else {	
			
				var reg = eachword;
			
			}
			
		}
		
		if ( reg === eachword ) {
			
			$("#div").append( ay(eachword) );
			
		}else {
			
			var word = last + consonant;
			$("#div").append( ay(word) );
			
		}
		
	}	
	
	
	
});


//click function for second button

$("#button1").click( function() {
	
	$("#dix").empty();
	
	var input = $("#input1").val();
	var pigLatinWord = sentenceToPigLatin(input);
	
//for loop	
	for ( var ending = 0; ending < pigLatinWord.length; ending = ending + 1) {
		
		var removeay = pigLatinWord[ending].slice(0,pigLatinWord[ending].length-2);
		var lastletter = removeay.slice (removeay.length-1,removeay.length);
		var coreword = removeay.slice (0,removeay.length-1);
		
		console.log(removeay);
		console.log(lastletter);
		console.log(coreword);
		
		if (lastletter !== 'a' || lastletter !== 'e' || lastletter !== 'i' || lastletter !== 'o' || lastletter !== 'u' ) {  
			
			var word = lastletter + coreword;
			$("#dix").append( word ); 
			
		} else {	
			
			$("#div").append( removeay );
			
		}
		
	}	
	
	
	
});

		

});


