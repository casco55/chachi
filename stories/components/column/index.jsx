export const Column = ({
  xl = 12,
  lg = 12,
  md = 12,
  sm = 12,
  xs = 12,
  extraClass = "",
  children,
}) => {
  return (
    <div
      className={`col-xl-${xl} col-lg-${lg} col-md-${md} col-sm-${sm} col-${xs} d-flex flex-column ${extraClass}`}
    >
      {children}
    </div>
  );
};
