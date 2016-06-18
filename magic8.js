/*!
 * Magic 8 JavaScript Library v1.0
 *
 * Released under the MIT license
 *
 * Date: 2016-06-18
 */

;(function(global, $) {
    
    // create a 'new' object
    var Magic8 = function(question) {
        return new Magic8.init(question);   
    }
    
    // secret questions a user can ask and the Magic 8 Ball provides an secret answers
    var secretQuestions = [
        { 
            question: 'Why did the chicken cross the road',
            answer: '..to get to the other side'
        }, 
        { 
            question: 'Roses are red violets are blue',
            answer: '...sugar is sweet and so are you'
        }
    ];
    
    // traditional Magic 8 Ball answers
    var officialAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful',
    ];
    
    // prototype holds methods (to save memory space)
    Magic8.prototype = {
        
        // check that is a valid question
        validate: function() {
            
            // make sure that the question is not empty
            if (this.question.length === 0) {
                throw "Did not ask a question";   
            } 
            var cleanQ = this.scrubQuestion(this.question);
            if (cleanQ.length === 0) {
                throw "Invalid question";
            }
            this.question = cleanQ;
        },
        
        // the regular expression used to check the string and remove special characters
        //  and make everything lowercase so that it is simpler to match
        scrubQuestion: function(q) {
            return q.replace(/[^a-zA-Z 0-9]+/gi, "").replace(/[_!?*()@#%$&]/g, '').toLowerCase();
        },
        
        // check to see if this is a question or not
        isASecretQuestion: function() {
            // get 'this' execution context's reference
            var self = this;
            
            // if the question is a secret question then return the secret answer
            for (var quest in secretQuestions) {
                
                // lowercase the secret question so that the match is easier to match
                var q = secretQuestions[quest].question.toLowerCase();
                
                // is there a match
                if (q == self.question) {
                    this.answer = secretQuestions[quest].answer; 
                    return true;
                }       
            }
            
            // this is not a secret question
            return false;
        },
        
        // retrieve the answer to the question
        setAnswer: function retrieveAnswer() {
            
            // if this is not a secret question then randomly choose a traditional answer
            if (!(this.isASecretQuestion())) {
                this.answer =  officialAnswers[Math.floor(Math.random() * officialAnswers.length)];
            }
            return this.answer;
        },
        
        // retrieve answer from object by referring to properties using [] syntax
        shakeIt: function() {
            //set the answer
            this.setAnswer();
            
            // make chainable
            return this;
        },
        
        // take a moement to shake the ball
        wait: function(showAnswer) {
            // get 'this' execution context's reference
            var self = this; 
            
            // the Magic 8 Ball is 'shaking'
            self.shakeIt()
            // wait 3 seconds then set the answer  
            setTimeout( function () {
                // pass 'this' execution context's answer that was generated
                showAnswer(self.answer);
                }, 
                1000
            );
        },
        
        // display the Q&A in the console
        log: function() {
            if (console) {
                console.log(this.question + ': ' + this.answer); 
            }
            
            // make chainable
            return this;
        },
        
        // display the answer to the question in the selector that was passed in
        HTMLMagic8: function(selector) {
            // check to see if jQuery is loaded already
            if (!$) {
                throw 'jQuery not loaded';   
            }
            
            // check to see if selector was sent
            if (!selector) {
                throw 'Missing jQuery selector';   
            }
            
            // display the answer in the chosen place on the DOM
            function displayAnswer(results) {
                // fade in the answer from the Magic 8 Ball
                $(selector).html(results).fadeIn(4000);
            }
            
            // The Magic 8 Ball wait for answer
            this.wait(displayAnswer);  
            
            // make chainable
            return this;
        }
        
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Magic8.init = function(question) {
        // get 'this' execution context's reference
        var self = this;
        
        self.question = question || '';
        self.answer = '';
        
        self.validate();
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Magic8.init.prototype = Magic8.prototype;
    
    // attach our Magic8 to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Magic8 = global.M8 = Magic8;
        
}(window, jQuery));
