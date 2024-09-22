import { SidebarItemContainer } from "./components/itemContainer";
import { SidebarItemsContainer } from "./components/itemsContainer";
import "./style/styles.scss";
export const SidebarMenu = ({
  currentPath,
  itemList = [],
  itemClassName = "sidebar-item",
}) => {
  return (
    <>
      <div className="col-12 d-flex flex-column">
        <SidebarItemsContainer>
          {itemList.length > 0 &&
            itemList.map(({ title, path, subItems }, index) => (
              <SidebarItemContainer
                key={index}
                title={title}
                path={path}
                currentPath={currentPath}
                subItems={subItems}
                itemClassName={itemClassName}
              />
            ))}
        </SidebarItemsContainer>
      </div>
    </>
  );
};
