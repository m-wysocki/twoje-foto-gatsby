import React, { useState } from 'react';

const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const defaultSidebarInfo = {
    header: '',
    date: '',
    paragraph: '',
  };

  const [currentSidebarInfo, setSidebarInfo] = useState(defaultSidebarInfo);

  const saveSidebar = values => {
    setSidebarInfo(values);
  };

  return (
    <SidebarContext.Provider value={{ sidebar: currentSidebarInfo, saveSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
