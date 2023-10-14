import './App.css';
import 'bulma/css/bulma.css';
import background from './img/saga01.png'
import ReleaseCard from './components/ReleaseCard';
import UnusuallyLostBitsImage from './img/unusually_lost_bits.jpg'
import VOLVM2Pieces from './img/volvm_2_pieces.jpg'

console.log(UnusuallyLostBitsImage);
console.log(VOLVM2Pieces);

function App() {
  return (
    <div className="img-background" style={{ backgroundImage: `url(${background})`, height: "1000px", backgroundPosition: "right", backgroundRepeat: "no-repeat"}}>
      <div className='echo-altar-header'>Echo & Altar</div>

      <div className='container' style={{top: "100%"}}>
        <section className='section'>
          <div className='columns'>
            <div className='column is-5'>
              <ReleaseCard 
              title={"Unusually Lost Bits"} 
              artist={"Adele Marcia Kosman"} 
              releaseDate={"18-10-2023"}
              description={"A first single."}
              image={UnusuallyLostBitsImage} />
            </div>
            <div className='column is-5'>
              <ReleaseCard 
              title={"VOLVM 2. pieces"} 
              artist={"Adele Marcia Kosman"} 
              releaseDate={"07-12-2023"} 
              description={"The debut album."}
              image={VOLVM2Pieces} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
