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
    const time = new Date();
    return (
      <div>
        <h1>Clock</h1>
        <div id="clock">
          <p id="time">
            <span>Time:</span>
            <span>
              <span>{time.getHours()}:</span>
              <span>{time.getMinutes()}:</span>
              <span>{time.getSeconds()}</span>
            </span>
          </p>
          <p id="date">
            <span>Date:</span>
            <span>{time.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
