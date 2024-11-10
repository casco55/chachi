import { Link } from "react-router-dom";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import "./style/style.scss";
export const SideNavBar = ({
  primaryColor = "#00b3ff",
  secondaryColor = "#a5ffff",
}) => {
  return (
    <>
      <div
        className="navigation"
        style={{
          "--secondaryColor": secondaryColor,
          "--primaryColor": primaryColor,
        }}
      >
        <Link
          to="/"
          className="text-decoration-none d-flex flex-row navigation-item py-2"
        >
          <div>
            <span className="navigation-item-icon rounded rounded-circle d-flex justify-content-center align-items-center">
              <TbLayoutNavbarFilled size={24} />
            </span>
          </div>
          <span className="navigation-item-text my-auto ">
            dsfadsfdsdf dsfdsaf
          </span>
        </Link>
        <Link
          to="/"
          className="text-decoration-none d-flex flex-row navigation-item py-2"
        >
          <div>
            <span className="navigation-item-icon rounded rounded-circle d-flex justify-content-center align-items-center">
              <TbLayoutNavbarFilled size={24} />
            </span>
          </div>
          <span className="navigation-item-text my-auto ">
            dsfadsfdsdf dsfdsaf
          </span>
        </Link>
        <Link
          to="/"
          className="text-decoration-none d-flex flex-row navigation-item py-2"
        >
          <div>
            <span className="navigation-item-icon rounded rounded-circle d-flex justify-content-center align-items-center">
              <TbLayoutNavbarFilled size={24} />
            </span>
          </div>
          <span className="navigation-item-text my-auto ">
            dsfadsfdsdf dsfdsaf
          </span>
        </Link>
      </div>
    </>
  );
};
