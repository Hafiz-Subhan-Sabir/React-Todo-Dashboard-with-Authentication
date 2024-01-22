// import logo from './logo.svg';
import Navbar from './Components/Navbar';
import './App.css';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{        // Used for out alert timer
      setAlert(null);
    },1500);
  }
  const [mode, setMode] = useState("light");
  const [toogleMode, setToogleMode] = useState(()=>{
      setMode('light'); 
      document.body.style.backgroundColor = "white";
      setInterval(()=>{
        document.title = "TextUtils.";
      },1500);                                            // both interval are used to blink something in title
      setInterval(()=>{
        document.title = "Install TextUtils Now ~!!~";
      },2000);
  } );
  const redtoogle = ()=>{         // Red Mode 
    setToogleMode(()=>{
      if(mode === "light"){
        setMode('dark'); 
        document.body.style.backgroundColor = "red";
        showAlert("Dark Mode Enabled!", "danger");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled!", "success");
      }
    })
  }
  const greytoogle = ()=>{            //  Grey Mode
    setToogleMode(()=>{
      if(mode === "light"){
        setMode('dark'); 
        document.body.style.backgroundColor = "grey";
        showAlert("Dark Mode Enabled!", "danger");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled!", "success");
      }
    })
  }
  const aquatoogle = ()=>{          // Aqua Mode
    setToogleMode(()=>{
      if(mode === "light"){
        setMode('dark'); 
        document.body.style.backgroundColor = "aqua";
        showAlert("Dark Mode Enabled!", "danger");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enabled!", "success");
      }
    })
  }
 const blacktoogle = ()=>{      // Black Mode
  setToogleMode(()=>{
    if(mode === "light"){
      setMode('dark'); 
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled!", "danger");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled!", "success");
    }
  })
 }
  return (
    <>  
      <Router>
      <Navbar title="TextUtils" abouttext="About us" mode={mode} toogleMode={toogleMode} red={redtoogle} grey={greytoogle} aqua={aquatoogle} black={blacktoogle} />
      <Alert alt={alert} />
        <Routes>
          {/* Route for the Home page */}

          {/* Route for the About page */}
          <Route exact path="/textform" element={<TextForm showalert={showAlert} heading="Enter Text To Analyze " detail="Text - Summary" mode={mode} />} />
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
