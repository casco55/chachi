export const InfoCardItem = ({ property = "property", value = "value" }) => {
  return (
    <>
      <div className="d-flex flex-row col-12 justify-content-between my-1">
        <p className="my-auto">{property}</p>
        <p className="text-secondary my-auto">{value}</p>
      </div>
    </>
  );
};
