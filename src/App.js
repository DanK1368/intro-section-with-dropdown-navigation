import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const theme = {
  colors: {
    almostWhite: "hsl(0, 0%, 98%)",
    mediumGray: "hsl(0, 0%, 41%)",
    almostBlack: "hsl(0, 0%, 8%)",
  },
  breakpoint: {
    small: "670px",
    medium: "860px",
    large: "1024",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Header />
        <MainContent />
      </>
    </ThemeProvider>
  );
}

export default App;
