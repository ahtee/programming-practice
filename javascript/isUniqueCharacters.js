// Implement an algorithm to determine if a string 
// has all unique characters. What if you cannot 
// choose additional data structures?

function isUniqueCharacters(string) {
	// 26 characters in the english alphabet.
  if (string.length > 26) {
  	return false;
  }
  
  const char_set = [];
  for (let i = 0; i < string.length; i++) {
  	let val = string[i];
    if (char_set[val]) {
    	return false;
    }
    char_set[val] = true;
  }
  return true;
}

let msg = 'ndsfjsdfjbdsfjkb';
isUniqueCharacters(msg);
