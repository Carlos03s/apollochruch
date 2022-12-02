import * as React from "react";
import { MainContainer } from "./container/CaixaContent";

export default function Caixa() {
return (
<MainContainer>
  <div className="tables">
    <div className="table_container summary_wallet_table">
      <div className="head">
        <p>Caixa resumido</p>
        <select name="test" id="test">
          <option value="day"> Últimos 1 dias</option>
          <option value="week" selected>
            Últimos 7 dias
          </option>
          <option value="month"> Últimos 30 dias</option>
        </select>
      </div>
      <table>
        {/* ----- EXAMPLE TABLE DATA ----- */}
        <tr>
          <td>
            <p>Doação</p>
          </td>
          <td>
            <p class="positive_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="positive_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M24,18.1c-0.1,0-0.3,0-0.4-0.1l-3.3-3.3c-0.2-0.2-0.5-0.2-0.7,0l-3.3,3.3c-0.2,0.2-0.5,0.2-0.7,0      s-0.2-0.5,0-0.7l3.3-3.3c0.6-0.6,1.5-0.6,2.1,0l3.3,3.3c0.2,0.2,0.2,0.5,0,0.7C24.3,18,24.1,18.1,24,18.1z" />
              <path
                d="M20,27.1c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,26.8,20.3,27.1,20,27.1z" />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <p>Doação</p>
          </td>
          <td>
            <p class="negative_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="negative_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M20,26.5c-0.4,0-0.8-0.1-1.1-0.4l-3.3-3.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l3.3,3.3      c0.2,0.2,0.5,0.2,0.7,0l3.3-3.3c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-3.3,3.3C20.8,26.4,20.4,26.5,20,26.5z" />
              <path
                d="M20,25.9c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,25.7,20.3,25.9,20,25.9z" />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <p>Doação</p>
          </td>
          <td>
            <p class="negative_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="negative_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M20,26.5c-0.4,0-0.8-0.1-1.1-0.4l-3.3-3.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l3.3,3.3      c0.2,0.2,0.5,0.2,0.7,0l3.3-3.3c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-3.3,3.3C20.8,26.4,20.4,26.5,20,26.5z" />
              <path
                d="M20,25.9c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,25.7,20.3,25.9,20,25.9z" />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <p>Doação</p>
          </td>
          <td>
            <p class="positive_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="positive_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M24,18.1c-0.1,0-0.3,0-0.4-0.1l-3.3-3.3c-0.2-0.2-0.5-0.2-0.7,0l-3.3,3.3c-0.2,0.2-0.5,0.2-0.7,0      s-0.2-0.5,0-0.7l3.3-3.3c0.6-0.6,1.5-0.6,2.1,0l3.3,3.3c0.2,0.2,0.2,0.5,0,0.7C24.3,18,24.1,18.1,24,18.1z" />
              <path
                d="M20,27.1c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,26.8,20.3,27.1,20,27.1z" />
            </svg>
          </td>
        </tr>
      </table>
      <button className="add_button" id="add_wallet_change"> <span>+</span> Adicionar novo caixa</button>
    </div>
    <div className="table_container detailed_table">
      <div className="head">
        <p>Caixa detalhado</p>
        <select name="test" id="test">
          <option value="day"> Últimos 1 dias</option>
          <option value="week" selected>
            Últimos 7 dias
          </option>
          <option value="month"> Últimos 30 dias</option>
        </select>
      </div>
      <table>
        {/* ----- EXAMPLE TABLE DATA ----- */}
        <tr>
          <td>
            <p>Nome e sobrenome</p>
          </td>
          <td>
            <p>Descrição</p>
          </td>
          <td>
            <p class="positive_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="positive_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M24,18.1c-0.1,0-0.3,0-0.4-0.1l-3.3-3.3c-0.2-0.2-0.5-0.2-0.7,0l-3.3,3.3c-0.2,0.2-0.5,0.2-0.7,0      s-0.2-0.5,0-0.7l3.3-3.3c0.6-0.6,1.5-0.6,2.1,0l3.3,3.3c0.2,0.2,0.2,0.5,0,0.7C24.3,18,24.1,18.1,24,18.1z" />
              <path
                d="M20,27.1c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,26.8,20.3,27.1,20,27.1z" />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <p>Nome e sobrenome</p>
          </td>
          <td>
            <p>Descrição</p>
          </td>
          <td>
            <p class="negative_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="negative_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M20,26.5c-0.4,0-0.8-0.1-1.1-0.4l-3.3-3.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l3.3,3.3      c0.2,0.2,0.5,0.2,0.7,0l3.3-3.3c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-3.3,3.3C20.8,26.4,20.4,26.5,20,26.5z" />
              <path
                d="M20,25.9c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,25.7,20.3,25.9,20,25.9z" />
            </svg>
          </td>
        </tr>
        <tr>
          <td>
            <p>Nome e sobrenome</p>
          </td>
          <td>
            <p>Descrição</p>
          </td>
          <td>
            <p class="positive_value">R$ 100,00</p>
          </td>
          <td>
            <p>13:30</p>
          </td>
          <td>
            <svg class="positive_value" x="0px" y="0px" enable-background="new 0 0 40 40"
              viewBox="15.43 13.53 9.05 13.6" height="16px">
              <path
                d="M24,18.1c-0.1,0-0.3,0-0.4-0.1l-3.3-3.3c-0.2-0.2-0.5-0.2-0.7,0l-3.3,3.3c-0.2,0.2-0.5,0.2-0.7,0      s-0.2-0.5,0-0.7l3.3-3.3c0.6-0.6,1.5-0.6,2.1,0l3.3,3.3c0.2,0.2,0.2,0.5,0,0.7C24.3,18,24.1,18.1,24,18.1z" />
              <path
                d="M20,27.1c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,26.8,20.3,27.1,20,27.1z" />
            </svg>
          </td>
        </tr>
      </table>
    </div>
    <div className="table_container extract_table">
      <div className="head">
        <p>Extrato</p>
        <select name="test" id="test">
          <option value="day"> Últimos 1 dias</option>
          <option value="week" selected>
            Últimos 7 dias
          </option>
          <option value="month"> Últimos 30 dias</option>
        </select>
      </div>
      <table>
        {/* ----- EXAMPLE TABLE DATA ----- */}
        <tr>
          <td>
            <p>Total</p>
          </td>
          <td>
            <div>
              <p>R$ 100,00</p>
              <svg class="negative_value" x="0px" y="0px" enable-background="new 0 0 40 40"
                viewBox="15.43 13.53 9.05 13.6" height="16px">
                <path
                  d="M20,26.5c-0.4,0-0.8-0.1-1.1-0.4l-3.3-3.3c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l3.3,3.3      c0.2,0.2,0.5,0.2,0.7,0l3.3-3.3c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-3.3,3.3C20.8,26.4,20.4,26.5,20,26.5z" />
                <path
                  d="M20,25.9c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,25.7,20.3,25.9,20,25.9z" />
              </svg>
            </div>
          </td>
          <td>
            <div>
              <p>R$ 100,00</p>
              <svg class="positive_value" x="0px" y="0px" enable-background="new 0 0 40 40"
                viewBox="15.43 13.53 9.05 13.6" height="16px">
                <path
                  d="M24,18.1c-0.1,0-0.3,0-0.4-0.1l-3.3-3.3c-0.2-0.2-0.5-0.2-0.7,0l-3.3,3.3c-0.2,0.2-0.5,0.2-0.7,0      s-0.2-0.5,0-0.7l3.3-3.3c0.6-0.6,1.5-0.6,2.1,0l3.3,3.3c0.2,0.2,0.2,0.5,0,0.7C24.3,18,24.1,18.1,24,18.1z" />
                <path
                  d="M20,27.1c-0.3,0-0.5-0.2-0.5-0.5v-12c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v12      C20.5,26.8,20.3,27.1,20,27.1z" />
              </svg>
            </div>
          </td>
        </tr>
        <tr>
          <p>R$ 0,00</p>
        </tr>
      </table>
    </div>
  </div>
</MainContainer>
);
}