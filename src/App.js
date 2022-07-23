import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalstyles/theme";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
