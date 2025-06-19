import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./i18n";
import i18n from "./i18n";
import Home from "./Home.tsx";
import Nav from "./components/Nav.tsx";
import Construction from "./components/Construction.tsx";
import AdminPanel from "../bigadmin/AdminPanel.tsx";
import Footer from "./components/Footer.tsx";
import NextEvent from "./components/NextEvent.tsx";
import Support from "./sites/Support.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <NextEvent />
                <Footer />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Nav />
                <Construction />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Nav />
                <Construction />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Nav />
                <Construction />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Nav />
                <Construction />
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <Nav />
                <Support />
                <Footer />
              </>
            }
          />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
