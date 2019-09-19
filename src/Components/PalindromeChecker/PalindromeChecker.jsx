import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox'
import Button from '../button/button'
import './PalindromeChecker.css';

class PalindromeChecker extends Component {
  constructor() {
      super();
      this.state = {
        Sentence: '',
        IsItPalindrome: ''
      };
    }

  handleChange = (sentence) => {
    this.setState({ Sentence: sentence.target.value })
  }

  handleClick = () => {
    if (this.state.Sentence.search(/[A-Za-z0-9]/g) >= 0) {
      const alphanumeric = (this.state.Sentence.match(/[A-Za-z0-9]/g).join('').toLowerCase());
      const alphanumericInReverse = (alphanumeric.split('').reverse().join(''))
      this.setState({IsItPalindrome: alphanumeric === alphanumericInReverse})   
    }
  }

  render() {
    return (
      <div className="PalindromeChecker">
        <Link to='/' className='link1 link '  >HomePage</Link>
        <h1>Palindrome Checker</h1>
        <p>Checks whether the given string is <a href="https://en.wikipedia.org/wiki/Palindrome" rel="noopener noreferrer" target="_blank" >Palindrome</a> or not.</p>
        <InputBox 
          handleChange={this.handleChange} 
          sentenceWithinTheInputFrame='Write a statement to check' 
          CaesarsCipher
        />
        <Button
          handleClick={this.handleClick} 
          WordWrittenInAButton='check' 
        />
        { 
          this.state.IsItPalindrome === true
          ? 
          <h2>It's a palindrome!</h2>
          : 
          (
            this.state.IsItPalindrome === false
            ?       
            <h2>Sorry, that's not a palindrome.</h2>
            : 
            <span>Enter some alpha-numeric characters</span>
          )
        }
        <div>
        </div>
      </div>
    );
  }
}

export default PalindromeChecker;
