import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox';
import Button from '../button/button';
import './CaesarsCipher.css';

const CaesarsCipher = Component => {
  const [sentence, setSentence] = useState('');
  const [result, setresult] = useState('');

  const handleChange = (sentence) => {
    setSentence(sentence.target.value)
  }

  const handleClick = () => {
    let result = [];
    let SentenceToConver = sentence;
    for (let i = 0; i < SentenceToConver.length; i++) {
      switch (SentenceToConver[i].toUpperCase()) {
        case 'A':
          result.push('N')
        break;
        case 'B':
          result.push('O')
        break;
        case 'C':
          result.push('P')
        break;
        case 'D':
          result.push('Q')
        break;
        case 'E':
          result.push('R')
        break;
        case 'F':
          result.push('S')
        break;
        case 'G':
          result.push('T')
        break;
        case 'H':
          result.push('U')
        break;
        case 'I':
          result.push('V')
        break;
        case 'J':
          result.push('W')
        break;
        case 'K':
          result.push('X')
        break;
        case 'L':
          result.push('Y')
        break;
        case 'M':
          result.push('Z')
        break;
        case 'N':
          result.push('A')
        break;
        case 'O':
          result.push('B')
        break;
        case 'P':
          result.push('C')
        break;
        case 'Q':
          result.push('D')
        break;
        case 'R':
          result.push('E')
        break;
        case 'S':
          result.push('F')
        break;
        case 'T':
          result.push('G')
        break;
        case 'U':
          result.push('H')
        break;
        case 'V':
          result.push('I')
        break;
        case 'W':
          result.push('J')
        break;
        case 'X':
          result.push('K')
        break;
        case 'Y':
          result.push('L')
        break;
        case 'Z':
          result.push('M')
        break;
        default:
          result.push(SentenceToConver[i])
      }
    }
    result = result.join('')
    setresult(result)
  }

  return (
    <div className="CaesarsCipher">
    <Link to='/' className='link link1' >HomePage</Link>
      <h1>Caesars Cipher</h1>
      <div className='pTag'>
        <p>takes a <a href="https://en.wikipedia.org/wiki/ROT13" rel="noopener noreferrer" target="_blank" >ROT13</a> encoded string as input and returns a decoded string. For example, in the following joke, the punchline has been obscured by ROT13: 'Why did the chicken cross the road? Gb trg gb gur bgure fvqr!'</p>
        <p>git it a try!</p>
      </div>
      <InputBox 
        handleChange={handleChange} 
        sentenceWithinTheInputFrame='Write a sentence to convert'  
        isCaesarsCipher
      />
      <Button
        handleClick={handleClick} 
        WordWrittenInAButton='conversion' 
      />
      <div>
        {
          result
          ?
            <div>
              <p> The Caesars Cipher after conversion is: </p>
              <p className='pBig margin'>'{result}'</p>
            </div>
          :
            <p>Write a sentence in Caesars Cipher</p>
        }
        <div>
        </div>
      </div>
    </div>
  );
}

export default CaesarsCipher;