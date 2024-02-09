import { AiOutlineLogin } from "react-icons/ai";

import "./loginForm.scss";

export const LoginForm = ({
  cols = 12,
  userLabel = "User Name",
  passwordLabel = "Password",
  onSubmit = (e) => {
    console.log("onsubmit", e);
    e.preventDefault();
  },
}) => {
  return (
    <form
      className={`d-flex flex-column col-${cols} font--family--openSans`}
      onSubmit={onSubmit}
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <AiOutlineLogin size={48} />
        <h1 className="mt-3">Login</h1>
      </div>
      <div className="d-flex flex-column mt-3 mb-4">
        <div className="d-flex flex-column">
          <label htmlFor="username" className="label">
            {userLabel}
          </label>
          <input
            type="text"
            id="username"
            className="input"
            aria-label="Username"
            aria-required="true"
          />
        </div>

        <div className="separator" />
        <div className="d-flex flex-column">
          <label htmlFor="password" className="label">
            {passwordLabel}
          </label>
          <input
            type="password"
            id="password"
            className="input"
            aria-label="Password"
            aria-required="true"
          />
        </div>
      </div>

      <div className="separator" />
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
      <div className="forgot-password">
        <a href="#" className="link">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};
