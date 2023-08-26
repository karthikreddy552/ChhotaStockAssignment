import "./App.css";
import Navbar from "./Components/Navbar";
import Sliding from "./Components/Sliding";
import First from "./Components/First";
import Footer from "./Components/Footer";
import WorkWithUs from "./Components/WorkWithUs";
import PlatFinance from "./Components/PlatFinance";
import Features from "./Components/Features";
import Solution from "./Components/Solution";
import Partners from "./Components/Partners";

function App() {
  return (
    <div className="App">
      <Sliding />
      <Navbar />
      <First/>
      <Features/>
      <PlatFinance/>
      <Solution/>
      <Partners/>
      <WorkWithUs/>
      <Footer/>
    </div>
  );
}

export default App;
