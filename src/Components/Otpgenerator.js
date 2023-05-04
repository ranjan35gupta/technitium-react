import './Otpgenerator.css'
import { useState } from 'react'
export function OtpGenerator() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange() {
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9');
      return;
    }

    fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: mobileNumber,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to generate OTP');
        }
        setMobileNumber('');
        setErrorMessage('');
        alert('OTP sent successfully');
        console.log(response.mobile)
      })
      
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  function handleInput(e) {
    setMobileNumber(e.target.value);
  }

  return (
            <div className="container">
              <h1>{errorMessage}</h1>
                <input onChange={handleInput} placeholder='mobile' />
                <button onClick={handleChange}>Get OTP</button>
    
            </div>
        )
    }