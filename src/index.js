import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "GRAPHQL_API_ENDPOINT"
});

ReactDOM.render(<App client={client} />, document.getElementById("root"));
