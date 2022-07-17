import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Routes,Router,Route,Navigate} from "react-router-dom";
import Home from './Home';
import ResponsiveAppBar from './ResponsiveAppBar';
import Menu from './Menu';
import Checkout from './Checkout';
import { auth } from './firebase';
import dispatch from './reducer';


import Login from './Login';
function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
<div>

 <Routes>
  <Route path="/" element ={<><ResponsiveAppBar/><Home/></>}></Route>
<Route path="checkout" element ={<><ResponsiveAppBar/><Checkout/></>}/>
<Route path ="/login" element ={<><ResponsiveAppBar></ResponsiveAppBar><Login/></>}/>
 </Routes>
    
   
    </div>

  );
}

export default App;
