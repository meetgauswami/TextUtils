import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')  //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (messge, type) => {
        setAlert({
          msg: messge,
          type: type
        });
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
  {/* <BrowserRouter> */}
   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}></Route> */}
          {/* <Route exact path="/"  element={ */}
          <TextForm showAlert={showAlert} heading = "Enter The Text To Analyze Below" mode={mode}/>
         {/* }  ></Route> */}
{/* </Routes> */}
</div>

{/* <About/> */}

{/* </BrowserRouter> */}
    </>
    );
}

export default App;
