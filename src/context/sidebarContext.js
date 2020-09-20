import React from 'react';

const SidebarContext = React.createContext({
  header: false,
  date: false,
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos dolores excepturi in magnam magni maiores odio similique veniam voluptatum.',
});

export default SidebarContext;