import { Link } from "react-router-dom";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import "./style/style.scss";
export const SideNavBar = () => {
  return (
    <>
      <div className="navigation ">
        <div>
          <Link to="/" className="text-white d-flex col-12">
            <div>
              <TbLayoutNavbarFilled size={36} />
            </div>
            <span className="title">Home</span>
          </Link>
        </div>
        <Link to="/" className="text-white d-flex col-12">
          <div>
            <TbLayoutNavbarFilled size={36} />
          </div>
          <span className="title">about</span>
        </Link>
        <div>
          <Link
            to="/"
            className="text-decoration-none text-white d-flex col-12"
          >
            <div>
              <TbLayoutNavbarFilled size={36} />
            </div>{" "}
            <span className="title">contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};
