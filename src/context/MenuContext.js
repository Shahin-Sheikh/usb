import { createContext, useContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';

export const MenuCollapseContext = createContext(undefined);

export const CollapsedMenu = ({ children }) => {
  const { collapsed, collapseSidebar } = useProSidebar();

  const value = { collapsed, collapseSidebar };
  return (
    <MenuCollapseContext.Provider value={value}>
      {children}
    </MenuCollapseContext.Provider>
  );
};

export const useMenuCollapse = () => useContext(MenuCollapseContext);
