var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

// Using ForEach

var listHasPilots = false;
operatives.forEach(operative => {
  if (operative.pilot) {
    listHasPilots = true;
  }
});

console.log(listHasPilots);

// Usign Some 
var listHasPilots1 = operatives.some(operative => operative.pilot
);

console.log(listHasPilots1);

/* Note that as soon as a single true is returned,
.some() will stop checking the other array values. 
In our example above, the function only runs twice as the second operative, 
Bodhi Rook, is a pilot. No need to check for other pilots. */


/* As was pointed out in the comments, know that you can also check if every value of the array matches your condition by using .every() . It works exactly like .some(), 
but will return true only if every occurence match. */
// Usign Every 
var listHasPilots2 = operatives.every(operative => operative.pilot
);

console.log(listHasPilots2);

// Usign Find 
var listHasPilots3 = operatives.find(operative => operative.pilot
);

console.log(listHasPilots3);


/* As you can see the code is exactly the same as with .some() , the only difference is that we changed some for find ! But now, instead of returning a boolean, it will return the first pilot in our list.
Let me emphasize: .find() will return the first match. If more values match your condition, it won’t matter. Only the first match will be returned. If you need a list of all matches, then you should use .filter() instead of .find() .
If no match is found, .find() will return undefined . */

