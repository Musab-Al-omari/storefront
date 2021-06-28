/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  arrayOfItem: [],
  counter: 0,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      let newProdect = state.arrayOfItem;

      newProdect.push(payload);
      let counter = state.arrayOfItem.length;

      return { arrayOfItem: newProdect, counter: counter };

    default:
      return state;
  }
};
