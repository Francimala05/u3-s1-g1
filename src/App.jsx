//zona di importazione
import logo from './logo.svg'; //logo
import './App.css';  //carica css globale
import Header from '../components/header';
import ButtonComponent from '../components/ButtonComponent';
import ImageComponent from '../components/ImageComponent';

//tutto quello che verrà creato qui dentro sarà renderizato
function App() {
  return (
    <div className="App">
    <Header logo={logo} style={{ backgroundColor: "coral" }} className="border-md p-5 shadow mb-5" />
   <ButtonComponent text="Cliccami!"/>
<ImageComponent 
src="https://www.wandery.it/img/sample-image.jpg"
alt="Immagine da illusione"
/>
    </div>
  );
}

export default App;
