import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const userAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {userAuth && <UserProfile />}
      {!userAuth && <Auth />}
      <Counter />
    </>
  );
}

export default App;
