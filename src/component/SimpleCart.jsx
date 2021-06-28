/* eslint-disable import/no-anonymous-default-export */
import { useSelector } from "react-redux";

export default () => {
  const obj = useSelector((state) => state.Chart);

 let newArray= obj.arrayOfItem.map((obj) => {
    return obj.name
  });

  if (obj.arrayOfItem.length === 0) {
    return null;
  } else {
    console.log("ggggggggg");
    return (
      <ul id="list">
        {newArray.map((name) => {
          <li>{name}</li>;
        })}
      </ul>
    );
  }
};
