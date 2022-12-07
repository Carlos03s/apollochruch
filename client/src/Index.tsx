import * as ReactDOM from 'react-dom';
import Rotas from './Routes';
import Cadastro from './cadastros/Cadastro';
import Caixa from './caixa/Caixa'
import HeaderContent from './Components/Header/HeaderContent';
import Pagamentos from './pagamento/Pagamentos'
import { Provider } from 'react-redux'
import { store} from './store/Store'
import Cadastrados from './Cadastrados/Cadastrados'

import { BrowserRouter } from 'react-router-dom';
function render() {
    ReactDOM.render(
      
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
        <BrowserRouter>
        <Provider store={store}>
        <HeaderContent/>
        <Rotas/>
      </Provider>
        </BrowserRouter>
      </div>, document.getElementById('root')!);
  }
  
  render();

//