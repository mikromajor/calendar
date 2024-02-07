// import { alcoActions} from '../../../../../store/reducer/alcoReducer'

export const ButtonsPlusMinus = (
  callBack: (d: string) => string,
  arg: string
) => {
  return (
    <div className='buttons_plus_minus'>
      <button
        className='plus'
        onClick={() => {
          callBack(arg);
        }}
      >
        +
      </button>
      <button
        className='minus'
        onClick={() => {
          callBack(arg);
        }}
      >
        -
      </button>
    </div>
  );
};
