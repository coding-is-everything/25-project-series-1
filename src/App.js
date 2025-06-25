import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import LightDarkMode from "./components/light-dark-mode";

function App() {
  return (
    <div className="App">

      {/* <Accordian /> */}
      {/* <ModalTest /> */}
      {/* <TabTest /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      <LightDarkMode />
    </div>
  );
}

export default App;