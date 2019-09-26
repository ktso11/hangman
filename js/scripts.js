
$(document).ready(function(){

  var randomWords = ["letter", "silly", "kitten", "characters", "fantasy", "elements", "assembly"];
  var word = randomWords[Math.floor(Math.random() * randomWords.length)]
  console.log("the word is ..." + word)


//when doc loads, append spaces to show how many letters this word have
  for(i=0; i<word.length; i++){
    $(".numChances").append("<b class='" + word[i] + "'> _ </b> " );
  };

//append alpahabets buttons
  var alpahabet = "abcdefghijklmnopqrstuvwxyz";
  for(j=0; j<alpahabet.length; j++){
    $(".alpahabet").append("<button class='" + alpahabet[j] + "'>" + alpahabet[j] + " </button>");
  };

//restart button
  var resetGame = $( ".tryAgain" ).on( "click", function() {
    location.reload()
  });

//check if letters match
  var checkLetters = function() {
    var letterArr = []
    letterArr.push($(".numChances b").text());
    if(letterArr.join() === word) {
      $(".alpahabet").attr('id', 'hide')
      $(".gameover").html("WIN!")
      $(".gameover").attr('id', 'show')
      $(".selectLetter").attr('id', 'hide')
      $(".tryAgain").attr('id', 'show')
    }
  };

//on click check if the selected letter match
  var count = 6
  $( ".alpahabet button" ).on( "click", function() {
    var pressButton = $(this).attr('class');
//if letter is a match, display that letter and check if the user won
    if($(".numChances b").hasClass(pressButton) && count > 0){
      $("."+pressButton).html(pressButton);
      $(this).attr("disabled", true);
      checkLetters();
//if the letter does not exist minus 1 guess
    } if($(".numChances b").hasClass(pressButton)=== false){
      count --;
      $("." + count).attr('id','visible')
      $(this).attr("disabled", true);
//if no more guesses available, end the game
    } if(count === 0){
      $(".alpahabet").attr('id', 'hide');
      $(".gameover").attr('id', 'show')
      $(".selectLetter").attr('id', 'hide')
      $(".tryAgain").attr('id', 'show')
    }
  });

});
