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
    const time = new Date()
    return (
        <div id="clock">
          <h1>Clock</h1>
        <div>
          <p>
            <span>Time:</span>
              <span>{time.getHours()}:</span>
              <span>{time.getMinutes()}:</span>
              <span>{time.getSeconds()}</span>

            </p>
            </div>
        </div>

    );
  }
}

export default Clock;
