import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"

import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/about' element={<About/>}> </Route>
          <Route exact path='/courses' element={<CourseHome/>}> </Route>
          <Route exact path='/contact' element={<Contact/>}> </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App