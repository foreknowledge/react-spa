import { useCallback, useEffect, useState } from 'react';
import RouterContext from '../context/RouterContext';

interface Props {
  children: React.ReactNode;
}

const Router = ({ children }: Props) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback((path: string) => {
    window.history.pushState({ path }, '', path);
    setPath(path);
  }, []);

  useEffect(() => {
    const popStateHandler = (e: PopStateEvent) => {
      setPath(e.state.path);
    };

    window.addEventListener('popstate', popStateHandler);

    return () => window.removeEventListener('popstate', popStateHandler);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
