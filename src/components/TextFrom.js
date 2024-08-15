import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text convert into uppercase","success");
    };

    const handleOnChange = (event) => {
        console.log("onTextUppercaseChange");
        setText(event.target.value);
    };

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text convert into lowercase","success");
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear text successful.","success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copyed","success");
    }

    const handleRemoveExtraSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space in words.","success");
    }

    return (
        <>        
        <div className='container' style={{color:props.mode==='light' ? 'black':'white'}}>
            <h3 >{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                style={{background:props.mode==='light' ? 'white':'gray', color:props.mode==='light' ? 'black':'white',}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light' ? 'black':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.length>0 ? text.split(' ').length : 0 } words, {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read.</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:'Please enter something to preview here.'}</p>
        </div>
        </>

    )
}