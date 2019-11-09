import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    // Look into storing in cookies
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(username, pass) {
    return window.btoa(`${username}:${pass}`);
  }
};

export default TokenService;
