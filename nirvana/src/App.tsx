import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import Amenities from './components/Amenities';
import Rooms from "./components/Rooms"
import ConnectivityPage from './components/ConnectivityPage';


function App() {
  return (
    <>
      <LandingPage />
      <Rooms />
      <FeaturesPage />
      <ConnectivityPage />
      <Amenities />
    </>
  );
}

export default App;
