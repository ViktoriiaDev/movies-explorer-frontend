import React, { useState, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { mainApi } from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import NotificationProvider from "../../contexts/NotificationContext/NotificationContext";
import UnauthRoute from "../UnauthRoute/UnauthRoute";
import "./App.css";

const App = () => {
  const { push } = useHistory();
  const [currentUser, setСurrentUser] = useState({
    name: "",
    email: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const fetchUser = () => {
    setLoading(true);
    mainApi
      .getProfileInfo()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setСurrentUser(res);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        push("/signin");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  const [isVisibleMobileMenu, setVisibleMobileMenu] = useState(false);
  const openMobileNavigation = useCallback(() => {
    setVisibleMobileMenu(true);
  }, []);

  const closeMobileNavigation = useCallback(() => {
    setVisibleMobileMenu(false);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <NotificationProvider>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header
              openMobileNavigation={openMobileNavigation}
              loggedIn={loggedIn}
            />
            <div className="app-content">
              <Switch>
                <UnauthRoute
                  path="/signin"
                  component={Login}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  fetchUser={fetchUser}
                />
                <UnauthRoute
                  path="/signup"
                  component={Register}
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  fetchUser={fetchUser}
                />
                <ProtectedRoute
                  path="/movies"
                  loggedIn={loggedIn}
                  component={Movies}
                  setСurrentUser={setСurrentUser}
                />
                <ProtectedRoute
                  path="/saved-movies"
                  loggedIn={loggedIn}
                  component={SavedMovies}
                  setСurrentUser={setСurrentUser}
                />
                <ProtectedRoute
                  path="/profile"
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  component={Profile}
                  setСurrentUser={setСurrentUser}
                />
                <Route path="/" exact>
                  <Main />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </div>
            <Footer />
          </>
        )}
        {isVisibleMobileMenu && (
          <MobileNavigation closeMobileNavigation={closeMobileNavigation} />
        )}
      </NotificationProvider>
    </CurrentUserContext.Provider>
  );
};

export default App;
