/* eslint-disable no-undef */
import { useReducer } from 'react';

const avaiableActions = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  toggleConsent: 'TOGGLE CONSENT',
};

const reducer = (state, action) => {
  const { inputChange, clearValues, toggleConsent } = avaiableActions;
  switch (action.type) {
    case inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case clearValues:
      return {
        ...action.initialValues,
      };
    case toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      };
    default:
      return state;
  }
};

export const useForm = (initialValues) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const changeInput = (e) => {
    dispatch({
      type: avaiableActions.inputChange,
      field: e.target.id,
      value: e.target.value,
    });
  };

  const clearForm = () => {
    dispatch({
      type: avaiableActions.clearValues,
      initialValues,
    });
  };

  const toggleConsent = () => {
    dispatch({
      type: avaiableActions.toggleConsent,
    });
  };

  return {
    state,
    changeInput,
    clearForm,
    toggleConsent,
  };
};
