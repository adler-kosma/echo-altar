import './styles/App.css';
import Route from './components/Route';
import Menu from './components/Menu';
import About from './pages/About';
import Installations from './pages/Installations';
import Sounds from './pages/Sounds';
import Releases from './pages/Releases';
import background from './img/collage-orgel-shoe.png';
import Contact from './pages/Contact'



export default function App () {
  return (
      <div className="img-background" style={{ backgroundImage: `url(${background})`, height: "653px"}}>
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
          <Route path="/contact">
            <Contact />
          </Route>
        </div>
      </div>
  );
}
