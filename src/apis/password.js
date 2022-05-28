export function encriptar(password){
    const cryptoSHA256 = require("crypto-js/sha256");
    const newPassword = cryptoSHA256(password);
    
    return newPassword;
}


