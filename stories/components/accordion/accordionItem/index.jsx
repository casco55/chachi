import { useState } from "react";
import "../accordion.scss";
import { MdKeyboardArrowUp } from "react-icons/md";

export const AccordionItem = ({
  itemTitle = "Accordion Item #1",
  itemContent = (
    <>
      <strong>This is the second item's accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we
      use to style each element. These classes control the overall appearance,
      as well as the showing and hiding via CSS transitions. You can modify any
      of this with custom CSS or overriding our default variables. It's also
      worth noting that just about any HTML can go within the{" "}
      <code>.accordion-body</code>, though the transition does limit overflow.
    </>
  ),
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => setIsCollapsed(!isCollapsed);

  return (
    <>
      <div className="d-flex flex-column border border-1 col-12">
        <button
          onClick={handleClick}
          className={`d-flex flex-row justify-content-between align-items-center px-3 bg-${
            isCollapsed ? "white" : "gray"
          } border-0`}
        >
          <h2 className="">{itemTitle}</h2>
          <MdKeyboardArrowUp
            size={24}
            className={`arrow-icon ${!isCollapsed && "rotate-180"}`}
          />
        </button>

        <div className={``}>
          <div className="">{itemContent}</div>
        </div>
      </div>
    </>
  );
};
