import axios from 'axios';
export const getUsersAPI = async () => {
  try {
    const { data } = await axios.get('http://localhost:5000/users');
    return data;
  } catch (e) {
    return false;
  }
};
