
// const (name) = [list of things]
// Apply title case transformation
//  index.js returns an array with title case tutorial names:
// titleCased is not a function?
//AssertionError: expected [ Array(3) ] to have the same members as [ Array(10) ]
//AssertionError: expected [ Array(10) ] to have the same members as [ Array(10) ]
     

//const titleCased = () => {
 // return tutorials
//const tutorial = data
//const titleCased = () => { data
  //return tutorials

// data (words){
  //declare each variables into sentences
  //iderate into each array
  //update each first letter to be capitalized}

  const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
                                         //(split format)entry = prompt("Enter your name"); entryArray = entry.split("");.
                                        //let sent = "these are just some words on paper"
                                           //sent.split(' ').map ( ([h, ...t]) => h.toUpperCase() + t.join('').toLowerCase() )}


                                        //function capitalize (sentence) {
                                                 //return sentence.split(' ').map(
                                                   //function (s) {
                                                         //return s[0].toUpperCase() + s.substring(1).toLowerCase()      
                                                   //}).join(' ') ;
                                                           //}

          function titleCased () {
             return tutorials.map((title) => {
            return title.split(' ').map( ([firstLetter, ...otherLetters]) => {
             return [firstLetter.toUpperCase() + otherLetters.join('')];
                 }).join(' ');
                });
                  };