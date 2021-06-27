// import Link from "@material-ui/core/Link";
import { Electro, Food, reset } from "../store/Cata";
import { connect } from "react-redux";

 function Categories(props) {
  return (
    <>
      <h1>Browse Our Categories</h1>
      <ul>
          <button onClick={() => props.Electro('Electro')}>
          Electro
          </button>
          <button onClick={() => props.Food('Food')}>
          Food
          </button>
      </ul>
    </>
  );
}


// 1- add the state to this component props
const mapStateToProps = state => ({
  counter: state.lists
});

// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatchToProps = {Electro,Food, reset};

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Categories);