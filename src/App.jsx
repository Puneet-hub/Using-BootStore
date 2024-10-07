import './App.css'
import Header from './header';
import Footer from './Footer';
import Slider from './Slider';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import { Routes, Route  } from 'react-router-dom';
function App() {
  
  return (
    <>
    
      <Header />
      <Routes>
        <Route path="/" element={<Slider />}></Route>
        <Route path="about/" element={<About />}></Route>
        <Route path="contact/" element={<Contact />}></Route>
      </Routes>
      <Footer />
     </>
  )
}

export default App
