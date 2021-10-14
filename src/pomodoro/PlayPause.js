import React from 'react'
import {minutesToDuration} from '../utils/duration'


function PlayPause(props) {
  return (
    <div className="row mb-5">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={props.playPause}
          >
            <span
              className={props.classNames({
                oi: true,
                "oi-media-play": !props.isTimerRunning,
                "oi-media-pause": props.isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
          {/* TODO: Disable the stop button when there is no active session */}
          <button
            type="button"
            disabled= {!props.isTimerRunning}
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            onClick={() => {
              props.setSession(null);
              props.setIsTimerRunning(false);
              props.setElapsed(0)
            }}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  )
}


export default PlayPause