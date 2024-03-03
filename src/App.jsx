import Auth from "./components/Auth";
import Cookies from "js-cookie";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useCookieExpiration from "./hooks/useRemoveToken";
import User from "./components/User";

function App() {
  const expirationTimeInSeconds = Cookies.get("token_expiration") ?? 600;
  const cookieName = "token";

  useCookieExpiration(cookieName, expirationTimeInSeconds);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
