import "./App.css";
import Spotlight from "./components/screens/Spotlight";
import BreakFast from "./components/screens/BreakFast";
import Coffee from "./components/screens/Coffee";
import Dinner from "./components/screens/Dinner";
import IceCream from "./components/screens/IceCream";
import Lunch from "./components/screens/Lunch";
import PageNotFound from "./components/screens/PageNotFound";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Preload from "./components/Preloader/Preload";

function App() {
  return (
    <>
      <Router>
        <Preload />
        <Routes>
          <Route path="/efood" exact element={<Spotlight />} />
          <Route path="/" exact element={<Spotlight />} />
          <Route path="/breakfast" exact element={<BreakFast />} />
          <Route path="/coffee" exact element={<Coffee />} />
          <Route path="/dinner" exact element={<Dinner />} />
          <Route path="/icecream" exact element={<IceCream />} />
          <Route path="/lunch" exact element={<Lunch />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
