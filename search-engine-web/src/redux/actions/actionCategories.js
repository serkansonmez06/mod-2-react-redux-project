import * as actionTypes from "./actionTypes";

export const developerName = () => ({
  //create function return function with parameter is object
  type: actionTypes.DEVELOPER_NAME,
});

export const addContactMessage = (message) => ({
  //create function return function with parameter is object
  type: actionTypes.ADD_CONTACT_MESSAGE,
  payload: message,
});


