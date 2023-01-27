import React from 'react'
import CountUp from "react-countup";
import { Dots } from '../Dots'

const Stats = ({insights, statsRef}) => {
  return (
    <div>
        <div className="box">
            <div className="container">
              <h2 className="main-heading">Lets-Talk insights</h2>
              <div ref={statsRef} className="stats">
                {insights.map((ele, i) => (
                  <div key={i} className="info">
                    <i className="fa-solid fa-clipboard-user"></i>
                    <p className="number">
                      <CountUp
                        end={ele.number}
                        delay={2.5}
                        duration={5}
                        enableScrollSpy
                      />
                    </p>

                    <span> {ele.name} </span>
                  </div>
                ))}
              </div>
            </div>
            <Dots />
        </div>
    </div>
  )
}

export default Stats