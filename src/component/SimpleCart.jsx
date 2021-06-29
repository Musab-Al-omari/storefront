/* eslint-disable import/no-anonymous-default-export */
import { useSelector } from "react-redux";

export default () => {
  const obj = useSelector((state) => state.Chart);



  if (obj.arrayOfItem.length === 0) {
    return null;
  } else {
    console.log("ggggggggg");
    return (
      <ul id="list">
         {obj.arrayOfItem.map((obj) => {
           return(<li>{obj.name}</li>)
         })}
  
      </ul>
    );
  }
};
