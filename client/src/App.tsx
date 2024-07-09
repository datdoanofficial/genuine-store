import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import HeaderComponent from "./components/Layouts/Header";
import FooterComponent from "./components/Layouts/Footer";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          {routes.map((route) => {
            const Header = route.isShowHeader ? <HeaderComponent /> : Fragment;
            const Footer = route.isShowFooter ? <FooterComponent /> : Fragment;
            const Page = route.page;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <>
                    {Header}
                    <Page />
                    {Footer}
                  </>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
