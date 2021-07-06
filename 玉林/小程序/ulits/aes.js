import CryptoJS from 'crypto-js/crypto-js'

//  KEY 和 iv 是后端给我的
const aseKey = 'c104a9006ce20039692a8b344edf51e3';
const iv = 'e38aB9AF2b9a80E3';
// 使用的是ECB模式
export default {
  Encrypt(data) {
    var key = CryptoJS.enc.Utf8.parse(aseKey);
    var ivs = CryptoJS.enc.Utf8.parse(iv);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: ivs,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  Decrypt(data) {
    var key = CryptoJS.enc.Utf8.parse(aseKey);
    var ivs = CryptoJS.enc.Utf8.parse(iv);

    var decrypt = CryptoJS.AES.decrypt(data, key, {
      iv: ivs,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
} 