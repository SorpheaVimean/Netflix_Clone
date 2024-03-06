import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import SignInPage from "./pages/auth/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomeLayout/>}>
        <Route path="" element={<HomePage />} />
        <Route path="/:section" element={<HomePage />} />
        <Route path="ecommerce" element={<EcomerceProject />} />
        <Route path="spotify" element={<SpotifyClone />} />
        <Route path="node" element={<NodeProject />} />
        </Route> */}
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignInPage />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
