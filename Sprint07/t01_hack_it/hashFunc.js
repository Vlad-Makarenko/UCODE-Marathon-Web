// const CryptoJS = require("crypto-js");

// function hashCode(password, salt) {
//     return CryptoJS.HmacSHA1(salt, password)
// }

const SHA256 = require("crypto-js/sha256");

function hashCode(password, salt) {
    return SHA256(password + salt).toString();
}
// console.log(SHA256("Message"));

module.exports = hashCode;