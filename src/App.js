import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { NavBar, TryBar, Companies, Probabilities } from "./components/index";
import {
  Landing,
  FeatureFs,
  FeatureSc,
  Solutions,
  Opinions,
  Footer,
} from "./container/index";

function App() {
  AOS.init();
  return (
    <div className="App">
      <NavBar />
      <div className="main-app">
        <Landing />
        <Probabilities />
        <FeatureFs />
        <FeatureSc />
        <Solutions />
        <Opinions />
        <Companies />
        <TryBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
