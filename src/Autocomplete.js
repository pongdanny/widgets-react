import React from 'react';


class Weather extends React.Component {
  constructor () {
    super();

    this.state = {
      weather: "Loading...",
      city: "Loading..."
    };

  }