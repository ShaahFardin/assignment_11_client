import './App.css';
import Carousal from './components/Home/Carousal/Carousal';
import Dashboard from './components/Home/Dashboard/Dashboard';
import Registration from './components/Home/Form/Registration';
import Header from './components/Home/Header/Header';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Dashboard></Dashboard>
     <Carousal></Carousal>
     <Registration></Registration>
    </div>
  );
}

export default App;
