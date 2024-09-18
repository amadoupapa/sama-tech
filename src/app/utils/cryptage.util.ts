import * as CryptoJS from 'crypto-js';
export class MyEncryption {
   private static key = "encrypt!135790";

    static encrypt(data:string):string{
    return CryptoJS.AES.encrypt(data,this.key).toString()
   }

  static decrypt(data:string):string{
    return CryptoJS.AES.decrypt(data,this.key).toString(CryptoJS.enc.Utf8)
   }


}