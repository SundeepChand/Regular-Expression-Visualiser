import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Output from './components/Output/Output'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {

  const [pattern, setPattern] = useState('')
  const [text, setText] = useState('')
  const [matches, setMatches] = useState(0)
  const [charachter, setCharacter] = useState(0)

  const processPattern = () => {
    console.log(pattern, text)

    highlightRef.current.innerHTML = text

    if (text !== '' && pattern !== '') {
      try {
        const regex = RegExp(pattern, 'g')

        let match, textToSlice = text, i = 0
        while ((match = regex.exec(text)) !== null && match[0] !== '') {
          let offset = i * 26
          var start = match.index + offset
          let end = start + match[0].length - 1

          console.log(`${match[0]}: ${start} - ${end}`)
          let classname = ''
          if (i % 2 === 0) {
            classname = 'class="even"'
          } else {
            classname = 'class="_odd"'
          }

          highlightRef.current.innerHTML = textToSlice.slice(0, start)+
            '<mark '+ classname + '>' +
              textToSlice.slice(start, end + 1)+
            '</mark>'+
            textToSlice.slice(end + 1)

          console.log(highlightRef.current.innerHTML)
          textToSlice = highlightRef.current.innerHTML
          i++
        }
        setMatches(i)

      } catch (error) {

      }
    } else {
      setMatches(0)
    }
  }

  useEffect(() => {
    processPattern()
  })

  const handleScroll = () => {
    backdropRef.current.scrollTop = textAreaRef.current.scrollTop
  }

  const textAreaRef = useRef()
  const backdropRef = useRef()
  const highlightRef = useRef()

  return (
    <div className="App">
      <Header />

      <div className={'content'}>
        <Input
          pattern={pattern}
          handleChange={(event) => {
            setPattern(event.target.value)
          }}
        />

        <Output
          text={text}
          char={charachter}
          matches={matches}
          textAreaRef={textAreaRef}
          highlightRef={highlightRef}
          backdropRef={backdropRef}
          handleScroll={handleScroll}
          handleChange={(event) => {
            setText(event.target.value)
            setCharacter(event.target.value.length)
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App
