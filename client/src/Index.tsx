import * as ReactDOM from 'react-dom';
import Rotas from './Routes';
import Cadastro from './cadastros/Cadastro';

function render() {
    ReactDOM.render(
      <div>
        {/* <Rotas/> */}
        <Cadastro/>
      </div>, document.getElementById('root')!);
  }
  
  render();

  