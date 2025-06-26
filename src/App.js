import "./App.css";
// import Accordian from "./components/accordian";
// import ModalTest from "./components/custom-modal-popup/modal-test";
// import TabTest from "./components/custom-tabs/tab-test";
// import FeatureFlags from "./components/feature-flag";
// import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder/index";
import ImageSlider from "./components/image-slider";
// import LightDarkMode from "./components/light-dark-mode";

function App() {
  return (
    <div className="App">

      {/* <Accordian /> */}
      {/* <ModalTest /> */}
      {/* <TabTest /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <LightDarkMode /> */}
      {/* <GithubProfileFinder /> */}

      <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}
      />
    </div>
  );
}

export default App;