import axios from 'axios';
export const addUserAPI = async (newUser) => {
  try {
    await axios.post('http://localhost:5000/add-user', newUser);
  } catch (e) {
    return false;
  }
};
