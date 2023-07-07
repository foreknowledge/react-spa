import { useContext } from 'react';
import RouterContext from '../context/RouterContext';

const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);

  const push = (nextPath: string) => {
    if (path === nextPath) return;
    changePath(nextPath);
  };

  return { push };
};

export default useRouter;
