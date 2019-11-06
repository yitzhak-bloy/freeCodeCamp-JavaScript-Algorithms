import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../inputBox/InputBox';
import Button from '../button/button';
import './TelephoneNumberValidator.css';

class  TelephoneNumberValidator extends Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      result: ''
    };
  }

  handleChange = (phoneNumber) => {
    this.setState({ phoneNumber: phoneNumber.target.value })
  }

  handleClick = () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    this.setState({ result: regex.test(this.state.phoneNumber)}) 
  }

  render() {
    return (
      <div className="telephoneNumberValidator">
        <div>
          <Link to='/' className='link link1' >HomePage</Link>
        </div>
        <h1>telephone Number Validator</h1>
        <p className='spanOfTelephone'>Return true if the passed string looks like a valid US phone number</p>
        <InputBox 
          handleChange={this.handleChange} 
          sentenceWithinTheInputFrame='Write a number to check'
          isTelephoneNumberValidator
        />
        <Button
          handleClick={this.handleClick} 
          WordWrittenInAButton='check' 
        />
        {
          this.state.result
          ?
            <div>
              <p className='pBig'>This number is a real phone number!</p>
            </div>
          : 
            this.state.result === ''
            ?       
              <p>Enter a phone number for review</p>
            : 
              <p className='pBig'>Sorry, this is not a real phone number. Try again.</p>
        }
      </div>
    );
  }
}

export default TelephoneNumberValidator;