import axios from "axios"
import { useState } from 'react'




export function OtpGenerator() {
    const [mobileNumber, setMobileNumber] = useState()
    const url1 = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"



    function handleClick() {

        if (!(/[6789]\d{9}$/.test(mobileNumber))) {
          alert("please enter correct mobile number")
           
        }
        axios({
            method: 'post',
            url: url1,
            data: {
                mobile: mobileNumber
            }
        })-
            .then(response => response )
            .catch(error => error)


        
    }
    function handleChange(e) {
        setMobileNumber(e.target.value)
        console.log(mobileNumber)

    }



    return (
        <div>
            <input onChange={handleChange} placeholder="Mobile Number" />
            <button onClick={handleClick}>Get OTP</button>
        </div>
    )
}