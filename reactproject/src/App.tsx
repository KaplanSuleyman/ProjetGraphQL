import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import "./App.css";
import ListMarque from "./Components/Marque/List";
import ListModel from "./Components/Model/List";

const App = () => {
    const client = new ApolloClient({
        uri: "http://localhost:8000/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <Router>
            <main>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ApolloProvider client={client}>
                            <ListMarque />
                        </ApolloProvider>
                    </Route>
                    <Route exact path="/model">
                        <ApolloProvider client={client}>
                            <ListModel />
                        </ApolloProvider>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;