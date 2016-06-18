// HERE ARE TWO WAYS TO TRY OUT THE MAGIC 8 JAVASCRIPT LIBRARY

// (1) 
// Create a a new Magic 8 object. 
// (The architecture will take setting up the 'new' keyword.)
var m8B = M8('Will the Democrats win?');

// Then use these chainable methods to process the question and 
//  display the Q & A in the console window.
m8B.shakeIt().log();

// (2)
// Create a HTML file with a form. (Check out the example index.html accompanying this library)
// Add the Magic 8 object to the click event of the form button
$('#askMe').click(function() {

    // Create a new 'Magic8' object
    var askMeM8Ball = M8($('#question').val());
    
     // Fire off the HTMLMagic8(...) method to process the question, 
     //  passing the '#question' id of the selector, 
     //  and log the Q&A in the console window.
    askMeM8Ball.HTMLMagic8($('#answer')).log();
    
});