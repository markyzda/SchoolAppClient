import axios from 'axios';
export const deleteUserAPI = async (userId) => {
  try {
    await axios.delete('http://localhost:5000/delete-user', { data: { userId } });
  } catch (e) {
    return false;
  }
};
