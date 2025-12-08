import "./WorkCardStyles.css";

import React from 'react'
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="work-container">
        <h1 className="project-heading">{props.title}</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">view</NavLink>
                        <NavLink to="url.com" className="btn">source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard