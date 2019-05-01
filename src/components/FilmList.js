import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loader from "./Loader";
import Error from "./Error";

const query = gql`
  query allMovies($filter: MovieFilter!) {
    allMovies(orderBy: releaseDate_ASC, filter: $filter) {
      id
      title
      releaseDate
      actors {
        id
        name
      }
    }
  }
`;

const batmanFilter = {
  filter: {
    OR: [{ title_contains: "Dark" }, { title_contains: "Batman" }]
  }
};

const allMoviesFilter = { filter: {} };

class FilmList extends Component {
  state = {
    batman: false
  };

  updateBatman = ({ target: { checked } }) => {
    this.setState({ batman: checked });
  };

  getFilter = () => (this.state.batman ? batmanFilter : allMoviesFilter);

  render() {
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={this.state.batman}
            onChange={this.updateBatman}
          />
          <span>All Batman movies</span>
        </label>
        <Query query={query} variables={this.getFilter()}>
          {({ data, loading, error }) => {
            if (loading) return <Loader />;
            if (error) return <Error />;

            return (
              <ul>
                {data.allMovies.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            );
          }}
        </Query>
      </>
    );
  }
}

export default FilmList;
