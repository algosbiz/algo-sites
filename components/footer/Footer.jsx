import React from "react";
import { dsnCN } from "../../hooks/helper";
import Social from "./Social";
import ScrollToTop from "./ScrollToTop";
import Copyright from "./Copyright";

function Footer({ className }) {
  return (
    <footer className={dsnCN("footer p-relative", className)}>
      <div className="container">
        <div className="footer-container">
          <div className="flex h-100">
            <div className="column-left flex flex-col space-y-2">
              <Copyright />
              <div className="social-wrapper">
                <Social />
              </div>
            </div>

            <ScrollToTop />

            <div className="column-right">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
