import React from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
              
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                    
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                       
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll}
                </h3>
              </div>
              <div class="button1"><a href="https://www.udemy.com/course/datastructurescncpp/">Register</a></div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard