import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

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

  // const removeBodyClasses=() => {
  //      document.body.classList.remove('bg-light')
  //      document.body.classList.remove('bg-dark')
  //      document.body.classList.remove('bg-warning')
  //      document.body.classList.remove('bg-success')
  //      document.body.classList.remove('bg-danger')
  //      document.body.classList.remove('bg-primary')
  // }

  const toggleMode = (cls) => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (
    <>
  <BrowserRouter> 
   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert = {alert}/>
<div className="container my-3">
<Routes>
         <Route exact path="/about" element={<About mode={mode} />}></Route>
           <Route exact path="/"  element={ <TextForm showAlert={showAlert} heading = "Just Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>  }  ></Route>
</Routes> 
</div>

{/* <About/>  */}
</BrowserRouter> 
    </>
    );
}

export default App;
