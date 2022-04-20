import axios from "axios";

const GET_CHOICES = "GET_CHOICES";
const ADD_CHOICE = "ADD_CHOICE";

const _getChoices = (choices) => {
  return {
    type: GET_CHOICES,
    choices,
  };
};

const _addChoice = (choice) => {
  return {
    type: ADD_CHOICE,
    choice,
  };
};

export const getChoices = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/choices");
    dispatch(_getChoices(data));
  };
};

export const addChoice = (choice) => {
  return async (dispatch) => {
    const newChoice = (await axios.post("/api/choices", choice)).data;
    dispatch(_addChoice(newChoice));
  };
};

const choices = (state = [], action) => {
  switch (action.type) {
    case GET_CHOICES:
      return action.choices;
    case ADD_CHOICE:
      return [...state, action.choice];
    default:
      return state;
  }
};

export default choices;
