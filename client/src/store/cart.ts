import axios from "axios";
import { Dispatch } from "redux";

export type item = {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  stock?: number;
};
//action types
export const GET_CART = "GET_CART";
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_ITEM = "DELETE_ITEM";

//action creators
export const _getCart = (cart: Array<object>) => ({
  type: GET_CART,
  payload: cart,
});
export const _addItem = (item: item) => ({
  type: ADD_ITEM,
  payload: item,
});
export const _updateCart = (item: item) => ({
  type: UPDATE_CART,
  payload: item,
});
export const _deleteItem = (item: item) => ({
  type: DELETE_ITEM,
  payload: item,
});

//thunk
export const getCart = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`api/cart/${id}`);
    dispatch(_getCart(res.data));
  } catch (error) {
    console.log(error);
  }
};

let localStorageArr: Array<item> = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "")
  : [];
export const addItem =
  (id: number, item: item) => async (dispatch: Dispatch) => {
    try {
      // const res = await axios.post(`api/cart/${id}`, item);
      // const newItem = res.data;
      // console.log(newItem);
      dispatch(_addItem(item));
      console.log("localstoragearr: ", localStorageArr);
      if (localStorageArr[1]) {
        let cartArr: Array<item> = [];
        localStorageArr.map((item) => {
          cartArr.push(item);
        });
        localStorage.setItem("cart", JSON.stringify({ ...cartArr }));
      } else {
        localStorage.setItem("cart", JSON.stringify({ item }));
      }
    } catch (error) {
      console.log(error);
    }
  };

// export const updateCart =
//   () => async (dispatch: Dispatch) => async (dispatch: Dispatch) => {
//     try {
//     } catch (error) {
//       console.log(error);
//     }
//   };
// export const deleteItem =
//   () => async (dispatch: Dispatch) => async (dispatch: Dispatch) => {
//     try {
//     } catch (error) {
//       console.log(error);
//     }
//   };

//types & interface
type action = {
  type: string;
  payload: item;
};
//initial state
type cartItems = [item: item];

type state = {
  cartItem: cartItems;
};

const initialState = {
  cartItems: [{}],
};
//reducer
const cartReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case ADD_ITEM:
      if (state.cartItems.find((item: item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload });
      }
      return {
        ...state.cartItems,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
