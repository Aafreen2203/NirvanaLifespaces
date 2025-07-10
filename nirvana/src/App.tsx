import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import FloorPlan from './components/FloorPlan';
import Amenities from './components/Amenities';
import Rooms from "./components/Rooms"
import ConnectivityPage from './components/ConnectivityPage';
import ReportsPage from "./components/ReportsPage"
import Footer from './components/Footer';
import ChatBot from './components/Chatbot';


function App() {
  return (
    <>
      <div id="home">
        <LandingPage />
      </div>
      <div id="rooms">
        <Rooms />
      </div>
      <div id="amenities">
        <Amenities />
      </div>
      <div id="features">
        <FeaturesPage />
      </div>
      <div id="floorplan">
        <FloorPlan />
      </div>
      <ConnectivityPage />
      <ReportsPage />
      <Footer />
      <ChatBot />
    </>
  );
}

export default App;
