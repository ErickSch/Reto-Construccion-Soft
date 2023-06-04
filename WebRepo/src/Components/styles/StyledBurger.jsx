import styled from 'styled-components';
const StyledBurger = styled.button`
  position: fixed;
  position: ${({open}) => open ? "fixed" : "absolute"};
  
  top: 4rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    //si quiero cambiar el tamaño hay que cambiar cada linea de a burger aqui
    width: 2rem;
    height: 0.25rem;
    //color del boton dependiendo si esta abierto
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
export default StyledBurger;