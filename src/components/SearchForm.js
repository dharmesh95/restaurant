import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Axios from "axios";
import { Restaurant } from "./../model/Restaurant";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Toronto"
    };
  }

  render() {
    const handleChange = cityName => event => {
      this.setState({ cityName: event.target.value });
    };

    const search = () => event => {
      Axios.get(
        `http://opentable.herokuapp.com/api/restaurants?city=` +
          this.state.cityName
      )
        .then(res => {
          let restaurants = [];
          res.data.restaurants.forEach(restaurant => {
            restaurants.push(
              new Restaurant(
                restaurant.name,
                restaurant.address,
                restaurant.price,
                restaurant["image_url"]
              )
            );
          });
          this.props.updateRestaurants(restaurants);
        })
        .catch(error => {
          console.log(error);
          let restaurants = [];
          this.props.updateRestaurants(restaurants);
        });
    };

    return (
      <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Enter City Name"
          value={this.state.cityName}
          onChange={handleChange("name")}
          margin="normal"
        />
        <br />
        <Button variant="contained" onClick={search()}>
          Search
        </Button>
      </form>
    );
  }
}
export default SearchForm;
