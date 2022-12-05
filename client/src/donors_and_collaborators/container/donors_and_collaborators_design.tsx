import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  place-items: center;
  padding: 25px;
  overflow-x: hidden;

  @font-face {
    font-family: Inter;
    src: url(../../assets/fonts/Inter-Medium.ttf);
  }

  * {
    font-family: "Inter", Roboto, system-ui, -apple-system, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline-color: #879fb5;
  }

  .tables {
    width: max(92%, 770px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 20px;
  }

  .table_container_ {
    min-width: 48%;
    min-height: 70vh;
    background: #e5eaee;
    border-radius: 30px;
    padding: 30px;
    /*TEMPORARIO*/
    margin-top: 50px;
  }
  /* ----- DEFAULT HEAD ----- */
  .table_container_ .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto, system-ui, -apple-system, "Segoe UI", Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
  }

  .table_container_ .head select {
    padding: 5px 7px;
    background: #c9d2db;
    color: #62788b;
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  .table_container_ .head select:focus {
    border-radius: 16px 16px 0 0;
  }
  /* ----- DEFAULT TABLE ----- */
  .table_container_ table {
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
  }
  .table_container_ table tr {
    border-bottom: 1px solid #444444;
  }
  .table_container_ table tr td {
    padding: 7px 5px;
  }

  .table_container_ .search_container {
    position: relative;
    margin-top: 10px;
    width: 100%;
  }

  .table_container_ .search_container svg {
    height: 24px;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    fill: #8d8d8d;
  }

  .table_container_ .search_container input {
    width: 100%;
    height: 40px;
    padding: 4px 4px 4px 36px;
    border-radius: 10px;
    border: none;
    font-size: 0.725rem;
    outline-color: #879fb5;
  }

  .table_container_ .more_options {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .table_container_ .more_options svg {
    height: 24px;
    fill: #242424;
  }

  @media (max-width: 1300px) {
    .tables {
      flex-direction: column;
    }
    .table_container {
      width: 100%;
    }
    .table_container_ {
      width: 100%;
    }
  }
`;
