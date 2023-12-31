import { ReactComponentElement, ReactNode, useContext } from 'react';
import RouterContext from '../context/RouterContext';
import Route from './Route';

interface Props {
  children: ReactComponentElement<typeof Route>[];
}

const Routes = ({ children }: Props) => {
  const { path } = useContext(RouterContext);

  let component: ReactNode = <h1>404 Not Found</h1>;

  for (const route of children) {
    if (route.props.path === path) {
      component = route.props.component;
      break;
    }
  }

  return component;
};

export default Routes;
