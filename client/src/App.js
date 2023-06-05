import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <GoogleOAuthProvider clientId="GOOGLE_CLIENT_ID">
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
