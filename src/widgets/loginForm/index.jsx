import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLogin } from "./hooks/useLogin";
import { IconedInput } from "../../components/inputs/iconedInput";
import { Form } from "../../components/form";
import { Title } from "../../components/title";
import { ColumnsContainer } from "../../components/containers/columnsContainer";
import {
  loginFormErrorsInitialState,
  loginFormInitialState,
} from "./helpers/initialState";

export const LoginForm = ({
  path,
  inputClass,
  FormFooter,
  redirectionPath,
  sessionFn = () => {},
  loginFn = () => {},
  formTitle,
  loginValiator = () => {},
  buttonClass,
  buttonValue,
}) => {
  const {
    formState: loginFormState,
    errors: loginFormErrors,
    handleChange,
    handleSubmit,
  } = useLogin({
    formInitialState: loginFormInitialState,
    errorsInitialState: loginFormErrorsInitialState,
    formValidation: loginValiator,
    path: path,
    redirectionPath: redirectionPath,
    sessionFn: sessionFn,
    loginFn: loginFn,
  });
  const { username, password } = loginFormState;
  const { username: usernameError, password: passwordError } = loginFormErrors;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {formTitle && (
          <Title TagName="h3" text={formTitle} className="mx-auto" />
        )}
        <ColumnsContainer>
          <IconedInput
            inputLabel="Usuario"
            inputId="username"
            inputName="username"
            inputType="text"
            inputValue={username}
            inputPlaceholder="usuario"
            onChange={handleChange}
            inputError={usernameError}
            inputErrorMessage="Campo requerido"
            icon={<FaRegUser size={22} className="text-secondary" />}
            inputClass={inputClass}
          />
          <IconedInput
            inputLabel="Contraseña"
            inputId="password"
            inputName="password"
            inputType="password"
            inputValue={password}
            inputPlaceholder="contraseña"
            onChange={handleChange}
            inputError={passwordError}
            inputErrorMessage="Campo requerido"
            icon={<RiLockPasswordLine size={22} className="text-secondary" />}
            inputClass={inputClass}
          />
        </ColumnsContainer>
        <input type="submit" className={buttonClass} value={buttonValue} />
        {FormFooter && <FormFooter />}
      </Form>
    </>
  );
};
