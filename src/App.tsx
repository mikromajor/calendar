import {
  useAppSelector,
  useAppDispatch,
} from "./store/hooks/redux";
import { alcoReducer as alcoSlice } from "./store/reducer/alcoReducer/alcoReducer";

// import { KindOfDrunkAlcohol } from "./store/reducer/alcoReducer/alcoTypes";
// const myAsync = () => {
//   return async (dispatch) => {
//     setTimeout(() => {
//       dispatch(testerAsync());
//     }, 1000);
//   };
// };

// TODO write mini test using alcoState
function App() {
  const { beer, vine, heightAlc, others } =
    alcoSlice.actions;
  const { alcoReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Hi!!!</h1>
      <h3>Your calendar waiting you.</h3>
      <h4>Beer - {alcoReducer.beer}</h4>
      <button
        onClick={() => {
          // dispatch(beer());
        }}
      >
        {" "}
        Add 1 beer
      </button>

      {/* <label htmlFor='kindOfAlc'>
        Choose a drink:
        <select name='kindOfAlc' id='alc'>
          <option value={KindOfDrunkAlcohol.BEER}>
            {KindOfDrunkAlcohol.BEER}
          </option>
          <option value={KindOfDrunkAlcohol.VINE}>
            {KindOfDrunkAlcohol.VINE}
          </option>
          <option value={KindOfDrunkAlcohol.HEIGHT_ALC}>
            {KindOfDrunkAlcohol.HEIGHT_ALC}
          </option>
          <option value={KindOfDrunkAlcohol.OTHERS}>
            {KindOfDrunkAlcohol.OTHERS}
          </option>
        </select>
      </label>
      <input type='number' placeholder='quantity drunk' />
      <input type='number' placeholder='percent alcohol' /> */}
    </>
  );
}
export default App;
