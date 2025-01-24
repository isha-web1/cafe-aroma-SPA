
import './App.css'
import About from './components/about/About'
import Banner from './components/Banner/Banner'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu></Menu>
      <About></About>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
