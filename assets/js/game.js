
<script type="text/javascript">
    // Letter Choices
    var letters = ["a", "b", "c", "d", "e"];

   // Computer Choice
    var computerChoice = null;


    // Array for player guess
    var guessedLetters = [];

    // Guess Countdowns
    var totalGuesses = 3;
    var guessesLeft = 3;

    // Win/loss countdown
    var wins = 0;
    var losses = 0;

    // Functions
    var guessesRemaining = function() {
      // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
      // (i.e. guessesLeft will get displayed in HTML)
      document.querySelector("#guesses-left").innerHTML = guessesLeft;
    };

    var computerGenLetter = function() {
      // Computer picks from a-e
      this.computerChoice = this.letters[Math.floor(Math.random() * this.letters.length)];
    };

    var guessesUsed = function() {
      // User missed guesses
      document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
    };

    // Game Reset Function 
    var reset = function() {
      guessedLetters = [];
      totalGuesses = 3;
      guessesLeft = 3;
      computerGenLetter();
      guessesUsed();
      guessesRemaining();
    };

    // Processes upon page generation
    computerGenLetter();
    guessesRemaining();

    // Keyboard click capture
    document.onkeyup = function(event) {
      // Guess decreases by one
      guessesLeft--;

      // Force to lower case
      var letter = String.fromCharCode(event.keyCode).toLowerCase();

      // adds incorrect user guess to Dom
      guessedLetters.push(letter);

      // Refresh functions to Dom
      guessesRemaining();
      guessesUsed();


      // Does the user choice match the computer
      if (letter === computerChoice) {

        // winning update
        wins++;
        document.querySelector("#wins").innerHTML = wins;

        // game reset after win
        reset();
      }


      // no guesses remaining
      if (guessesLeft === 0) {

        // update Dom of loss.
        losses++;
        document.querySelector("#losses").innerHTML = losses;

        // Game Reset after loss
        reset();
      }
    };
  </script>