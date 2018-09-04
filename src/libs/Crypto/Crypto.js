import Config from '../../config/env';
import Crypto from 'crypto-js';

export const sha256 = clearText => {
  const secretKey = Config.secret.session;
  return Crypto.HmacSHA256(clearText, secretKey).toString();
};

export const encryptData = data => {
  const secretKey = Config.secret.data;
  return Crypto.AES.encrypt(data, secretKey).toString();
};

export const decryptData = data => {
  const secretKey = Config.secret.data;
  return Crypto.AES.decrypt(data, secretKey).toString(Crypto.enc.Utf8);
};
