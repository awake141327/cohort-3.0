/* 
    What if I ask you the following question — 
    Give me an input string that outputs a SHA-256 hash that starts with 00000. 
    How will you do it?
*/

const crypto = require("crypto");

function getHash(hashPrefix) {
  let input = 0;
  while (true) {
    const hash = crypto
      .createHash("sha256")
      .update(input.toString())
      .digest("hex");
    if (hash.startsWith(hashPrefix)) {
      return { nonce: input, hash: hash };
    }
    input++;
  }
}

console.log(getHash("00000"));
