import React, { useState } from "react";
// import { Navbar } from 'react-bootstrap';
import "./App.css";
import Navigation from "./ExeltechSoftware/Navigation";
import Dashboard from "./ExeltechSoftware/Dashboard";
import CustomeCarousel from "./ExeltechSoftware/CustomeCarousel";
import Footer from "./ExeltechSoftware/Footer";

// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import FormOne from './ALLFORMS/FormOne';
// import FormTwo from './ALLFORMS/FormTwo';
// import FormThree from './ALLFORMS/FormThree';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Summary from './Redux/Summery/Summery';

function App() {
  //  const [data,setData]=useState("");
  //  const selector=useSelector((state)=>state.FirstReducer);
  //  const dispatch=useDispatch();
  //  const handleDispatch=()=>{
  //   dispatch({type:"ADD_USER",payload});
  //   // document.getElementById("input").value="";
  //   setData("")
  //  }
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      <Route path='/'element={<FormOne/>}></Route>
      <Route path='/formtwo'element={<FormTwo/>}></Route>
      <Route path='/formthree'element={<FormThree/>}></Route>
      <Route path='/summary'element={<Summary/>}></Route>
      </Routes>
      </BrowserRouter> */}
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show && <Dashboard />}
      <br />
      <CustomeCarousel />
      <br />
      <Navigation />
      <br />
      <Footer />
    </div>
  );
}

export default App;
