import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { Count } from "./pages/Count";
import { Calculation } from "./pages/Calculation";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="/count" element={<Count />} />
          <Route path="/calculate" element={<Calculation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
