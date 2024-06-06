import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";
import { useAppSelector } from "./store/hooks/redux";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

function App() {
  const [switchCalc, setSwitchCalc] = useState(true);
  const { currentTheme } = useAppSelector(
    (state) => state.appReducer
  );

  const theme = createTheme({
    palette: {
      mode:
        currentTheme === "white-theme" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={`app app--${currentTheme}`}>
        <TopMenu setSwitchCalc={setSwitchCalc} />
        {switchCalc ? <AlcoCounter /> : <Salary />}
      </div>
    </ThemeProvider>
  );
}
export default App;
