import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react'
import { Overlay,
    ModalContainer,
    ModalContentContainer
} from './container/AddCaixaContainer'
import CaixaSelectConta from './components/CaixaSelectConta'
import CaixaSelectDoador from './components/CaixaSelectDoador'
import ToggleSwitchComponent from './components/ToggleSwitchComponent'
import { handleAddCaixaModal } from '../store/SliceAddCaixa'
import { RootState } from '../store/Store';
import { useSelector, useDispatch } from 'react-redux';

const modalDiv = document.getElementById('modal-add')!;

export default function AddCaixa() {

    const option = useSelector((state: RootState) => state.caixaOption.caixaModalOpen);
    const toggleOption = useSelector((state: RootState) => state.caixaOption.addCaixaOption);
    const [open, setOpen] = useState('');
    const dispatch = useDispatch();
    const modalOff = 'false';
  
    const handleClick = () => {
      dispatch(handleAddCaixaModal(modalOff))
    }

    useEffect(() => {
        setOpen(option)
        console.log(toggleOption);
    }, [option])


    return ReactDOM.createPortal(
        <>
            { open == 'true' &&
                      <Overlay>
                      <ModalContainer>
                          <img src={require('../assets/img/close.png')} alt="" id='close' onClick={handleClick}/>
                          <ModalContentContainer>
                              <div id="header">Novo caixa</div>
                              <ToggleSwitchComponent/>
          
          
                                  
                                  { toggleOption === 'entrada' && <CaixaSelectDoador/> }
                                  { toggleOption === 'saida' && <CaixaSelectConta/> }
          
          
                          </ModalContentContainer>
                      </ModalContainer>
                    </Overlay> 
            }
        </>, modalDiv
    )
}
