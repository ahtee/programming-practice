function sort(string) {
  const content = string.split('');
  const sortedContent = content.sort((a, b) => a - b);
  return sortedContent.join('');
}

// if to strings are permutations, then they have the same length and characters but different orders.
function permutation(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  
  return sort(first).equals(sort(second));
}

permutation('12345', '123456');
