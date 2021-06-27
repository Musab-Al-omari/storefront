/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  listOfProducts: [
    {
      association: "Electro",
      name: "TV",
      PRICE: 100,
      description: "a good tv for watching",
      count: 10,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      association: "Electro",
      name: "MacBook",
      PRICE: 150,
      description: "a good MacBook for watching",
      count: 10,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      association: "Food",
      name: "mnsf",
      PRICE: 150,
      description: "mnsf",
      count: 10,
      imgUrl: "https://source.unsplash.com/random",
    },
    {
      association: "Food",
      name: "maglpah",
      PRICE: 150,
      description: "maglpah",
      count: 10,
      imgUrl: "https://source.unsplash.com/random",
    },
  ],
};
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "Electro":
      let Products = state.listOfProducts.filter((Product) => {
        if (Product.association === payload) {
          return Product;
        }
      });
      return { Products };

    case "Food":
      let foods = state.listOfProducts.filter((food) => {
        if (food.association === payload) {
          return food;
        }
      });

      return { foods };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};


export const Electro = (name) => {
   
    return {
        type: 'Electro',
        payload: name
    }
}
export const Food = (name) => {
   
    return {
        type: 'Food',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
