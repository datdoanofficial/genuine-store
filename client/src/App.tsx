import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import HeaderComponent from "./components/Layouts/Header";
import FooterComponent from "./components/Layouts/Footer";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  // Check if it's first visit
  useEffect(() => {
    // Get session token for this tab
    const sessionToken = sessionStorage.getItem("tabSession");
    // Get flag for whether user has seen alert this browser session
    const hasSeenAlert = sessionStorage.getItem("hasSeenAlert");

    if (!sessionToken) {
      // New tab/window - set session token
      sessionStorage.setItem("tabSession", Math.random().toString());

      // Check if user has seen alert this browser session
      if (!hasSeenAlert) {
        setShowWelcomeAlert(true);
        sessionStorage.setItem("hasSeenAlert", "true");
      }
    }

    // Cleanup event listeners
    return () => {
      sessionStorage.removeItem("tabSession");
    };
  }, []);

  return (
    <div>
      {showWelcomeAlert && (
        <div className="welcome-alert-overlay">
          <div className="welcome-alert-content">
            <p className="welcome-alert-text">
              Trang web hiện đang trong giai đoạn thử nghiệm, nếu có bất kỳ trải
              nghiệm không tốt nào rất mong nhận được sự thông cảm và phản hồi
              của bạn qua email{" "}
              <a href="mailto:datdoanofficial@gmail.com">
                datdoanofficial@gmail.com
              </a>
              . Trang web sẽ tiếp tục được hoàn thiện để mang lại trải nghiệm
              tốt nhất cho người dùng. Xin chân thành cảm ơn!
            </p>
            <p className="welcome-alert-text">
              The website is currently in the testing phase. We appreciate your
              understanding and welcome any feedback you may have at{" "}
              <a href="mailto:datdoanofficial@gmail.com">
                datdoanofficial@gmail.com
              </a>
              . The website will continue to be improved to ensure the best
              possible user experience. Thank you sincerely!
            </p>
            <button
              className="welcome-alert-button"
              onClick={() => setShowWelcomeAlert(false)}
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}
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
