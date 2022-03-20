import axios from "axios";
import { Dispatch } from "redux";

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
export const _addItem = (item: object) => ({
  type: ADD_ITEM,
  payload: item,
});
export const _updateCart = (item: object) => ({
  type: UPDATE_CART,
  payload: item,
});
export const _deleteItem = (item: object) => ({
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

export const addItem =
  (id: number, item: object) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.post(`api/cart/${id}`, item);
      const newItem = res.data;
      dispatch(_addItem(newItem));
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
  payload: object;
};
//initial state
const initialState = {
  products: [],
};

//reducer
const cartReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CART:
      return action.payload;
    case ADD_ITEM:
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
