import axios from "axios";
import { Dispatch } from "redux";

//action types
export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_ITEM = "DELETE_ITEM";

//action creators
export const _login = (user: object) => ({
  type: LOG_IN,
  payload: user,
});
export const _signUp = (user: object) => ({
  type: SIGN_UP,
  payload: user,
});
export const _logout = (user: object) => ({
  type: LOG_OUT,
  payload: user,
});

//thunk
export const login = (user: object) => async (dispatch: Dispatch) => {
  try {
    let res = await axios.post("http://localhost:3001/auth/signin", {
      credentials: "include",
      body: user,
    });
    console.log("the response back @ store/auth", res.data.currentUser);
    dispatch(_login(res.data.currentUser));
    localStorage.setItem("currentUser", JSON.stringify(res.data.currentUser));
    localStorage.setItem("TOKEN", JSON.stringify(res.data.TOKEN));
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (user: object) => async (dispatch: Dispatch) => {
  try {
    let res = await axios.post("http://localhost:3001/auth/signup", {
      body: user,
    });
    console.log("the response back @ store/auth", res.data.currentUser);
    // dispatch(_signUp(res.data.currentUser));
    // window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch: Dispatch) => {
  try {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("TOKEN");
  } catch (error) {
    console.log(error);
  }
};

//types & interface
type action = {
  type: string;
  payload: object;
};
type currentUser = {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  address?: string;
};
export type UserState = {
  currentUser: currentUser;
};
//initial state
let currUser = localStorage.getItem("currentUser");
const initialState = {
  currentUser: currUser || {},
};

//reducer
const authReducer = (state: UserState = initialState, action: action) => {
  switch (action.type) {
    case LOG_IN:
      return { currentUser: action.payload };
    case LOG_OUT:
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
