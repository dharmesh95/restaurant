import React from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [], flag: false };
    this.updateRestaurants = this.updateRestaurants.bind(this);
  }

  updateRestaurants(restaurants) {
    this.setState({ restaurants: restaurants, flag: true });
  }

  render() {
    const { restaurants, flag } = this.state;
    return (
      <div style={{ marginLeft: 10 }}>
        <SearchForm
          updateRestaurants={this.updateRestaurants}
          restaurants={restaurants}
        />
        {restaurants.length > 0 ? (
          <SearchResults restaurants={restaurants} />
        ) : flag ? (
          <h4>No search results</h4>
        ) : (
          false
        )}
      </div>
    );
  }
}
export default Search;