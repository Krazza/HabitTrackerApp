import React, { Component } from "react";
import { Range } from "react-range";
import "./Busy.scss";

class Busy extends Component {
  state = { values: [30] };
  render() {
    return (
      <div className="busyContainer">
        <div>
          <h4>How overwhelmed/busy are you?</h4>
        </div>
        <Range
          step={0.1}
          min={0}
          max={100}
          values={this.state.values}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div className="busyBar" {...props}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => <div className="moodThumb" {...props} />}
        />
      </div>
    );
  }
}

export default Busy;