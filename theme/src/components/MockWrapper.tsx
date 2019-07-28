import React, { createContext } from 'react';
import footer from '../mocks/footer';
import header from '../mocks/header';

interface ContextInterface {
  mocked: boolean;
  mocks?: any;
}

export const AppContext = createContext<ContextInterface>({ mocked: false });

const MockWrapper = ({ mocked, children }) => {
  const value = {
    mocked,
    mocks: {
      footer,
      header,
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MockWrapper;
