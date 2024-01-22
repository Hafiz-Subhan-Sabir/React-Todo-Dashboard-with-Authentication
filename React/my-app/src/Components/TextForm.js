import React, {useState}  from 'react'

export default function TextForm(props) {     // Getting our parameters here with the use of props
  const [text, setText] = useState("");
  const upclick = ()=>{               // This function is converting text to upper case
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Text Converted To Upper Case!", "primary");
  }
  const loclick = ()=>{                 // This function is converting text to lower case 
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Text Converted To Lower Case!", "primary");

  }
  const replaceclick = ()=>{            // This function is replacing the text
    let rep = prompt("Enter New Text : ");
    let newText = rep.replace(text);
    setText(newText);
    props.showalert("Text Replaced!", "primary");   // That thing is using as the alert message which we create and pass two parameters msg and type

  }
  const clearclick = ()=>{            // This function clear the text
    let newText = "";
    setText(newText);
    props.showalert("Text Cleared!", "primary");

  }
  const handleonchange = (event)=>{
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="container"> 
      <h1 className={`${props.mode==='light'?'text-dark':'text-light'}`}>{props.heading} </h1>
      <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?props.mode:'white'}} value = {text} onChange={handleonchange} id="exampleTextarea" rows="8"></textarea>
      <button className={`btn btn-${props.mode} mx-2`} style={{border:'2px solid black'}} onClick={upclick}>Convert to Upper case</button>
      <button className={`btn btn-${props.mode} mx-2`} style={{border:'2px solid black'}} onClick={loclick} >Convert to Lower case</button>
      <button className={`btn btn-${props.mode} mx-2`} style={{border:'2px solid black'}} onClick={replaceclick}> Replace Text</button> 
      <button className={`btn btn-${props.mode} mx-2`} style={{border:'2px solid black'}} onClick={clearclick}> clear Text</button>
    </div>
    <div className={`container my-4 ${props.mode==='light'?'text-dark':'text-light'}`}>
      <h1>{props.detail}</h1>
      <p>{text.trim().split(/\s+/).filter(Boolean).length} Words <br></br> {text.length} Chracters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Text Above to Preview Here '}</p>
    </div>
    </>
  );
}
