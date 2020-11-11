import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let interval = this.interval;
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick = (e) => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    const hours = new Date();
    const minutes = new Date();
    const seconds = new Date();
    return (
      <div>
        <h1>Clock</h1>
        <p>
          {hours.getHours()}:{minutes.getMinutes()}:{seconds.getSeconds()}
        </p>
      </div>
    );
  }
}

export default Clock;
