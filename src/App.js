import './App.css';
import Header from './components/header/Header';
import Section_7 from './components/footer/Section-7';
import Section_4 from './components/main/Section-4';
import Content from './components/main/Content';
import Section_4_1 from './components/main/Section-4-1';

function App() {
  return (
    <div className="App">
      < Header />
      < Section_4 />
      < Section_4_1 />
      < Content />
      < Section_7 />
    </div>
  );
}

export default App;
