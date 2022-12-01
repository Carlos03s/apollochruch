import * as ReactDOM from 'react-dom';
import Rotas from './Routes';
import Cadastro from './cadastros/Cadastro';
import Caixa from './caixa/Caixa'

function render() {
    ReactDOM.render(
      <div>
        {/* <Rotas/> */}
        <Cadastro/>
        {/* <Caixa/> */}
      </div>, document.getElementById('root')!);
  }
  
  render();

