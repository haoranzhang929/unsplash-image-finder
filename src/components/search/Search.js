import React, { Component } from "react";
import ImageResluts from "../image-results/ImageResults";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Unsplash from "unsplash-js";

// NOTE: Put your unsplash Access Key and Secret Key here
const unsplash = new Unsplash({
  applicationId: "Your Unsplash Access Key",
  secret: "Your Unsplash Secret Key",
  callbackUrl: "https://api.unsplash.com/"
});

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    images: []
  };

  searchImages = (text, amount) => {
    text = null ? (text = this.state.searchText) : text;
    amount = null ? (amount = this.state.amount) : amount;
    unsplash.search
      .photos(text, 1, amount)
      .then(res => res.json())
      .then(data => {
        this.setState({ images: data.results });
      })
      .catch(err => console.log(err));
  };

  onTextChange = e => {
    this.searchImages();
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        this.searchImages(this.state.searchText, this.state.amount);
      }
    });
  };

  onAmountChange = e => {
    const amount = e.target.value;
    this.setState({ amount }, () => {
      if (this.state.searchText === "") {
        this.setState({ images: [] });
      } else {
        this.searchImages(this.state.searchText, this.state.amount);
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <main className="search">
        <form onSubmit={this.onSubmit}>
          <FormControl className="form-item">
            <TextField
              name="searchText"
              label="Search For Images"
              value={this.state.searchText}
              fullWidth={true}
              onChange={this.onTextChange}
              autoFocus={true}
            />
          </FormControl>
          <br />
          <FormControl className="form-item">
            <InputLabel htmlFor="amount-helper">Amount</InputLabel>
            <Select value={this.state.amount} onChange={this.onAmountChange}>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </form>
        {this.state.images.length > 0 ? (
          <ImageResluts images={this.state.images} />
        ) : null}
      </main>
    );
  }
}

export default Search;
