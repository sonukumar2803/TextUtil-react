import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","Success");
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","Success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Clear the Text","Success");
  }
  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Clipboard","Success");
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Sspace","Success");
  }
  const[text, setText]= useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" row="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  )
}
