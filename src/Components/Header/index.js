import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../Context/Cart';
import Logo from '../../assets/Logo.svg';
import { Container, HeaderContainer, Cart } from './styles';

function Header() {
  const { setState, state } = useContext(CartContext);
  const TotalQuantity = state.cart.reduce(
    (acc, travel) => acc + travel.quantity,
    0,
  );

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/Cart">
          <Cart>
            <div>
              <span>{TotalQuantity}</span>
            </div>
            <FaShoppingCart size={36} color="#fff" />
          </Cart>
        </Link>
      </HeaderContainer>
    </Container>
  );
}

export default Header;
