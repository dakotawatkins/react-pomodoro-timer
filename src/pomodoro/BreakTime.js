import React from 'react'
import {minutesToDuration} from '../utils/duration'


function BreakTime(props) {
  
  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            {/* TODO: Update this text to display the current break session duration */}
            Break Duration: {("0" + props.breakDuration).substr(-2)}:00
          </span>
          <div className="input-group-append">
            {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={() => {
                if(props.breakDuration > 1){
                props.setBreakDuration(props.breakDuration -1)
                }
              }}
              disabled={props.isTimerRunning} //dw added to set button to be disabled
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={() => {
                if(props.breakDuration < 15){
                props.setBreakDuration(props.breakDuration +1)
                }
              }}
              disabled={props.isTimerRunning} //dw added to set button to be disabled
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default BreakTime