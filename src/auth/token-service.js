import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    // Look into storing in cookies or session storage
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(username, pass) {
    return window.btoa(`${username}:${pass}`);
  }
};

export default TokenService;
