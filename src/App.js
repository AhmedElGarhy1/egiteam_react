import { useEffect } from "react";
import { About, Events, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header, Loading } from "./components";
import { Contact, Groups, FAQ, SingleEvent, NotFound404 } from "./pages";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Loading />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
