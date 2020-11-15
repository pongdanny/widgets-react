// import React from "react";

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     let interval = this.interval;
//     this.state = {
//       time: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//   }

//   tick = (e) => {
//     this.setState({
//       time: new Date(),
//     });
//   };

//   render() {
//     const time = new Date();
//     return (
//       <div>
//         <h1>Clock</h1>
//         <div id="clock">
//           <p id="time">
//             <span>Time:</span>
//             <span>
//               <span>{time.getHours()}:</span>
//               <span>{time.getMinutes()}:</span>
//               <span>{time.getSeconds()}</span>
//             </span>
//           </p>
//           <p id="date">
//             <span>Date:</span>
//             <span>{time.toDateString()}</span>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

// export default Clock;

import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      time: new Date(),
    });
  };

  render() {
    let hours = this.state.time.getHours();
    hours = hours.toString().padStart(2, "0");
    let minutes = this.state.time.getMinutes();
    minutes = minutes.toString().padStart(2, "0");
    let seconds = this.state.time.getSeconds();
    seconds = seconds.toString().padStart(2, "0");
    let day = this.state.time.getDate();
    let month = this.state.time.getMonth() + 1;
    let year = this.state.time.getFullYear();
    return (
      <div className="whole-clock">
        <h1 className="widget-header">Clock</h1>
        <div className="date-time">
          <div className="clock-container">
            <span className="clock-title">Time:</span>
            <span className="clock">{`${hours}:${minutes}:${seconds}`}</span>
          </div>
          <div className="clock-container">
            <span className="date-title">Date:</span>
            <span className="date">{`${month}/${day}/${year}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
