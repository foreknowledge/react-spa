import { createContext } from 'react';

type ContextType = {
  path: string;
  changePath: (path: string) => void;
};

const RouterContext = createContext<ContextType>({
  path: '',
  changePath: () => {},
});

export default RouterContext;
