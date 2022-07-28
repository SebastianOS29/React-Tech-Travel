import React, { useEffect, useState, useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import CartContext from '../../Context/Cart';
import { Container, List, Unit } from './styles';
import api from '../../Services/api';

function Home() {
  const [travelList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
    }
    getTravelList();
  }, []);

  function HandleAddToCart(travel) {
    const CopyCart = [...state.cart];
    const TravelIndex = CopyCart.findIndex((el) => el.id === travel.id);
    if (TravelIndex >= 0) {
      CopyCart[TravelIndex].quantity += 1;
    } else {
      CopyCart.push({ ...travel, quantity: 1 });
    }

    setState({
      cart: CopyCart,
    });
  }

  return (
    <Container>
      <List>
        {travelList.map((el) => (
          <Unit>
            <img src={el.Photo} alt="Travel" />
            <p>{el.Title}</p>
            <strong>{el.Price}</strong>
            <button type="button" onClick={() => HandleAddToCart(el)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Agregar al carrito</span>
            </button>
          </Unit>
        ))}
      </List>
    </Container>
  );
}

export default Home;
