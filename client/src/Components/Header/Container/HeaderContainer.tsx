import styled from "styled-components";

export const HeaderContainer = styled.div`
  // --primary-color:#7D98B0;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbar {
    padding: 0 5.5%;
  }

  .navbar_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .nav_logo img {
    height: 100%;
  }

  .nav_links {
    display: flex;
    justify-content: space-between;
    gap: 48px;
  }
  /*Links default*/
  .nav_links a {
    position: relative;
    text-decoration: none;
    color: #547592;
    font-weight: 500;
  }
  .nav_links a:is(.selected, :hover) {
    font-weight: 700;
  }
  .nav_links a.selected::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -1px;
    transform: translateX(-50%);
    width: 90%;
    height: 2px;
    background: #7d98b0;
    transition: all 0.3s;
  }
`;
