import Config from '../config/env';
import Promise from 'bluebird';
import Crypto from '../libs/Crypto';

export const verifyCode = response => {
  return new Promise((resolve, reject) => {
    const code = response.code ? response.code : Config.code.CODE_ERR;

    if (code == Config.code.CODE_OK || code == Config.code.CODE_OK_ERR || code == Config.code.CODE_OK_WITH_MESS) {
      return resolve(JSON.parse(Crypto.decryptData(response.data)));
    } else {
      return reject(new Error('Authentication error'));
    }
  });
};
