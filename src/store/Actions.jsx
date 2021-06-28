export const electro = (name) => {
  return {
    type: name,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const increment = (product) => {
    // console.log('product action',product);
  return {
    type: "INCREMENT",
    payload:product
  };
};
