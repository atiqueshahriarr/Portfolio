import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./App.css";
import Home from "./Layouts/Home/Home";
// ..
AOS.init();
//
function App() {
  return (
    <div className="text-white  bg-gradient-to-r from-[#0f0f0f] via-[#1b1b1b] to-[#0f122b] lg:to-[#252d6d] px-10">
      <Home></Home>
    </div>
  );
}

export default App;
//#252d6d
//#1a1a1a
