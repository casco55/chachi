import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FullHeightSection } from "../components/containers/fullHeightSection";
import { SideNavBar } from "../widgets/navbar/sideNavBar";

export const RouterApp = () => {
  return (
    <>
      <FullHeightSection>
        <Router>
          <SideNavBar />
          <div className="w-100">
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
            </Routes>
          </div>
        </Router>
      </FullHeightSection>
    </>
  );
};
