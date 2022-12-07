import styled from 'styled-components'

export const HeaderContainer = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;




   a {
      text-decoration: none;
      color: #7D98B0;

   }

   a:focus {
      text-decoration: none;
      color: #7D98B0;
   }
   
.imagem-logo img{
   width: 242px;
   height: 42px;
   margin-left: 159px;
}

.navbar{
   width: 429px;
height: 34px;
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 248px;

.not-active {
   font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;

/* cor-principal */

color: #7D98B0;
}

.active {
   font-style: normal;
font-weight: 600 !important;
text-decoration: underline;
font-size: 20px;
line-height: 29px;
/* cor-principal */
text-decoration: underline;

color: #7D98B0;
}

}

`