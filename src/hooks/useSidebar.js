import { useContext, useEffect } from 'react';
import SidebarContext from '../context/sidebarContext';

export default sidebarInfo => {
  const context = useContext(SidebarContext);
  const { saveSidebar } = context;

  useEffect(() => {
    saveSidebar(sidebarInfo);
  }, []);
};
