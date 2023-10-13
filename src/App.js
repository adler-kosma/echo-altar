import './styles/App.css';
import Route from './components/Route';
import Menu from './components/Menu';
import About from './pages/About';
import Installations from './pages/Installations';
import Sounds from './pages/Sounds';
import Releases from './pages/Releases';



export default function App () {
  return (
      <div>
        <Menu />
        <div>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/installations">
            <Installations />
          </Route>
          <Route path="/sounds">
            <Sounds />
          </Route>
          <Route path="/releases">
            <Releases />
          </Route>
        </div>
      </div>
  );
}
