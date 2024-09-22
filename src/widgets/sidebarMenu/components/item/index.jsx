import { Link } from "react-router-dom";

export const SidebarItem = ({
  title,
  path,
  currentPath,
  isSubItem,
  itemClassName,
}) => {
  return (
    <>
      <div className={`col-12 d-flex flex-row align-items-center`}>
        <Link
          to={path}
          className={`text-decoration-none ${itemClassName}${
            path === currentPath ? "-active" : ""
          } ${isSubItem ? "ps-3 " : "ps-2"} py-2 w-100 `}
        >
          {title}
        </Link>
      </div>
    </>
  );
};
