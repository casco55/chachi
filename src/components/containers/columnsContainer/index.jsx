export const ColumnsContainer = ({
  children,
  cols = 1,
  mdCols = 1,
  lgCols = 1,
}) => {
  return (
    <div
      className={`row row-cols-${cols} row-cols-md-${mdCols} row-cols-lg-${lgCols} g-0 col-12 mt-4`}
    >
      {children}
    </div>
  );
};
