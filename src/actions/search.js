export function search(username) {
  return {
    type: 'SEARCH_USER',
    username,
  };
}
