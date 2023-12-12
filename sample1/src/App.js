import './App.css';
import PropsFunc from './Props/PropsFunc';
import PropsClass from './Props/PropsClass';
import StateClassCom from './Props/StateClassCom';
import StateHoldObject from './Props/StateHoldObj';
import TwoWayBinding from './Props/TwoWayBinding';

function App() {
  return (
    <div className="App">
      <PropsFunc name="Vimal"></PropsFunc>
      <PropsClass clg="SKCT"></PropsClass>
      <StateClassCom></StateClassCom>
      <StateHoldObject></StateHoldObject>
      <TwoWayBinding></TwoWayBinding>
    </div>
  );
}

export default App;
