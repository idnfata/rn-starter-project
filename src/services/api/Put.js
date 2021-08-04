import axios from 'axios';
import {Auth, HR, Asset} from './resourceURL';

/*
    ini adalah fungsi untuk menangani request PUT API
    ketika request berhasil resolve dijalankan
    ketika request gagal reject dijalankan
*/
const Put = (url, path, data, token) => {
  if (token) {
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    const promise = new Promise((resolve, reject) => {
      axios
        .put(
          `${
            url === 'auth'
              ? Auth
              : url === 'hr'
              ? HR
              : url === 'asset'
              ? Asset
              : null
          }/${path}`,
          data,
          config,
        )
        .then(
          result => {
            resolve(result);
          },
          err => {
            reject(err);
          },
        );
    });
    return promise;
  } else {
    const promise = new Promise((resolve, reject) => {
      axios
        .put(
          `${
            url === 'auth'
              ? Auth
              : url === 'hr'
              ? HR
              : url === 'asset'
              ? Asset
              : null
          }/${path}`,
          data,
        )
        .then(
          result => {
            resolve(result);
          },
          err => {
            reject(err);
          },
        );
    });

    return promise;
  }
};

export default Put;
