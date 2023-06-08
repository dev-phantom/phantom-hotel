import React, { createContext, useReducer, useEffect } from "react";

// const initialState = {
//   cart: {},
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const { _id } = action.payload;
//       const item = state.cart[_id];
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           [_id]: item
//             ? {
//                 ...item,
//                 qty: item.qty + 1,
//               }
//             : {
//                 ...action.payload,
//                 qty: 1,
//               },
//         },
//       };
//     case "REMOVE_FROM_CART":
//       const { [_id]: removedItem, ...restCart } = state.cart;
//       return {
//         ...state,
//         cart: restCart,
//       };
//     default:
//       return state;
//   }
// };

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, []);
  const info = { state, dispatch };
  // Save cart to local storage on state update



  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};
