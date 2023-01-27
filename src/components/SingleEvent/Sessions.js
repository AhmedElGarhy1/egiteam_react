import React from 'react'
import { Dots } from '../Dots'

const Sessions = ({sesstions, fbLink}) => {
  return (
    <div className="box">
        <div className="container">
          <h2 className="main-heading">Lets-Talk sessions</h2>
          {sesstions.map((session, i) => (
            <div key={i} className="info">
              <div className="description">
                <h4>{session.title}</h4>
                <p>Speaker: Eng/{session.speaker}</p>
                <span>{session.content}</span>
              </div>
              <img src={session.img} alt="" />
            </div>
          ))}

          <a href={fbLink} target="_blank">
            facebook <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <Dots />
        <Dots />
    </div>
  )
}

export default Sessions