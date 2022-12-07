import React, { useEffect, useState } from "react";
import { MainContainer } from "./container/MainContainer";
import DoadoresData from './components/DoadoresData'
import ColaboradoresData from './components/ColaboradoresData'

export default function Cadastrados() {

  const [order, setOrder] = useState('asc')
  const [order2, setOrder2] = useState('asc')
  
  const click =  (event?: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value)
}

const click2 =  (event?: React.ChangeEvent<HTMLSelectElement>) => {
  setOrder2(event.target.value)
  console.log(order2);
  
}


  return (
    <>
    <MainContainer>
      <div className="tables">
        <div className="table_container_">
          <div className="head">
            <p>Lista de doadores</p>
            <select name="test" id="test" onChange={click}>
              <option value="asc" selected>
                {" "}
                Ordem de A-Z
              </option>
              <option value="desc">Ordem de Z-A</option>
            </select>
          </div>
          <DoadoresData
          order={order}
          />
        </div>
        <div className="table_container_">
          <div className="head">
            <p>Lista de colaboradores</p>
            <select name="test" id="test" onChange={click2}>
              <option value="ordered_by_az"  selected >
                {" "}
                Ordem de A-Z
              </option>
              <option value="ordered_by_za">Ordem de Z-A</option>
            </select>
          </div>
            <ColaboradoresData
            order={order2}
            />
        </div>
      </div>
    </MainContainer>
    </>
  )
}
