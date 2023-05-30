import { Fragment } from "react";
import { BrowserRouter , Route,Routes} from "react-router-dom";
import Login from './components/Login/login';
import Register from './components/Register/register';
import Protected from "./components/Protected";
import Home from './components/Home/home';

const App = () =>{
  return(
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;
