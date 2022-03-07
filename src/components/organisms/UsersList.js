import React, { useContext } from 'react';
import UserListItem from 'components/molecules/UserListItem';
import { CardWrapper } from 'components/molecules/CardWrapper.styles';
import { StyledHeading } from 'components/atoms/Heading/Heading.styles';
import { UserContext } from 'providers/UserProvider';

const UsersList = () => {
  const { usersData } = useContext(UserContext);
  return (
    <CardWrapper>
      <StyledHeading color="main" size="xl">
        Students List
      </StyledHeading>
      <ul>
        {usersData.map((user, i) => (
          <UserListItem user={user} key={i} />
        ))}
      </ul>
    </CardWrapper>
  );
};

export default UsersList;
