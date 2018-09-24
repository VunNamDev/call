import { getData } from '../asset/data/mobileNumberfinder';

export function checkInList(number) {
  const data = getData();
  for (let i = 0; i < data.length; i++) {
    if (number.slice(0, data[i].mobilenumber.length) == data[i].mobilenumber) {
      const loc = { lat: data[i].lat, lng: data[i].lang };
      return loc;
    }
  }
  return null;
}
