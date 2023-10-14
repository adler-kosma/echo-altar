import './App.css';
import background from './img/saga01.png'

function App() {
  return (
    <div className="img-background" style={{ backgroundImage: `url(${background})`, height: "1000px", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      <div className='echo-altar-header'>Echo & Altar Records</div>
    </div>
  );
}

export default App;
