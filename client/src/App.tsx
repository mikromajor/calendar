import { AlcoCounter, Salary, TopMenu } from "./components";
import { useState } from "react";
import { useAppSelector } from "./store/hooks/redux";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { UserThemes } from "./types/userTypes";
import { Message } from "./components/ui";

function App() {
  const [switchCalcs, setSwitchCalcs] = useState(true);
  const { currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const { isError, message } = useAppSelector(
    (state) => state.serviceReducer
  );

  const theme = createTheme({
    palette: {
      mode:
        currentTheme === UserThemes.WHITE
          ? "light"
          : "dark",
    },
    components: {
      MuiSnackbarContent: {
        styleOverrides: {
          root: {
            backgroundColor:
              currentTheme === UserThemes.WHITE
                ? "rgb(140, 194 ,188)"
                : "rgb(70,70,70)",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={`app app--${currentTheme}`}>
        <TopMenu setSwitchCalcs={setSwitchCalcs} />
        {switchCalcs ? <AlcoCounter /> : <Salary />}
        <Message isError={isError} message={message} />
      </div>
    </ThemeProvider>
  );
}
export default App;
