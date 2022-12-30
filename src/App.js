import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { NavBar, TryBar, Companies } from "./components/index";
import {
  Landing,
  FeatureFs,
  FeatureSc,
  Solutions,
  Opinions,
  Footer,
} from "./container/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-app">
        <Landing />
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
