function reverseString(str) {
  const letters = str.split('');
    let b = letters.length - 1
  const reversedArr = letters.map((letter) => {
    letter = letters[b];
    b--  
    return letter
  })
  const reversedStr = reversedArr.join("");
  return reversedStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
