import React from "react";
import Heading from "../common/heading/Heading";
import { coursesCard } from "../../dummydata";
import "../allcourses/courses.css"

function HAbout() {
  const redirectToLink = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading subtitle="our courses" title="explore our popular online courses" />

          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((val, index) => (
                <div className="items" key={index}>
                  <div className="content flex">
                    <div className="left">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1>{val.coursesName}</h1>
                      <div className="rate">
                        <label htmlFor="">{val.rating}</label>
                      </div>
                      <div className="details">
                        {val.courTeacher.map((details, i) => (
                          <div className="box" key={i}>
                            <div className="para">
                              <h4>{details.name}</h4>
                            </div>
                            <span>{details.totalTime}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <h3>{val.priceAll} /-</h3>
                  </div>
                  <button className="outline-btn" onClick={() => redirectToLink(val.link)}>
                    ENROLL NOW!
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HAbout;
