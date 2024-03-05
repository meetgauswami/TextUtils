import React, {useState} from 'react'

export default function TextForm(props) {
        const handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase!", "success")
        }
        const handleOnChange = (event) => {
            setText(event.target.value)
        }
        const handleLowClick = () => {
            let newLowText = text.toLowerCase()
            setText(newLowText)
            props.showAlert("Converted to lowercase!", "success")
        }

        const resetAllText = () => {
                setText("")
                props.showAlert("Text Cleared", "success")
        }

        const copyText = () => {
            var text = document.getElementById("mybox")
            text.select()
            navigator.clipboard.writeText(text.value)
            props.showAlert("Copied to clipboard", "success")
        }

        const extraSpaceRemover = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Removed Extrta Spaces", "success")
        }

       const [myFontStyle, setmyFontStyle] = useState({
           color:'red',
           fontFamily:'Sens',
           fontSize:'20px'
       })


    const [text, setText] = useState("");
    // Text = "new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
<>
        <div className='conatiner my-5' style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1 style={{marginTop:'8rem'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="13"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-5" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={resetAllText}>Reset</button>
        <button className="btn btn-primary mx-5" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-4" onClick={extraSpaceRemover}>Remove Extra Spaces</button>
        <button className="btn btn-primary">Change Font</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{Math.floor(0.008 * text.split(" ").length)} Minutes Read</p>
        <h2 className='my-3'>Preview</h2>
        <p>{text.length>0?text:"Enter Something to Preview...."}</p>
    </div>
    </>
  )
}
