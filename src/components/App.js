import React from "react";
import PropTypes from "prop-types";
import Routes from "../routes";
import { ApolloProvider } from "react-apollo";

const App = ({ client }) => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

App.propTypes = {
  client: PropTypes.object.isRequired
};

export default App;
