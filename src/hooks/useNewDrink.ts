import { useState, useEffect } from "react";

const init = {
  name: "",
  liters: 0,
  percent: 0,
};

export const useNewDrink = (props = init) => {
  const [drink, setDrink] = useState({});
  useEffect(() => {
    setDrink(props);
  }, [props]);
  return drink;
};
