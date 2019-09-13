import actions from './actions';

export function search(username) {
  return {
    type: actions.SEARCH_USER,
    username,
  };
}
