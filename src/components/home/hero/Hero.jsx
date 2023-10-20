import React from "react"
import Heading from "../../common/heading/Heading"
import "./hero.css"
// import img1 from "../../../public/images/main.jpg"
import img1 from "./main.jpg"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
            <Heading subtitle='Welcome To SkillEdge' title='A Great Learning Widget' />
            <p>Never stop learning because life never stops teaching. Learn any skill to advance your career path. You learn today and earn tomorrow.</p>
            <br/>
            <p className="minHeading">Nourish your skills with SkillEdge</p>

            </div>
            <div className="col-md-6">
              <img className="imagemain" src={img1} width="90%"></img>
            </div>
          </div>
         
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero