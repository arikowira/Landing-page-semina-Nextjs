import axios from '../configs';
import Cookies from 'js-cookie';

export async function getData(url, params, token) {
  return await axios.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload, token) {
  return await axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function putData(url, payload, token) {
  return await axios.put(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
