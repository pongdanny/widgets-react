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
      <div id="clock">
        <h1>Clock</h1>
        <div>
          <p className="timedate">
            <span>Time:</span>
            <span id="digits"></span>
            <span>{time.getHours()}:</span>
            <span>{time.getMinutes()}:</span>
            <span>{time.getSeconds()}</span>
          </p>
          <p className="timedate">
            <span>Date:</span>
            <span>{time.toDateString()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
