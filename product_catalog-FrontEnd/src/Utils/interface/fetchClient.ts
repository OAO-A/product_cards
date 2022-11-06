import { Phone } from './PhoneCard';

const BASE_URL = 'https://product-catalog-nice.herokuapp.com/api/';

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string, method = 'GET', data: any = null): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

const client = {
  get: (url: string) => request<Phone[] | Phone>(url),
};

export const getDevices = () => {
  return client.get('/device');
};

export const getDevice = (id: number) => {
  return client.get(`/device/${id}`);
};
