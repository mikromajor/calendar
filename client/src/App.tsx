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

// import React, {useContext, useEffect, useState} from 'react';
// import {BrowserRouter} from "react-router-dom";
// import AppRouter from "./components/AppRouter";
// import NavBar from "./components/NavBar";
// import {observer} from "mobx-react-lite";
// import {Context} from "./index";
// import {check} from "./http/userAPI";
// import {Spinner} from "react-bootstrap";

// const App = observer(() => {
//     const {user} = useContext(Context)
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         check().then(data => {
//             user.setUser(true)
//             user.setIsAuth(true)
//         }).finally(() => setLoading(false))
//     }, [])

//     if (loading) {
//         return <Spinner animation={"grow"}/>
//     }

//     return (
//         <BrowserRouter>
//             <NavBar />
//             <AppRouter />
//         </BrowserRouter>
//     );
// });

// export default App;
