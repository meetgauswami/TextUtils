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
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Copied to clipboard", "success")
        }

        const extraSpaceRemover = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("Removed Extrta Spaces", "success")
        }


    const [text, setText] = useState("");
    // Text = "new text"; // wrong way to change the state
    // setText("new text"); // Correct way to change the state
  return (
<>
        <div className='conatiner my-5' style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h1 className='mb-4' style={{marginTop:'8rem'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="13"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary my-1" onClick={resetAllText}>Reset</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={extraSpaceRemover}>Remove Extra Spaces</button>
        {/* <button disabled={text.length===0}  className="btn btn-primary my-1">Change Font</button> */}
        
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} Words and {text.length} Characters</p>
        <p>{Math.floor(0.008 * text.split(" ").length)} Minutes Read</p>
        <h2 className='my-3'>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
        <p className='text-center mt-5'>Meet Gauswami</p> 
    </div>
    </>
  )
}
