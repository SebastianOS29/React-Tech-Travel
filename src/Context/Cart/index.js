import React, { createContext, useState } from 'react';

const DefaultValue = {
  state: {
    cart: [],
  },
  setState: () => {},
};

const CartContext = createContext(DefaultValue);

function CartContextProvider({ children }) {
  const [state, setState] = useState(DefaultValue.state);
  return (
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider };
export default CartContext;
