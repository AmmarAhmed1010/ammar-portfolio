import { BrowserRouter } from "react-router-dom";

import { About, Contact,  Hero, Navbar,  Works, StarsCanvas } from "./components";
import SplineScene from "./components/SplineScene";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    {/* <SplineScene/> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;