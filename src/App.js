import "./style/styling.css"
import NavigationBar from "./components/NavigationBar.js"
import IntroOne from "./components/Intro";
import Characters from "./components/Character";
import Weapon from "./components/Weapon";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <div className="pageOne">
        <NavigationBar />
        <IntroOne />
      </div>

      <div className="pageTwo">
        <Characters />
      </div>

      <div className="pageThree">
        <Weapon />
      </div>

      <div className="pageFour">
        <Details />
      </div>

    </div>


  );
}

export default App;
