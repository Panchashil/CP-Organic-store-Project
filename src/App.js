// import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import MyDetails from './components/MyDetails';
import MethodEventComp from './components/MethodEvent';
import SetStateComp from './components/SetStateComp';
import ConditionRenComp from './components/ConditionRenComp';
import MyImagesComp from './components/MyImages';
import ParentComp from './components/ParentComp';
import ToggleImage from './Task/ToggleImage';
import MultiImgComp from './Task/MultiImage';
import MyCssComp from './components/MyCssComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import MySliderComp from './components/MySliderComp';
import router from './routing/routing';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Welcome To React</h1>
      {/* <FunctionComp myName="Sureshmanikandan" post="Software Developer" />
      <ClassComp myName="Sureshmanikandan" post="Software Developer" />
      <MyDetails fname="Sureshmanikandan" lname="K" email="Sureshmk@gmail.com" contact="99999999" /> */}
      {/* <MethodEventComp /> */}
      {/* <SetStateComp /> */}
      {/* <ConditionRenComp /> */}
      {/* <MyImagesComp /> */}
      <ParentComp />
      {/* <MyCssComp /> */}
      {/* <ClickCounterComp />
      <HoverCounterComp /> */}
      <MySliderComp />
      {/* <ToggleImage /> */}
      {/* <MultiImgComp /> */}
      <router />
    </div>
  );
}

export default App;
