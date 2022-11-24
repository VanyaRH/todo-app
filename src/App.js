import {Route, Routes} from "react-router-dom";
import StartPage from "./pages/start/start";
import AppPage from "./pages/app/app";

function App() {
  return (
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/*" element={<StartPage />} />
        </Routes>
  );
}

export default App;
