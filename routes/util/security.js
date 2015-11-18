'use strict';

var crypto = require('crypto'),
    scheme = 'aes-256-cbc',
    key = 'supersecretkey';

module.exports = (function() {

    /**
     * Helper function to encrypt given plainText
     * @param {String} plainText
     * @return {String} encrypted text
     */
    function encrypt(text) {
        var cipher = crypto.createCipher(scheme, key);
        var crypted = cipher.update(text, 'utf-8', 'hex');
        crypted += cipher.final('hex');

        return crypted;
    }

    /**
     * Helper function to decrypt given string
     * @param  Buffer string in encrypted form
     * @return {String} plainText
     */
    function decrypt(data){
        var decipher = crypto.createDecipher(scheme, key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');

        return decrypted;
    }

    return {
        encrypt: encrypt,
        decrypt: decrypt
    };
}());
