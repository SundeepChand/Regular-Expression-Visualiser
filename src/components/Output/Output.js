import React from 'react'
import './styles/highlight.css'

const Output = (props) => {
    return (
        <div className="container">
            <div className="header">
              <h4>Result</h4>
              <p>{props.matches} Match{props.matches > 1 ? 'es' : ''} found of {props.char} characters</p>
            </div>
            <div ref={props.backdropRef} className="backdrop">
                <div ref={props.highlightRef} className="highlights">
                </div>
            </div>

            <textarea
                ref={props.textAreaRef}
                onScroll={props.handleScroll}
                placeholder="Enter text to analyze..."
                value={props.text}
                onChange={props.handleChange}
            >
            </textarea>
        </div>
    )
}

export default Output
