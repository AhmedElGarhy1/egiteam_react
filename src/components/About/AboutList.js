import React from 'react'
import { aboutItems } from "../../data";
import AboutListItem from './AboutListItem';

const AboutList = () => {
  return (
    <div>
        {aboutItems && aboutItems.map((item, i) => (
          <AboutListItem key={i} item={item} />
        ))}
    </div>
  )
}

export default AboutList