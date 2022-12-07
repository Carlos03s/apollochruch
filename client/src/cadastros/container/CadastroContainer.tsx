import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 88.6%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const CadastroContainer = styled.div`
width: 448px;
height: 629px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;

#title {
    font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;

color: #000000;

#title-colored {
    font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;

/* cor-principal */

color: #7D98B0;
}
}
`

export const ToggleContainer = styled.div`
    width: 448px;
height: 70px;
justify-content: space-between;
border-radius: 20px;
background-color: #C9D2DB;
display: flex;

.active {
    background: #7D98B0;
    cursor: default !important;
}

.not-active {
    background-color: transparent;
}

#txt-active {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */


        color: #FFFFFF;

    }

    #txt-not-active {
        font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #677D92;
    }

#left {
    width: 150px;
    height: 70px;
    border-radius: 20px 0px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

#middle {
border-radius: 0px;
width: 157px;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

}

#right {
    border-radius: 0px;
width: 133px;
height: 70px;
display: flex;
align-items: center;
border-radius: 0px 20px 20px 0px;
    cursor: pointer;
justify-content: center;
}
`