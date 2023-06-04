// tamaño de esto cambia con font-size
import styled from 'styled-components';
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // color del menu
  background: #EFFFFA;
  background:red;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.3rem;
    // text-transform: uppercase;
    text-transform: none;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #0D0C1D;
    text-decoration: none;
    // transicion para los colores 0.3
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
export default StyledMenu;