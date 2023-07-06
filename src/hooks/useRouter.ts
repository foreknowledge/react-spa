import { useCallback, useContext } from 'react';
import RouterContext from '../context/RouterContext';

const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);

  const push = useCallback(
    (nextPath: string) => {
      if (path === nextPath) return;
      changePath(nextPath);
    },
    [path, changePath]
  );

  return { push };
};

export default useRouter;
