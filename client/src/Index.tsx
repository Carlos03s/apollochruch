import * as ReactDOM from 'react-dom';
import Rotas from './Routes';
import Cadastro from './cadastros/Cadastro';
import Caixa from './caixa/Caixa'
import iframe from 'react-frame';
import { HTMLAttributes } from 'react';

interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
  allow?: string;
  allowFullScreen?: boolean;
  allowTransparency?: boolean;
  frameBorder?: number | string;
  height?: number | string;
  marginHeight?: number;
  marginWidth?: number;
  name?: string;
  sandbox?: string;
  scrolling?: string;
  seamless?: boolean;
  src?: string;
  srcDoc?: string;
  width?: number | string;
}

function render() {
    ReactDOM.render(
      <div>
        {/* <Rotas/> */}
        {/* <Cadastro/> */}

        {/* "devContentSecurityPolicy": "default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;", */}


        {/* <Caixa/> */}
      </div>, document.getElementById('root')!);
  }
  
  render();

