import styled from "styled-components";

export const MainContainer = styled.div`
  @font-face {
    font-family: Inter;
    src: url(../../assets/fonts/Inter-Medium.ttf);
  }

  display: grid;
  place-items: center;
  padding: 25px;
  overflow-x: hidden;

  #valor {
    position: relative;
    right: 35%;
  }

  #total {
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
position: relative;
top: 10px;
color: #000000;
  }
  

  #data { 
    position: relative;
    right: 125%;
  }

  #data2 { 
    position: relative;
    right: 12%;
  }

  img {
    width: 17px;
    height: 16px;
  }

  #data-container {
    width: 100%;
    height: 100%;
  }

  #scroll-data {
    margin-top: 5%;
    max-height: 280px !important;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
  }

  #scroll-data2 {
    margin-top: 5%;
    max-height: 480px !important;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
  }



  * {
    font-family: "Inter", Roboto, system-ui, -apple-system, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .tables {
    width: max(88%, 770px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;
  }

  .tables2 {
    width: max(98%, 770px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;
  }

  .table_container {
    min-width: 461px;
    background: #e5eaee;
    border-radius: 30px;
    padding: 30px;
  }

  .table_container2 {
    min-width: 491px;
    height: 600px;
    background: #e5eaee;
    border-radius: 30px;
    padding: 30px;
  }
  /* ----- DEFAULT HEAD ----- */
  .table_container .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto, system-ui, -apple-system, "Segoe UI", Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
  }

  .table_container .head select {
    padding: 5px 7px;
    background: #c9d2db;
    color: #62788b;
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  .table_container .head select:focus {
    border-radius: 16px 16px 0 0;
  }
  /* ----- DEFAULT TABLE ----- */
  .table_container table {
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
  }
  .table_container table tr {
    border-bottom: 1px solid #444444;
  }
  .table_container table tr td {
    padding: 7px 5px;
  }

  /* ---------------------------------------- */
  .table_container2 .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto, system-ui, -apple-system, "Segoe UI", Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
  }

  .table_container2 .head select {
    padding: 5px 7px;
    background: #c9d2db;
    color: #62788b;
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  .table_container2 .head select:focus {
    border-radius: 16px 16px 0 0;
  }
  /* ----- DEFAULT TABLE ----- */
  .table_container2 table {
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
  }
  .table_container2 table tr {
    border-bottom: 1px solid #444444;
  }
  .table_container2 table tr td {
    padding: 7px 5px;
  }

  /* ----- SUMMARY TABLE ----- */
  .summary_wallet_table {
    min-height: 400px;
  }

  .summary_wallet_table2 {
    min-height: 400px;
    width: 591px;
  }

  /* ----- DETAILED TABLE ----- */
  .detailed_table {
    min-width: 713px;
  }
  /* ----- DETAILED TABLE ----- */
  .extract_table table tr td div {
    display: flex;
    align-items: center;
  }
  .extract_table table tr td img {
    margin-left: 6px;
  }
  /* ----- BUTTON IN THE END ----- */
  .table_container .add_button {
    margin-top: 16px;
    padding: 10px 7px;
    width: 100%;
    border-radius: 16px;
    border: none;
    background: #c9d2db;
    color: #879fb5;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .summary_wallet_table .add_button:is(:hover, :clicked) {
    background: #879fb5;
    color: #2a4864;
  }
`;

export const InputContainer = styled.div`
background: #F8F8F8;
border-radius: 15px;
width: 298px;
height: 40px;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 5%;

img {
  margin-left: 2%;
}

input {
  width: 80%;
  height: 80%;
  background-color: transparent;
  border: transparent;
  outline: transparent;
}
`