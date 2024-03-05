export const Label = ({
  label = "label",
  fontWeight = "normal",
  fontSize = "6",
  className = "",
}) => {
  return (
    <label className={`fw-${fontWeight} fs-${fontSize} ${className}`}>
      {label}
    </label>
  );
};
