import React, {useState} from 'react'

export default function TextForm(Props) {
    const handleUpClick = () =>{
    let newText =text.toUpperCase();
    setText (newText)
    
  }
  
   const handleLoClick = () =>{
     let newText =text.toLowerCase();
    setText (newText)
     
  }
  const handleClearClick = () =>{
    
     let newText ='';
    setText (newText)

  }
   const handleCopy= () =>{
    console.log("I am copy");
    var text =document.getElementById("myBox");
      text.setSelectiononRange(0, 9999);
    navigator.clipboard.writtenText(Text.value);
    
  }
  const handleExtraSpaces = () =>{
   let newText = text.split(/[ ] +/);
   setText(newText.join(" "))
   
  }
    const handleOnChange = (event) =>{
   setText (event.target.value);
   
  
  }
     const [text, setText] = useState("Enter the text here");
      
     
  return (
    <div>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control"  id="myBox" placeholder="name@example.com"/>
 {/* <text className="form-control"value={count}  onChange={handleOnChange} id="myBox" rows="3"></text>*/}
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button> 
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button> 
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button> 
 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button> 
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
</div>
<div className="container" mx-3>
<h2>Enter the text below</h2>
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control"value={text}  onChange={handleOnChange} id="myBox" rows="3"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>  
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>   
   <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
    </div>
   
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split("").length} words and {text.length}  characters</p>
      <p> {0.008 * text.split("").length}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbook to preview it here"}</p>
    </div>
    </div>
  )
}
