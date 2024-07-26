import React, {
  ReactComponentElement,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { observer } from "mobx-react-lite";
import { Context } from "./index_mobx";
import { check } from "./http/userApi";

// import {BrowserRouter} from "react-router-dom";
//import {Spinner} from "react-bootstrap";
//import AppRouter from "./components/AppRouter";
//import NavBar from "./components/NavBar";

// const App = observer(() => {
//     const {user} = useContext(Context)
//     const [loading, setLoading] = useState(true)
//   const theme = createTheme({
//     palette: {
//       mode:
//         currentTheme === "white-theme" ? "light" : "dark",
//     },
//   });

//     useEffect(() => {
//         check().then(data => {
//             user.setUser(true)
//             user.setIsAuth(true)
//         }).finally(() => setLoading(false))
//     }, [])

//     if (loading) {
//         return <Spinner animation={"grow"}/>
//     }

// return (
// <ThemeProvider theme={theme}>
// <BrowserRouter>
// <NavBar />
// <AppRouter />
// </BrowserRouter>
// </ThemeProvider>
//     );
// });
const App_mobx = () => {
  return <p> Some text</p>;
};
export default App_mobx;
