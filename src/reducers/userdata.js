export default function userdata(state = [], action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return {username: action.username};
    default:
      return state;
  }
}
