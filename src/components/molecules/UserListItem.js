import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { userType } from 'types/Usertype';
import { Wrapper } from './UsersListItem.styles';
import { AverageContainer } from 'components/atoms/AverageContainer/AverageContainer';
import { StyledHeading } from 'components/atoms/Heading/Heading.styles';
import { DeleteButtonStyled } from 'components/atoms/DeleteButton/DeleteButton.styles';
import { UserContext } from 'providers/UserProvider';

const UserListItem = ({ user }) => {
  const { handleDeleteUser } = useContext(UserContext);
  return (
    <Wrapper key={user.name}>
      <AverageContainer average={parseFloat(user.average)}>{user.average}</AverageContainer>
      <div className="user_info">
        <StyledHeading size="s" color="main">
          {user.name}
        </StyledHeading>
        <p>attendance: {user.attendance}</p>
      </div>
      <DeleteButtonStyled
        onClick={() => {
          handleDeleteUser(user._id);
        }}
      >
        X
      </DeleteButtonStyled>
    </Wrapper>
  );
};

UserListItem.propTypes = {
  user: PropTypes.shape(userType),
};

export default UserListItem;
