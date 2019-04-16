function reverseWords(message) {

  // Decode the message by reversing the words
  // reverse the array of chars to get their correct word place.
  reverseCharacters(message, 0, message.length - 1);
  
  // now reverse the words that are in correct place by checking where the spaces are in the array and
  // set the end reverseCharacters index to the end of the word.
  // increment the loop to the next word after the space to continue.
  let beginningIndex = 0;
  
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      reverseCharacters(message, beginningIndex, i - 1);
      beginningIndex = i+1;
    }
  }
  
  // helper function which reverses an array you call from an index and to an index.
  function reverseCharacters(message, from, to) {
    while (from < to) {
      let swap = message[from];
      message[from] = message[to];
      message[to] = swap;
      from++;
      to--;
    } 
  }
  
}
