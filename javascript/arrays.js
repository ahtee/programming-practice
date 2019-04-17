let arr = Array.new;

while (typeof input !== String) {
    let newValue = alert('Input a numeric value, or enter an alphabetic character to exit creating the array');
    arr.push(newValue);
}

console.log(arr);