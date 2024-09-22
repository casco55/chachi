import { SidebarItem } from "../item";

export const SidebarItemContainer = ({
  title,
  path,
  currentPath,
  subItems,
  itemClassName,
}) => {
  return (
    <>
      <li>
        <SidebarItem
          title={title}
          path={path}
          currentPath={currentPath}
          subItemsLength={subItems.length}
          isSubItem={false}
          itemClassName={itemClassName}
        />
        {subItems && subItems.length > 0 && (
          <>
            <ul className="list-unstyled d-flex flex-column shadow-inset-y py-2">
              {subItems.map(({ title, path }, index) => (
                <li key={index}>
                  <SidebarItem
                    title={title}
                    path={path}
                    currentPath={currentPath}
                    subItemsLength={0}
                    isSubItem={true}
                    itemClassName={itemClassName}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </li>
    </>
  );
};
