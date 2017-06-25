import React, { Component } from 'react';
import moment from 'moment';
import './SkyTracker.css';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/NavBar';
import List from './components/List/List';
import { fetchFlights } from './data/service';

class SkyTracker extends Component {
  state = {
    results: [],
    loading: false,
  }
  clearResults = () => {
    this.setState({ loading: false, results: [] });
  }
  searchResults = (fromWhere, toWhere, fromDate, toDate, returnFromDate, returnToDate) => {
    this.setState({ loading: true });
    return fetchFlights(
      fromWhere,
      toWhere,
      fromDate,
      toDate,
      returnFromDate,
      returnToDate)
    .then((results) => {
      const resultMapped = results.data.map((fly) => {
        const d = new Date(0).setUTCSeconds(fly.dTime);
        const date = moment.utc(d).format('DD/MM/YYYY').toString();
        const time = moment.utc(d).format('hh:mm').toString();
        return {
          from: fly.cityFrom,
          to: fly.cityTo,
          date,
          time,
          price: fly.price,
          id: fly.id,
        };
      });
      this.setState({
        results: resultMapped,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div className="">
        <Header />
        <div className="skytracker-logo">
          <SearchBar className="SearchBar" searchResults={this.searchResults} clearResults={this.clearResults} />
          <List listItems={this.state.results} isLoading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default SkyTracker;
