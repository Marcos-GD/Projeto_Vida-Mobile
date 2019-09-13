export default function userdata(state = [], action) {
  switch (action.type) {
    case 'REQUEST_USER_SUCESSFULL':
      console.log(action.payload.name);
      return {
        data: action.payload,
      };
    case 'REQUEST_FAILED':
      return {message: action.message};
    default:
      return state;
  }
}
