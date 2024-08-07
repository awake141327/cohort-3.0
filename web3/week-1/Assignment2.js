/*
    What if I ask you that the input string should start with 100xdevs ? 
    How would the code change?
*/

const crypto = require("crypto");

function getHash(hashPrefix, inputPrefix) {
  let input = 0;
  while (true) {
    let inputStr = inputPrefix + input.toString();
    const hash = crypto.createHash("sha256").update(inputStr).digest("hex");
    if (hash.startsWith(hashPrefix)) {
      return { nonce: input, hash: hash };
    }
    input++;
  }
}

console.log(getHash("00000", "100xdevs"));
