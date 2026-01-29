import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import FAQ from './Pages/Faq';
import HowItWorks from './Pages/HowItWorks';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/whatwedo' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
         <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/termsandcondition' element={<TermsAndConditions />} />
           <Route path='/projects' element={<Projects />} />


                    
      </Routes>
      <Footer/>

     
    </div>
  );
}

export default App;
