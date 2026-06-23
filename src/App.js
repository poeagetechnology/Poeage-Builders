import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import PageLoader from "./Component/ui/Loader";
import { Analytics } from "@vercel/analytics/react"

/* Lazy Loaded Pages */
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));
const FAQ = lazy(() => import("./Pages/Faq"));
const HowItWorks = lazy(() => import("./Pages/HowItWorks"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./Pages/TermsAndConditions"));
const Projects = lazy(() => import("./Pages/Projects"));


function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/whatwedo" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandcondition" element={<TermsAndConditions />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>

      <Footer />
      <Analytics />

    </div>
  );
}

export default App;