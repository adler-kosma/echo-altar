import './styles/App.css';
import Link from './components/Link';
import Route from './components/Route';
import About from './pages/About';
import Works from './pages/Works';



export default function App () {
  return (
      <div>
        <h1><Link to="/about">About</Link></h1>
        <h1><Link to="/works">Works</Link></h1>
        <div>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </div>
      </div>
  );
}
