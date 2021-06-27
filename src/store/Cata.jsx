/* eslint-disable import/no-anonymous-default-export */
let initialState = {
  listOfProducts: [
    {
      association: "Electro",
      name: "TV",
      PRICE: 100,
      description: "a good tv for watching",
      count: 10,
      imgUrl: "https://thumbs.dreamstime.com/z/cheeky-smiling-cartoon-tv-monitor-computer-blue-screen-happy-face-38214777.jpg",
    },
    {
      association: "Electro",
      name: "MacBook",
      PRICE: 150,
      description: "a good MacBook for watching",
      count: 10,
      imgUrl: "https://w7.pngwing.com/pngs/8/446/png-transparent-macbook-pro-laptop-macbook-air-macbook-family-cartoon-notebook-miscellaneous-cartoon-character-computer-thumbnail.png",
    },
    {
      association: "Food",
      name: "mnsf",
      PRICE: 150,
      description: "mnsf",
      count: 10,
      imgUrl: "https://kitchen.sayidaty.net/uploads/small/43/433e4b0fab1635469b33b63d17be6bb4_w750_h500.jpg",
    },
    {
      association: "Food",
      name: "maglpah",
      PRICE: 150,
      description: "maglpah",
      count: 10,
      imgUrl: "https://www.hiamag.com/sites/default/files/styles/ph2_960_600/public/recipe/8986051-1486948878.jpg",
    },
  ],
};
export default (state = initialState, action) => {
  // let {payload} = action;
    // console.log('action',action);
  switch (action.type) {
    case "Electro":
      // eslint-disable-next-line array-callback-return
      let Products = initialState.listOfProducts.filter((Product) => {
        if (Product.association === action.type) {
          return Product;
        }
      });
      return {listOfProducts:Products};

    case "Food":
      // eslint-disable-next-line array-callback-return
      let foods = initialState.listOfProducts.filter((food) => {
        if (food.association === action.type) {
          return food;
        }
      });
      return { listOfProducts:foods };
    case "RESET":
      return initialState;

    default:
      return state;
  }
};


export const electro = (name) => {
 
    return {
        type: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}
