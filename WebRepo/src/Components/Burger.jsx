import StyledBurger from './styles/StyledBurger.jsx'
const Burger = ({ open, setOpen }) => {
    return (
      // Ocupa al componente StyledBurger
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  export default Burger;