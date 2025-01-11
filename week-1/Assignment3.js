/*
    What if I ask you to find a nonce for the following input - 
    harkirat => Raman | Rs 100
    Ram => Ankit | Rs 10
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

console.log(
  getHash(
    "00000",
    `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
`
  )
);
