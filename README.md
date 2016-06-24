# Magic 8 mini Javascript library
------------

A mini Javascript library that recreates the simple Q &amp; A of the Magic 8-Ball fortune-telling toy. It is supported by JQuery to handle the DOM-specific operations. Check out the Wikipedia page to learn more: https://en.wikipedia.org/wiki/Magic_8-Ball

------------
To use this library you need to create a form with the following:

1. a textfield or textarea (so users can enter a question) 
2. a button to submit question
3. a container element to display the answer (ie, div, p, span, or heading 'H1, H2...'elements will do the trick)

The user can type in a 'Yes or No' question in the input field and then click the button to submit the question (check out the index.html file). Once the question has been processed by the Magic 8 Ball library, the answer will display using a 'fade in' effect into the container element passed.

Be sure to give these elements an 'id' attribute which will be used in setup of the Magic8Ball object in your JS file (check out the app.js file). This object can be called using the 'Magic8' or 'M8' keywords. Then use the 'HTMLMagic8(...)' method to pass the container's id to the object.  

The Magic8.js is commented so check it out for more details but here are a few things to note.

- This library was created with the intention of using as many Javascript best practices as possible. For instance, the Magic8's methods are placed in the Prototype object to conserve memory space as well as using regular expressions to 'scrub' submitted questions for processing. 
- There are 20 standared answers that include affirmative, negative, or non-committal statements. 
- To amp up the Magic 8-Ball 'toy', a bonus array object for secret questions and answers was added so that if a user enters any of these questions the library will return the matching secret answer. 

Of course, this mini library can be further reworked and expanded so enjoy!

