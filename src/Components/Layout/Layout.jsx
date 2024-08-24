import React from "react";
import "./Layout.css";
import ConnectionWarning from '../Alerts/ConnectionWarning/ConnectionWarning';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Layout({ children }) {
  return (
    <div className="layout">
      <ConnectionWarning />
      <div className="TopNavSection">
        <Navbar />
      </div>

      <div className="BodySection">
        {children}
      </div>

      <div className="FooterSection">
        <Footer />
      </div>
    </div>

  );
}