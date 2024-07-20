import { RecoilRoot } from "recoil";
import ResetStyle from "./styles/ResetStyle";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";

function App() {
  return (
    <RecoilRoot>
      <ResetStyle />
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  );
}

export default App;
