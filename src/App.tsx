import {
  beer,
  vine,
  heightAlc,
  others,
  testerAsync,
} from "./store/reducer/alcoReducer/alcoReducer";
import { useAppSelector } from "./store/hooks/redux";

import { KindOfDrunkAlcohol } from "./store/reducer/alcoReducer/alcoTypes";
// const myAsync = () => {
//   return async (dispatch) => {
//     setTimeout(() => {
//       dispatch(testerAsync());
//     }, 1000);
//   };
// };

function App() {
  const {} = useAppSelector((state) => state);
  return (
    <>
      <h1>Hi!!!</h1>
      <h3>Your calendar waiting you.</h3>

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
