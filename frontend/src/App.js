import React, { useEffect, useState } from "react";
import "./styles/App.css";
import { Switch, Route, Link } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Logo from "./components/Logo";
import SignOut from "./components/SignOut";
import { getWallet } from "./near";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [wallet, setWallet] = useState();
  const [accountID, setAccountID] = useState();

  useEffect(() => {
    (async () => {
      try {
        setWallet(await getWallet());
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (wallet && wallet.getAccountId) {
      setAccountID(wallet.getAccountId());
    }
  }, [wallet]);

  useEffect(async () => {
    if (accountID) {
    }
  }, [accountID]);

  return (
    <div>
      <nav>
        <div className="logo-container">
          <Logo />
        </div>
        <div className="links-container">
          <Link to="/feed" className={`link ${!accountID && "link-disabled"}`}>
            feed
          </Link>
          <Link to="/profile" className={`link ${!accountID && "link-disabled"}`}>
            profile
          </Link>
          <Link to="/create-post" className={`link ${!accountID && "link-disabled"}`}>
            create
          </Link>
          {accountID && <SignOut wallet={wallet} setAccountID={setAccountID} />}
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home wallet={wallet} accountID={accountID} />
        </Route>
        <Route path="/feed" exact>
          <Feed wallet={wallet} accountID={accountID} />
        </Route>
        <Route path="/profile" exact>
          <Profile accountID={accountID} wallet={wallet} />
        </Route>
        <Route path="/create-post" exact>
          <CreatePost accountID={accountID} wallet={wallet} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
