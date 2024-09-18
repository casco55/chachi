import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = ({
  formInitialState = {},
  errorsInitialState = {},
  formValidation = () => {},
  path = "",
  redirectionPath = "",
  sessionFn = () => {},
  loginFn = () => {},
}) => {
  const [formState, setFormState] = useState(formInitialState);
  const [errors, setErrors] = useState(errorsInitialState);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidation = formValidation({
      state: formState,
      setErrors,
      errors,
      navigate,
    });
    if (!errorsValidation) return;

    loginFn({
      data: formState,
      path: path,
      redirectionPath: redirectionPath,
      sessionFn,
      navigate,
    });
  };
  return {
    formState,
    errors,
    handleChange,
    handleSubmit,
  };
};
