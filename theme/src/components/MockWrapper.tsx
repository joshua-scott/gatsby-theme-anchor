import React, { createContext } from 'react';
import * as mocks from '../mocks/Components';

interface ContextInterface {
  mocked: boolean;
  mocks?: any;
}

export const AppContext = createContext<ContextInterface>({ mocked: false });

const MockWrapper = ({ mocked, children }) => {
  const value = {
    mocked,
    mocks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MockWrapper;
