import React from 'react'
import { minutesToDuration, secondsToDuration} from '../utils/duration'

function Timer(props) {
    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        {props.session && (<div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {props.session&&props.session.label} for {("0" + (props.session.label.toLowerCase().indexOf("ocus") > 0 ? props.focusDuration : props.breakDuration)).substr(-2)}:00 minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {props.session&&props.fmtMSS(props.session.timeRemaining)} remaining
            </p>
          </div>
        </div>)}
        {props.session&&<div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={props.aria} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width:`${props.aria}%`}} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>}
      </div>
    )
}

export default Timer