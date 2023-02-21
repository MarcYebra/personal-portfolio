import './Main.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = ( ) => {
  return (
    <div>
      <div className="'background-color">
      <h1>Marc Yebra</h1>

      < Portfolio />
      < AboutMe />
      < Contact />
      </div>
    </div>
  );
}

export default App;
