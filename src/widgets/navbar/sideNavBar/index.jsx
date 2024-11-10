import { Link } from "react-router-dom";
import { TbLayoutNavbarFilled } from "react-icons/tb";
import "./style/style.scss";
export const SideNavBar = () => {
  return (
    <>
      <div className="navigation">
        <Link
          to="/"
          className="text-decoration-none text-dark d-flex flex-row navigation-item mb-2"
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
          className="text-decoration-none text-dark d-flex flex-row navigation-item"
        >
          <div>
            <span className="navigation-item-icon rounded rounded-circle d-flex justify-content-center align-items-center">
              <TbLayoutNavbarFilled size={24} />
            </span>
          </div>
          <span className="navigation-item-text my-auto pe-2">
            dsfadsfdsdf dsfdsaf
          </span>
        </Link>
      </div>
    </>
  );
};
