const msg = "aaabbbcdddddeefg";

function compress(message) {
	let compressedLength = 0;
  let countConsecutive = 0;
  
  for (let i = 0; i < message.length; i++) {
    countConsecutive++
    if (message[i] !== message[i+1] || i + 1 >= message.length) {
      compressedLength += 1 + message.valueOf(countConsecutive).length;
      countConsecutive = 0;
    }
  }
	return compressedLength;
}

compress(msg);
