
import './App.css';
//import {Switch, Route} from "react-router-dom";
import { Switch ,Route } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import Crud from "./crud";

import 'antd/dist/antd.css';
import { Switch } from 'antd';
function App() {
  return (
    <div className="App">
       <ToastContainer/>
       <Switch>
          <Route exact path="/" component={Crud} />
       </Swt>
    </div>
  );
}

export default App;
