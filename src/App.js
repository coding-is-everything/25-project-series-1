import "./App.css";
// import Accordian from "./components/accordian";
// import ModalTest from "./components/custom-modal-popup/modal-test";
// import TabTest from "./components/custom-tabs/tab-test";
// import FeatureFlags from "./components/feature-flag";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
// import GithubProfileFinder from "./components/github-profile-finder/index";
// import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
// import LightDarkMode from "./components/light-dark-mode";

function App() {
  return (
    <div className="App">
      {/* <LoadMoreData /> */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;