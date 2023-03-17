import React , {useState} from 'react'

export default function Content(props) {
  const handleSpace=()=>{
    let newText = text.replaceAll(" ","");
    setText(newText);
  }
  const handleLwChange=()=>{
    let xText = text.toLowerCase();
    setText(xText);
  }
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const[text , setText] = useState("");
  return (
  <>
    <div className='container'>
      <div className="my-5">
        <h2>Enter text </h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleLwChange}>Convert to LowerCase</button>
      <button type="button" className="btn btn-primary" onClick={handleSpace}>Rempove Spaces</button>
    </div>
    <div className='container'>
      <div className="my-5">
      <h2>Text Summary</h2>
      <p>Number of Words are {text.split(" ").length} and Number of Characters are {text.length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
      
    </div>
    </>
  )
}
