import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
const SECRET_KEY = 'secret';
@Injectable()
export class encryptionClass {
constructor() { }
// Encrypt the localstorage data
 encrypt(data) {
    data = CryptoJS.AES.encrypt(data, SECRET_KEY);
    data = data.toString();
    return data;
}
// Decrypt the encrypted data
 decrypt(data) {
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    data = data.toString(CryptoJS.enc.Utf8);
    return data;
}
}
