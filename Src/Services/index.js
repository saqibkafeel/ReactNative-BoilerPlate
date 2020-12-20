import ErrorHandler from './Error';
import { BPStorage } from '../LocalStorage/BPStorage';
import { BPServiceManager } from '../Config/BPServiceManager';

const API_ROOT = BPServiceManager.ROOT_URL;

function apiUrl(url) {
  return API_ROOT + url;
}

function jsonToUrlEncode(json) {
  if (Object.keys(json).length === 0) {
    return '';
  }
  return (
    '?' +
    Object.keys(json)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(json[k]))
      .join('&')
  );
}

export async function doFetch(method = 'GET', url, methodOptions = {}) {
  const authToken = await getAuthToken();

  const options = {
    ...methodOptions,
    method,
    headers: {
      ...methodOptions.headers,
      ...authToken,
    },
  };

  console.log('URL', url);
  console.log('URL REQUEST HEADERS', options);

  return filterResponseOrError(url, options);
}
function filterResponseOrError(url, options) {
  let response;
  let request = new Promise(async (resolve, reject) => {
    try {
      /* let controller = new AbortController();
      setTimeout(() => controller.abort(), 5000); 
      response = await fetch(apiUrl(url), options, {signal: controller.signal});*/

      response = await fetch(apiUrl(url), options);

      if (response && response.status) {
        console.log('filterResponseOrError -> response', response.status);
      }

      if (response.status === 500) {
        ErrorHandler.handleError(response.status, null);
        reject({
          error: 'Something Went Wrong',
          statusCode: response.status,
        });
      } else if (response.status === 401) {
        const json = await response.json();
        reject({
          error: json,
          statusCode: response.status,
        });
      } else if (response.status === 412) {
        const resp = await response.json();
        console.log('JSON: ' + JSON.stringify(resp));
        //reject(JSON.stringify(resp));
        resolve({
          response: resp,
          statusCode: response && response.status,
        });
      } else if (
        response.status >= 400 &&
        response.status !== 401 &&
        response.status !== 500
      ) {
        const json = await response.json();
        ErrorHandler.handleError(response.status, json.Body);
        reject({
          error: json.body,
          statusCode: response.status,
        });
      } else {
        const resp = await response.json();
        resolve({
          response: resp,
          statusCode: response.status,
        });
      }
    } catch (error) {
      resolve({
        response: '',
        statusCode: response && response.status,
      });
    }
  }).catch(e => {
    return {
      error: 'connection error',
    };
  });
  return request;
}
async function getAuthToken() {
  var token = await BPStorage.getAccessToken();
  if (token !== null && token !== 'undefined') {
    console.log('INSIDE TOKEN LOGIC IN INDEX FILE', token);
    return {Authorization: `Bearer ` + token};
  }
}

export function post(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  };
  return doFetch('POST', url, options);
}

export function del(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  };
  return doFetch('DELETE', url, options);
}

export function patch(url, json, headers, param = '') {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  };
  return doFetch('PATCH', url + param, options);
}

export function get(url, json = {}, headers = {}) {
  return doFetch('GET', url + jsonToUrlEncode(json), {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

export function put(url, json, headers) {
  const options = {
    body: JSON.stringify(json),
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  };
  return doFetch('PUT', url, options);
}

export function upload(methodOption, url, data, headers) {
  const options = {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
  };
  options.body = new FormData();
  for (let key in data) {
    options.body.append(key, data[key]);
  }
  return doFetch(methodOption, url, options);
}
