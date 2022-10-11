import { useState } from "react";
import { initChangingState } from "../constants";

const init = {
  name: "beer",
  liters: 0.5,
  procent: 5,
};

export const changingState = (action = init) => {
  const [name, setName] = useState("beer");
  const [litrs, setLiters] = useState(0);
  const [procent, setProcent] = useState(5);
  switch (action.name) {
    case "beer":
  }
};
