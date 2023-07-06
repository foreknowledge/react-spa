import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router';
import Route from './components/Route';
import Root from './pages/Root';
import About from './pages/About';

const container = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
