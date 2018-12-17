import React from "react"
import "./components.css"

export default ({
  date,
  icon,
  temperature,
  apparentTemperature,
  summary,
  currentCityName
}) => {
  return (
    <div className="card">
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>
      <div>{icon}</div>
      <div className="card-row">
        <div className="card-temperature">
          {`${temperature}º`}
          <span className="small">/ {`${apparentTemperature}º`}</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>
      <div className="card-line" />
      <div className="card-row">
        <div>{currentCityName}</div>
        <button>Options</button>
      </div>
    </div>
  )
}
