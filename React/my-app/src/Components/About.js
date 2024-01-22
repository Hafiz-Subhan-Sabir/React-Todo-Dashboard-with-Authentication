import React, {useState} from 'react'

export default function About(props) {
        const [myStyle, setMyStyle] =useState({
            color: 'black',
            backgroundColor: 'white',
        })
        const [btnStyle, setBtnStyle] = useState("Enable Dark Mode")
        const toggleStyle = ()=>{
            if(myStyle.backgroundColor === 'white'){
                setMyStyle({color : 'white', backgroundColor:'grey', border : '1px solid white'})
                setBtnStyle("Enable Light Mode");
            }
            else{
                setMyStyle({color: 'grey', backgroundColor: 'white'})
                setBtnStyle("Enable Dark Mode");
            }

        }
  return (
<div>
<div className="container my-3" style ={myStyle}>
<h1>About Us</h1>
  <div className="card" style ={myStyle}>
    <div className={`card-body ${{backgroundColor:props.mode==='white'?'grey':'white'}}`}  >
      <h5 className={`card-body ${{backgroundColor:props.mode==='white'?'black':'black'}}`}>About Our Company</h5>
      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <button className="btn btn-primary my-2 mx-2" onClick={toggleStyle}>{btnStyle}</button>
</div>
</div>
  )
}
