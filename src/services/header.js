import { store } from '../state';

export function authHeader() {
  const { auth } = store.getState();

  if (auth.tokens && auth.tokens.access) {
    return { Authorization: `Bearer ${auth.tokens.access.token}` };
  } else {
    return {};
  }
}
