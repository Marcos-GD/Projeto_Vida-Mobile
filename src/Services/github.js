import api from './Api';

export default FindUser = async username => {
  console.log('procurando na api');
  console.log(username);
  const userdata = await api.get(`/${username}`);
  console.log('achado');
  console.log(userdata.data);
  return userdata.data;
};
