import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Events from "../pages/Events";
import Register from "../pages/Register";
import Sponsors from "../pages/Sponsors";
import Community from "../pages/Community";
import Contact from "../pages/Contact";
import Schedule from "../pages/Schedule";
import Speakers from "../pages/Speakers";
import Gallery from "../pages/Gallery";
import AdminDashboard from "../pages/AdminDashboard";
import EventDetail from "../pages/EventDetail";


// 6b9fed5 (Added Web Pages with dummy data)

// New page
import VolunteerPortal from "../pages/VolunteerPortal";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />

        <Route path="/register" element={<Register />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/community" element={<Community />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* New Volunteer Portal Route */}
        <Route path="/volunteer-portal" element={<VolunteerPortal />} />
        
        {/* Privacy Policy Route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        
        {/* Terms and Conditions Route */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

