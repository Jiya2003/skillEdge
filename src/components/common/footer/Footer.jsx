import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>SkillEdge</h1>
            <span>ONLINE LEARNING</span>
            <p>Resource Planet Of Courses</p>
          </div>
        </div> 
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved | SkillEdge
        </p>
      </div>
    </>
  )
}

export default Footer