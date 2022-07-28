import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../Context/Cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
} from './styles';

function Cart() {
  const { state, setState } = useContext(CartContext);

  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.Photo} alt={el.Title} />
            <Info>
              <p>{el.Title}</p>
              <strong>{el.Price}</strong>
            </Info>
            <Quantity readOnly type="number" value={el.quantity} />
            <Subtotal>
              <p>{el.quantity * el.Price}</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
      </ContainerList>
    </Container>
  );
}

export default Cart;
