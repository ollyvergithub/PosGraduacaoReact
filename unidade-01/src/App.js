import './App.css';
import {MainRender} from "./MainRender";
import {MainRenderClass} from "./MainRenderClass";

function App() {
  return (
    <div className="App">
{/*      <MainRender
          mensagem = "Olá Unidade 01"
      />*/}

        <MainRenderClass
            mensagem = "Olá Unidade 01- Class Component"
        />

    </div>
  );
}

export default App;
