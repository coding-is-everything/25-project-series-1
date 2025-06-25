import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        {/* <Accordian /> */}
        {/* <ModalTest /> */}
        {/* <TabTest /> */}
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;