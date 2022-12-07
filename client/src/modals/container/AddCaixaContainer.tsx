import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(26, 26, 26, 0.3);
backdrop-filter: blur(2.5px);
position: absolute;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

export const ModalContainer = styled.div`
width: 401px;
height: 425px;
left: 559px;
top: 48px;
display: flex;
align-items: center;
justify-content: center;

background: #E5EAEE;
/* cor-principal */

border: 1px solid #7D98B0;
border-radius: 30px;

#close {
    position: relative;
    bottom: 42%;
    left: 75%;
    cursor: pointer;
}
`

export const ModalContentContainer = styled.div`
width: 308px;
height: 360px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;

#header {
    width: 119px;
height: 28px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;

color: #7D98B0;
}
`

export const ToggleSwitch = styled.div`
width: 307px;
height: 43px;
left: 603px;
display: flex;
top: 139px;

background: #E5EAEE;
border: 1px solid #7D98B0;
border-radius: 11px;

.active {
    background: rgba(141, 163, 184, 0.2);
    cursor: default !important;
}

.not-active {
    background: transparent;
}

#left {
    width: 50%;
    height: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 11px;
    border-bottom-left-radius: 11px;
    border-right: 1px solid #7D98B0;

    span {
        font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #7D98B0;

    }
}

#right {
    width: 50%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;

    span {
        font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #7D98B0;

    }
}

`

export const AddFormContainer = styled.div`
width: 308px;
height: 153px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const AddFormInputsContainer = styled.div`
width: 307px;
height: 43px;
display: flex;
align-items: center;
justify-content: center;
background: #E5EAEE;
border: 1px solid #8DA3B8;
border-radius: 11px;

`

export const AddFormInput = styled.input`
width: 70%;
height: 80%;

margin-right: 13%;
background: #E5EAEE;
border: none;
outline: none;
border-radius: 11px;

`

export const AddFormSelect = styled.select`
width: 307px;
height: 43px;
padding: 12px;
background: #E5EAEE;
border: 1px solid #8DA3B8;
border-radius: 11px;

`

export const BtnEnviarCaixa = styled.button`
    width: 165px;
height: 40px;

color: #fff;
background: #7D98B0;
border: 1px solid #FFFFFF;
border-radius: 13px;
`