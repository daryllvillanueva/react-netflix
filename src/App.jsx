import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginNetflix from "./components/pages/LoginNetflix/LoginNetflix"
import Home from "./components/pages/Home/Home"
import Movie from "./components/pages/Movie/Movie"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginNetflix/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movie" element={<Movie/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App
