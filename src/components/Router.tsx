import { useCallback, useState } from 'react';
import RouterContext from '../context/RouterContext';

interface Props {
  children: React.ReactNode;
}

const Router = ({ children }: Props) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setPath(path);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
