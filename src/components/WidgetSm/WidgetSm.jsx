import React from "react"
import "./WidgetSm.css"
import { Visibility } from "@mui/icons-material"

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="test"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Gowtham</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="test"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Gowtham</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="test"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Gowtham</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="test"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Gowtham</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="test"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="widgetSmUserName">Gowtham</div>
            <div className="widgetSmUserTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
