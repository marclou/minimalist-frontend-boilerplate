export function authHeader() {
  const tokens = JSON.parse(localStorage.getItem('tokens'));

  if (tokens && tokens.accessToken) {
    return { 'x-access-token': tokens.accessToken.token };
  } else {
    return {};
  }
}
