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
                  <p>13:30</p>
                </td>
                <td>
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Doação</p>
                </td>
                <td>
                  <p>13:30</p>
                </td>
                <td>
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Doação</p>
                </td>
                <td>
                  <p>13:30</p>
                </td>
                <td>
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Doação</p>
                </td>
                <td>
                  <p>13:30</p>
                </td>
                <td>
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
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
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <p>R$ 13:30</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
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
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <p>R$ 13:30</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
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
                  <p>R$ 100,00</p>
                </td>
                <td>
                  <p>R$ 13:30</p>
                </td>
                <td>
                  <img src="../assets/icons/arrow-small-up.png"></img>
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
                    <img src="../assets/icons/arrow-small-up.png"></img>
                  </div>
                </td>
                <td>
                  <div>
                    <p>R$ 100,00</p>
                    <img src="../assets/icons/arrow-small-up.png"></img>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total</p>
                </td>
                <td>
                  <div>
                    <p>R$ 100,00</p>
                    <img src="../assets/icons/arrow-small-up.png"></img>
                  </div>
                </td>
                <td>
                  <div>
                    <p>R$ 100,00</p>
                    <img src="../assets/icons/arrow-small-up.png"></img>
                  </div>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </MainContainer>
  );
}
