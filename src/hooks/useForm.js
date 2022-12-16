import React, { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const [formValidation, setFormValidation] = useState({})

  useEffect(() => {
    createValidators();
  }, [formState])
  

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {

    const formCheckedValues = {}

    for (const formField of Object.keys(formValidations)) {
     const [fn, errorMessage] = formValidations[formField];

     formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage

      setFormValidation(formCheckedValues)

    }


  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return { ...formState, formState, onInputChange, onResetForm, ...formValidation  };
};