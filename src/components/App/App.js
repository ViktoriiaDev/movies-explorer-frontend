import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-content">
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
