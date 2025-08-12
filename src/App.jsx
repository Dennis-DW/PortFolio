import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas,Footer } from "./components"

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div className="relative z-0">
            <div className="relative z-10">
            <div className="h-[150vh] sm:h-[100vh]"></div>
            <Experience />
            <Works />
            <Feedbacks />
            <Contact />
            <StarsCanvas />
            <Footer/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
