export const Form = ({ children, onSubmit }) => {
  return (
    <form className="col-12 d-flex flex-column" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
