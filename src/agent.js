import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000';

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(res => res.body),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(res => res.body),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(res => res.body),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(res => res.body),
};

const Auth = {
  login: (email, password) => {
    console.log('email:', email);
    console.log('password:', password);
    return requests.post('/auth/login', { email, password })
  }
};


export default {
  Auth,
  setToken: _token => { token = _token }
}
