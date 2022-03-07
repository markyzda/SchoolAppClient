import React from 'react';
import { CardWrapper } from 'components/molecules/CardWrapper.styles';
import { StyledHeading } from 'components/atoms/Heading/Heading.styles';
import FormField from 'components/molecules/FormField';
import { SubmitButton } from 'components/atoms/SubmitButton/SubmitButton';
import { useForm } from 'hooks/UseForm';
import { useContext } from 'react';
import { UserContext } from 'providers/UserProvider';

const initialValues = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
};

const AddUserForm = () => {
  const { state, changeInput, clearForm, toggleConsent } = useForm(initialValues);
  const { handleAddUser } = useContext(UserContext);
  const AddUser = (e) => {
    const { name, attendance, average } = state;
    e.preventDefault();
    handleAddUser({
      name,
      attendance,
      average,
    });
    clearForm();
  };
  return (
    <CardWrapper as="form" onSubmit={AddUser}>
      <StyledHeading size="xl" color="main">
        Add User
      </StyledHeading>
      <FormField name="name" id="name" label="Name" value={state.name} onChange={changeInput} />
      <FormField name="attendance" id="attendance" label="Attendance" value={state.attendance} onChange={changeInput} />
      <FormField name="average" id="average" label="Average" value={state.average} onChange={changeInput} />
      <FormField name="consent" id="consent" label="Consent" checked={state.toggleConsent} type="checkbox" onChange={toggleConsent} />
      <SubmitButton type="submit">Add User</SubmitButton>
    </CardWrapper>
  );
};

export default AddUserForm;
