/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import GetHelp from "./pages/GetHelp";
import Diseases from "./pages/Diseases";
import DiseaseDetail from "./pages/DiseaseDetail";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Affiliations from "./pages/Affiliations";
import Doctors from "./pages/Doctors";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Financials from "./pages/Financials";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Media from "./pages/Media";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="affiliations" element={<Affiliations />} />
          <Route path="financials" element={<Financials />} />
          <Route path="impact" element={<Impact />} />
          <Route path="diseases" element={<Diseases />} />
          <Route path="diseases/:id" element={<DiseaseDetail />} />
          <Route path="get-help" element={<GetHelp />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="programs" element={<Programs />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="media" element={<Media />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
