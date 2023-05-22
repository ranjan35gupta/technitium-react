import React from 'react'
import './searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import { useState, useEffect } from 'react'

export default function Searchbar() {

    const [values, setValues] = useState([])
    const [inputData, setInputData] = useState()
    const [filteredData, setFilterData] = useState(true)

    useEffect(() => {
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
            .then(response => response.json())
            .then(data => setValues(data.states))
            .catch(error => console.log(error))

    }, [])
    const handleChange = (e) => {
        e.preventDefault()
        setInputData(e.target.value)
        setFilterData(true)
    }

    const handleSelect = (item_id, state_name) => {


        setInputData(state_name)
        setFilterData(false)
    }

    return (
        <div>
            <div className='searchbar-container'>
                <SearchIcon className='searchIcon' />
                <input
                    value={inputData}

                    onChange={handleChange}
                    autoFocus={false}
                />
                <KeyboardVoiceRoundedIcon className='voice' />


            </div>
            <div className='filteredValue'>
                {
                    values.filter((ele, index) => {

                        let searchItem = inputData ? inputData.toLowerCase() : ""
                        const stateName = ele.state_name.toLowerCase()

                        return searchItem && stateName.startsWith(searchItem)
                    })
                        .slice(0, 10)
                        .map(ele => {
                            return (
                                <div onClick={() => handleSelect(ele.state_id, ele.state_name)}>{filteredData ? ele.state_name : ""}</div>
                            )
                        }
                        )

                }
            </div>
        </div>
    )
}