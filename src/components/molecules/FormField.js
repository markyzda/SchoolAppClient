import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormField = ({ name, id, value, type = 'text', onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{name}</Label>
      <Input id={id} name={name} value={value} type={type} onChange={onChange} />
    </Wrapper>
  );
};

export default FormField;
