import "./serviceCard.scss";

export const ServiceCard = ({
  loading = "lazy",
  src = "https://cdn.builder.io/api/v1/image/assets/TEMP/27f7960d49b932e6be13961bf86c88f9b33696a1c79ff559237be6acf4fbe198?apiKey=67d9f525728b4af68318e851ee73459b",
  alt = "Description of the image",
  title = "web development",
  description = "blog, e-commerce",
  extraClass = "",
  extraImgClass = "",
}) => {
  return (
    <div
      className={`d-flex flex-column p-3 border rounded col-lg-2 col-md-3 col-sm-4 col-xs-6 ${extraClass}`}
    >
      <img
        loading={loading}
        src={src}
        alt={alt}
        className={`mx-auto col-4 img-service ${extraImgClass}`}
      />
      <h6 className="mx-auto mt-3">{title}</h6>
      <p className="mx-auto mt-3">{description}</p>
    </div>
  );
};
