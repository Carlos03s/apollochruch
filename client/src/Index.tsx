import * as ReactDOM from 'react-dom';
import Rotas from './Routes';
import Cadastro from './cadastros/Cadastro';
import Caixa from './caixa/Caixa';
import Donors_and_collaborators from './donors_and_collaborators/Donors_and_collaborators';

function render() {
    ReactDOM.render(
      <div>
        {/* <Rotas/> */}
        <Cadastro/>
        <Caixa/>
        <Donors_and_collaborators/>
      </div>, document.getElementById('root')!);
  }
  
  render();

