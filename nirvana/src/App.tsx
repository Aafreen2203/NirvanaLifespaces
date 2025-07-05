import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import FloorPlan from './components/FloorPlan';
import Amenities from './components/Amenities';
import Rooms from "./components/Rooms"
import ConnectivityPage from './components/ConnectivityPage';
import ReportsPage from "./components/ReportsPage"


function App() {
  return (
    <>
      <LandingPage />
      <Rooms />
      <FeaturesPage />
      <FloorPlan />
      <ConnectivityPage />
      <Amenities />
      <ReportsPage />
    </>
  );
}

export default App;
