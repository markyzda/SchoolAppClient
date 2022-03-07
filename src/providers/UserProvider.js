import React, { useEffect } from 'react';
import { useState } from 'react';
import { users } from '../data/users';
import { getUsersAPI } from 'api/users/getUsersAPI';
import { addUserAPI } from 'api/users/addUserAPI';
import { deleteUserAPI } from 'api/users/deleteUserAPI';

export const UserContext = React.createContext({
  users: '',
  handleDeleteUser: () => {},
  handleAddUser: () => {},
});

const UserProvider = ({ children }) => {
  const [usersData, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const users = await getUsersAPI();
      setUsers(users);
    } catch (e) {
      setUsers(users);
    }
  };
  const addUser = async (newUser) => {
    try {
      await addUserAPI(newUser);
      await getUsers();
    } catch (e) {
      console.log(e, 'something went wrong');
    }
  };
  const deleteUser = async (userId) => {
    try {
      await deleteUserAPI(userId);
      await getUsers();
    } catch (e) {
      console.log(e, 'something went wrong');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = (user_ID) => {
    deleteUser(user_ID);
  };
  const handleAddUser = (user) => {
    addUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        usersData,
        handleDeleteUser,
        handleAddUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
