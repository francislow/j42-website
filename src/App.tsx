import React from "react";
import LandingPage from "./LandingPage";
import MyDataPage from "./pages/MyDataPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

function App() {
  // These pages use ordinary links; no client-side router is needed.
  const pathname = window.location.pathname.replace(/\/$/, "");
  if (pathname === "/my-data") return <MyDataPage />;
  if (pathname === "/privacy-policy") return <PrivacyPolicyPage />;
  if (pathname === "/terms-of-service") return <TermsOfServicePage />;
  return <LandingPage />;
}

export default App;
