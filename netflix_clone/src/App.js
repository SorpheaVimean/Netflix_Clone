import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import SignInPage from "./pages/auth/SignInPage";
import HomePageLayout from "./layout/HomePageLayout";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePageLayout />}>
          <Route path="" element={<HomePage />} />
        </Route>
        <Route path="" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
