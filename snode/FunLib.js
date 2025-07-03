const util= require('util');

class FunLib{
   bytesToHex(bytes) {
        return Array.from(
        bytes,
        byte => byte.toString(16).padStart(2, "0")
        ).join("");
    }
    stringToUTF8Bytes(string) {
        return new util.TextEncoder("UTF-8").encode(string);
    }
    hexToBytes(hex) {
        const bytes = new Uint8Array(hex.length / 2);
        for (let i = 0; i !== bytes.length; i++) {
            bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        }
        return bytes;
    }
    bin2hex(string){
        return this.bytesToHex(this.stringToUTF8Bytes(string));
    }
    hex2bin(hexstring){
        return new util.TextDecoder("UTF-8").decode(this.hexToBytes(hexstring));
    }
}

module.exports = {FunLib: FunLib};
