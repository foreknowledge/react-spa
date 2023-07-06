import ReactDOM from 'react-dom/client';
import Route from './components/Route';
import Router from './components/Router';
import Routes from './components/Routes';
import './index.css';
import About from './pages/About';
import Root from './pages/Root';

const container = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(container).render(
  <Router>
    <Routes>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Routes>
  </Router>
);
