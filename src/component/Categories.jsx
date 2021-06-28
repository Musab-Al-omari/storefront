// import Link from "@material-ui/core/Link";
import { electro,  reset } from "../store/Actions";
import { connect } from "react-redux";

 function Categories(props) {
  return (
    <>
      <h1>Browse Our Categories</h1>
      <ul>
          <button onClick={() => props.electro('Electro')}>
          Electro
          </button>
          <button onClick={() => props.electro('Food')}>
          Food
          </button>
      </ul>
    </>
  );
}


// 1- add the state to this component props
const mapStateToProps = state => ({
  Cata: state.Cata
});

// 2- since I have some actions to use: 
// add the actions to the component props
const mapDispatchToProps = {electro,reset};

//3. connect your component and export it after its connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(Categories);