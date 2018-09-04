import Promise from 'bluebird';
import Config from '../config/env';
import Alamofire from '../libs/Alamofire';
import { verifyCode } from './Middleware';
import { unixTime } from '../utils/TimeUtils';
import Crypto from '../libs/Crypto';

export const Search = (countryCode, q) => {
  return new Promise((resolve, reject) => {
    const path =
      Config.api.path.base.search +
      '/5b51b61c915c2901c38a03ef' +
      '?time=' +
      unixTime() +
      '&countryCode=' +
      countryCode +
      '&q=' +
      encodeURI(q);
    const hash = Crypto.sha256(path);
    const url = Config.api.host.base + path;

    return Alamofire.request(url, 'GET', {}, { Authorization: 'Bearer ' + hash })
      .then(response => {
        console.log(response);
        verifyCode(response)
          .then(res => resolve(res))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });
};
export const getCountryCode = () => {
  return new Promise((resolve, reject) => {
    const url = `http://ip-api.com/json`;

    return Alamofire.request(url, 'GET', {})
      .then(response => {
        resolve(response);
      })
      .catch(err => reject(err));
  });
};
