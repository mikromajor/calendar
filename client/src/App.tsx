import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";
import { useAppSelector } from "./store/hooks/redux";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

function App() {
  const [showAlcoCalc, setShowAlcoCalc] = useState(true);
  const { currentTheme } = useAppSelector(
    (state) => state.userReducer
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
        <TopMenu setShowAlcoCalc={setShowAlcoCalc} />
        {showAlcoCalc ? <AlcoCounter /> : <Salary />}
      </div>
    </ThemeProvider>
  );
}
export default App;
