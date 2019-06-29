import React, { Suspense } from "react";
import SearchForm from "./SearchForm";
const SearchResults = React.lazy(() => import("./SearchResults"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <SearchResults restaurants={restaurants} />
          </Suspense>
        ) : flag ? (
          <h4>
            No search results &nbsp;
          </h4>
        ) : (
          false
        )}
      </div>
    );
  }
}
export default Search;
