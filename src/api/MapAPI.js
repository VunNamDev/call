import Promise from 'bluebird';

import Alamofire from '../libs/Alamofire';

// export const randomLocation = location => {
//   return new Promise((resolve, reject) => {
//     const url =
//       'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
//       location.lat +
//       ',' +
//       location.lng +
//       '&radius=10000&key=AIzaSyCYLQqvp2JWF9wofBJbQ_NfJLBZerNM3yA';
//     console.log(url);
//     return Alamofire.request(url, 'GET', {})
//       .then(response => {
//         let idx = 0;
//         idx = Math.floor(Math.random() * response.results.length);
//         console.log(response);
//         resolve(response.results[idx].geometry.location);
//       })
//       .catch(err => reject(err));
//   });
// };
export const randomLocation = location => {
  return new Promise((resolve, reject) => {
    const url =
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
      location.lat +
      ',' +
      location.lng +
      '&radius=5000&key=AIzaSyCYLQqvp2JWF9wofBJbQ_NfJLBZerNM3yA';

    return Alamofire.request(url, 'GET', {})
      .then(response => {
        let idx = 0;
        idx = Math.floor(Math.random() * (response.results.length - 1));
        console.log(url, idx);
        resolve(response.results[idx].geometry.location);
      })
      .catch(err => reject(err));
  });
};
