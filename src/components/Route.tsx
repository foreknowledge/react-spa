import { useContext } from 'react';
import RouterContext from '../context/RouterContext';

interface Props {
  path: string;
  component: React.ReactNode;
}

const Route = ({ path, component }: Props) => {
  const { path: currentPath } = useContext(RouterContext);

  if (path === currentPath) {
    return component;
  } else {
    return null;
  }
};

export default Route;
